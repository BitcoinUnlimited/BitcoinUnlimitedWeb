'use strict';

import Realm from 'realm';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import Promise from 'promise';
import { getDBSchema, getAuthSchema } from './realmSchema.js';
import { realmDatabase, authDatabase } from './realmDB.js';
import { setProtocolValues } from './modelProtocols.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, resErrList, resSuccess, toInt, isDef, isStr, checkDate, isOptional, isArr, isEmptyObj, hasKey, relativeImgPath, checkPath, getKeyForType } from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';

const buildDBErr = idx => strings().database.errors[idx];
const buildAuthErr = idx => strings().auth.errors[idx];
const typeIsValid = type => getDBSchema().filter(schema => schema.name === type).length > 0;
const validateAuth = auth => isDef(auth.expires) && checkDate(auth.expires);

/*
 * 7200 === 2 hrs
 * todo: add interface for role 0 to adjust value
 */
const authExiprationSeconds = 7200;
let realmLogListener = null;

const realmWrite = (db, fn) => new Promise((resolve, reject) => {
    Realm.open(db).then(realm => {
        try {
            realm.write(() => {
                resolve(fn(realm));
            });
        } catch(e) {
            reject(e);
        }
    }).catch(e => reject(e));
});

const realmFetch = (db, fn) => new Promise((resolve, reject) => {
    Realm.open(db).then(realm => {
        try {
            resolve(fn(realm));
        } catch(e) {
            reject(e);
        }
    }).catch(e => reject(e));
});

const logListener = (logs, changes) => {
    // Update UI in response to inserted objects
    changes.insertions.forEach((index) => {
        let insertedLog = logs[index];
        console.log('inserted');
        console.log(insertedLog);
    });

    // Update UI in response to modified objects
    changes.modifications.forEach((index) => {
        let modifiedLog = logs[index];
        console.log('changed');
        console.log(modifiedLog);
    });

    // Update UI in response to deleted objects
    changes.deletions.forEach((index) => {
        console.log('deleted');
    });
}

const realmNotify = db => {
    Realm.open(db).then(realm => {
        realmLogListener = realm.objects('Log');
        realmLogListener.addListener(logListener);
    }).catch(e => console.log(e));
}

/*
 * Log messages are not editable
 * data (object):
 * {status: ['success' or 'error'], description: 'log message', fn: someFn.name}
 */
const realmLog = data => {
    if (data) {
        realmWrite(realmDatabase, realm => {
            realm.create('Log', data, true);
        }).then(() => {
            realmNotify(realmDatabase);
        });
    }
}

const rejectWithLog = (errorText, fn) => {
    fn = (fn) ? fn : '';
    errorText = (errorText && isStr(errorText)) ? errorText : 'There was an error.';
    let error = resErr(errorText, fn);
    realmLog(error);
    return error;
}

const insertAuth = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, expires } = data;
    realmWrite(authDatabase, realm => {
        const result = realm.create('Auth', { pubkey, challenge, signature, expires }, true);
        if (!result || isEmptyObj(result)) throw 'Insert auth failed.';
        return result;
    }).then(res => {
        realmWrite(realmDatabase, realm => {
            realm.create('User', { pubkey }, true);
        }).then(_ => {
            realmLog(resSuccess(`Added User ${pubkey}`, 'insertAuth()'));
        }).catch(e => {
            realmLog(resErr(e, 'insertAuth()'));
        });
        resolve(res);
    }).catch(e => reject(e));
});

// test delete of auth
const removeAuth = pubkey => new Promise((resolve, reject) => {
    realmWrite(authDatabase, realm => {
        let user = realm.objects('Auth').filtered('pubkey == $0', pubkey);
        let { "0": result } = user;
        if (result) realm.delete(user);
    }).then(res => resolve(resSuccess(`Deleted pubkey: ${pubkey}`))).catch(e => reject(e));
});

const getAuth = pubkey => new Promise((resolve, reject) => {
    realmFetch(authDatabase, realm => {
        let user = realm.objects('Auth').filtered('pubkey == $0', pubkey);
        let { "0": result } = user;
        if (!result) throw 'Pubkey not found.';
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e)));
});

const getLogs = () => new Promise((resolve, reject) => {
    realmFetch(realmDatabase, realm => {
        let logs = realm.objects('Log');
        console.log(logs);
        return logs;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e)));
});

const signatureVerify = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature } = data;
    if (!isStr(pubkey) || !isStr(challenge) || !isStr(signature)) {
        reject(rejectWithLog('Missing data for messageVerify', 'signatureVerify()'));
    }
    if (messageVerify(data)) {
        const expires = Math.floor(Date.now() / 1000) + authExiprationSeconds;
        insertAuth({ pubkey, challenge, signature, expires }).then(res => {
            if (!res.pubkey || !res.challenge || !res.signature || !res.expires) throw 'Missing required jwt data.';
            const token = jwt.sign({
                pubkey: res.pubkey,
                challenge: res.challenge,
                signature: res.signature,
                expires: res.expires
            }, process.env.JWT_SECRET);
            if (!token) throw 'Token creation error.';
            resolve(token);
        }).catch(e => reject(rejectWithLog(e, 'signatureVerify()')));
    } else {
        reject(rejectWithLog('Challenge could not be verified.', 'signatureVerify()'));
    }
});

const getSchemaProps = realmType => {
    const schemas = getDBSchema();
    if (!isDef(schemas)) {
        return false;
    }
    const schema = schemas.filter(obj => obj.name === realmType);
    if (!isDef(schema[0]) || !isDef(schema[0].properties)) {
        return false;
    }
    return schema[0].properties;
}

const hasRequiredProps = (props, data) => {
    let hasRequired = true;
    let missingProps = [];
    Object.keys(props).forEach(function(key) {
        const isRequired = !isOptional(props[key]);
        if (isRequired && !hasKey(data, key)) {
            missingProps.push(key);
            hasRequired = false;
        }
    });
    return hasRequired ? hasRequired : missingProps;
}

const checkRequiredParams = (realmType, data) => {
    const schemaProps = getSchemaProps(realmType);
    if (!schemaProps) {
        return rejectWithLog(`Unable to get schema properties for ${realmType}`, 'checkRequiredParams()');
    }
    let requiredPropsExist = hasRequiredProps(schemaProps, data);
    if (requiredPropsExist !== true) {
        let error = resErrList(requiredPropsExist, 'checkRequiredParams()');
        realmLog(error);
        return error;
    }
    return true;
}

const realmSave = data => new Promise((resolve, reject) => {

    let { realmType } = data;

    // console.log(`realmSave ${realmType} (data):`);
    // console.log(data);

    let errorCheck = checkRequiredParams(realmType, data);
    if (errorCheck !== true) {
        reject(errorCheck);
    } else {
        setProtocolValues(realmType, data).then(res => {

            // console.log('setProtocolValues');
            // console.log(res);

            realmWrite(realmDatabase, realm => {
                const saved = realm.create(realmType, res, true);
                if (!saved || isEmptyObj(saved)) throw `${realmType} not saved.`;

                // console.log('saved! ');
                // console.log(saved);

                return saved;
            }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e, 'realmSave()')));
        }).catch(e => reject(rejectWithLog(e, 'realmSave()')));
    } // required parameter check
});

/*
 * Optionally pass filter string
 */
const realmGetAll = (realmType, filtered) => new Promise((resolve, reject) => {
    realmFetch(realmDatabase, realm => {
        let result = (filtered) ? realm.objects(realmType).filtered(filtered) : realm.objects(realmType);
        if (!result || isEmptyObj(result)) throw `No results found for ${realmType}.`;
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e, 'realmGetAll()')));
});

const realmGetUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    realmFetch(realmDatabase, realm => {
        const predicate = `${key} == "${uid}"`;
        const { "0": result } = realm.objects(realmType).filtered(predicate);
        if (!result || isEmptyObj(result)) throw `No results found for uid: ${uid} in ${realmType}.`;
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e, 'realmGetUid()')));
});

const realmDeleteUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    realmGetUid(realmType, uid, key).then(res => {
        realmWrite(realmDatabase, realm => {
            realm.delete(res);
        }).then(res => resolve(resSuccess())).catch(e => reject(e));
    }).catch(e => reject(rejectWithLog(e, 'realmDeleteUid()')));
});

const realmGet = data => {
    const { realmType, uid } = data;
    return (uid) ? realmGetUid(realmType, uid, getKeyForType(realmType)) : realmGetAll(realmType);
}

const realmDelete = data => {
    const { realmType } = data;
    const key = getKeyForType(realmType);
    return realmDeleteUid(realmType, data[key], key);
}

const getPublicFiles = (dir) => new Promise((resolve, reject) => {
    try {
        if (checkPath(dir)) {
            let results = [];
            fs.readdirSync(dir).forEach((file) => {
                file = dir + '/' + file;
                let stat = fs.statSync(file);
                if (stat && stat.isDirectory()) {
                    getPublicFiles(file).then(result => results.push(result));
                } else {
                    results.push(relativeImgPath(file));
                }
            });
            resolve(results);
        } else {
            reject();
        }
    } catch(e) {
        reject(rejectWithLog(e, 'getPublicFiles()'));
    }
});

module.exports = {
    signatureVerify,
    validateAuth,
    typeIsValid,
    realmGet,
    realmSave,
    realmDelete,
    getAuth,
    removeAuth,
    getPublicFiles,
    getLogs
}
