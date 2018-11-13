'use strict';

import Realm from 'realm';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import Promise from 'promise';
import { getDBSchema, getAuthSchema } from './realmSchema.js';
import { realmDatabase, authDatabase } from './realmDB.js';
import { setProtocolValues } from './modelProtocols.js';
import { fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, eToStr, resErrList, resSuccess, toInt, isDef, isStr, checkDate, isOptional, isArr, isEmptyObj, hasKey, relativeImgPath, getKeyForType } from '../helpers/helpers.js';
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

const isSuperAdmin = pubkey => (process.env.DB_ADMIN_PUBKEY.indexOf(pubkey) !== -1);

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

const realmBackup = _ => new Promise((resolve, reject) => {
    let promiseMap = getDBSchema().map(schema => {
        return realmFetch(realmDatabase, realm => {
            return realm.objects(schema.name);
        }).then(res => {
            return res;
        });
    });
    Promise.all(promiseMap).then(results => {
        resolve(results);
    });
});

/*
 * Log messages are not editable post creation
 * data (object):
 * {status: ['success' or 'error'], description: 'log message'}
 */
const realmLog = data => {
    if (data) {
        realmWrite(authDatabase, realm => {
            realm.create('Log', data, true);
        });
    }
}

const rejectWithLog = e => {
    e = (e) ? e : 'There was an unknown error.';
    let error = resErr(e);
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
            realmLog(resErr(`insertAuth() ${eToStr(e)}`));
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
    realmFetch(authDatabase, realm => {
        return realm.objects('Log').sorted('created', true);
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e)));
});

const isAdmin = pubkey => new Promise((resolve, reject) => {
    if (isSuperAdmin(pubkey)) {
        resolve(true);
    } else {
        realmFetch(authDatabase, realm => {
            const predicate = `pubkey == "${pubkey}"`;
            const { "0": result } = realm.objects('Admin').filtered(predicate);
            if (!result || isEmptyObj(result)) throw `Invalid pubkey: pubkey not found.`;
            resolve(result);
        }).then(res => resolve(res)).catch(e => reject(rejectWithLog(`isAdmin(): ${eToStr(e)}`)));
    }
});

const signatureVerify = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature } = data;
    if (!isStr(pubkey) || !isStr(challenge) || !isStr(signature)) {
        reject(rejectWithLog('signatureVerify(): Missing data for messageVerify.'));
    }
    isAdmin(pubkey).then(res => {
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
            }).catch(e => reject(rejectWithLog(`signatureVerify(): ${eToStr(e)}`)));
        } else {
            reject(rejectWithLog('signatureVerify(): Challenge could not be verified.'));
        }
    }).catch(e => {
        reject(rejectWithLog(`signatureVerify(): ${eToStr(e)}`));
    });
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

const hasRequiredProps = (schemaProps, data, primaryKey) => {
    let hasRequired = true;
    let missingProps = [];
    Object.keys(schemaProps).forEach(function(key) {
        if (key === primaryKey) return;
        const isRequired = !isOptional(schemaProps[key]);
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
        return rejectWithLog(`checkRequiredParams(): Unable to get schema properties for ${realmType}`);
    }
    const primaryKey = getKeyForType(realmType);
    const requiredPropsExist = hasRequiredProps(schemaProps, data, primaryKey);
    if (requiredPropsExist !== true) {
        let error = resErrList(requiredPropsExist, 'checkRequiredParams()');
        realmLog(error);
        return error;
    }
    return true;
}

const realmSave = data => new Promise((resolve, reject) => {
    let { realmType } = data;
    let errorCheck = checkRequiredParams(realmType, data);
    if (errorCheck !== true) {
        reject(errorCheck);
    } else {
        setProtocolValues(realmType, data).then(res => {
            realmWrite(realmDatabase, realm => {
                let saved = realm.create(realmType, res, true);
                if (!saved || isEmptyObj(saved)) throw `${realmType} not saved.`;
                return saved;
            }).then(res => resolve(res)).catch(e => {
                reject(rejectWithLog(`realmSave(): ${eToStr(e)}`));
            });
        }).catch(e => {
            reject(rejectWithLog(`realmSave(): ${eToStr(e)}`));
        });
    } // required parameter check
});

/*
 * Optionally pass filter string
 */
const realmGetAll = (realmType, query = '') => new Promise((resolve, reject) => {
    let { ordered = 'DESC', start = '', end = '' } = query;
    realmFetch(realmDatabase, realm => {
        // default is ascending order
        let result;
        if (ordered !== 'DESC') {
            result = realm.objects(realmType).sorted('created', false);
        } else {
            result = realm.objects(realmType).sorted('created', true);
        }
        if (start && end && result) {
            result = result.slice(start, end);
        }
        if (!result || isEmptyObj(result)) throw `No results for ${realmType}. ${(ordered) ? ordered : ''} ${(start && end) ? start + '-' + end : ''}`;
        return result;

    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(`realmGetAll(): ${eToStr(e)}`)));
});

const realmGetUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    realmFetch(realmDatabase, realm => {
        const predicate = `${key} == "${uid}"`;
        const { "0": result } = realm.objects(realmType).filtered(predicate);
        if (!result || isEmptyObj(result)) throw `No results found for uid: ${uid} in ${realmType}.`;
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(`realmGetUid(): ${eToStr(e)}`)));
});

const realmDeleteUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    realmGetUid(realmType, uid, key).then(res => {
        realmWrite(realmDatabase, realm => {
            realm.delete(res);
        }).then(res => resolve(resSuccess())).catch(e => reject(e));
    }).catch(e => reject(rejectWithLog(`realmDeleteUid(): ${eToStr(e)}`)));
});

const realmGet = data => {
    const { realmType, uid, query } = data;
    return (uid) ? realmGetUid(realmType, uid, getKeyForType(realmType)) : realmGetAll(realmType, query);
}

const realmDelete = data => {
    const { realmType } = data;
    const key = getKeyForType(realmType);
    return realmDeleteUid(realmType, data[key], key);
}

const checkPath = (path, fileType = '') => {
    let pathArr = path.split('/').filter(dir => dir !== '');
    for (var i = 0; i < pathArr.length; i++) {
        let segment = '/' + pathArr.filter((p, idx) => idx <= i).join('/');
        if (segment.indexOf('.' + fileType) !== -1) break;
        if (!fs.existsSync(segment)) {
            try {
                fs.mkdirSync(segment);
            } catch(e) {
                return false;
            }
        }
    }
    return true;
}

const getPublicFiles = (dir) => new Promise((resolve, reject) => {
    try {
        if (checkPath(dir)) {
            let results = [];
            fs.readdirSync(dir).forEach(file => {
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
            reject(`Path ${dir} was not created.`);
        }
    } catch(e) {
        reject(rejectWithLog(`getPublicFiles(): ${eToStr(e)}`));
    }
});

module.exports = {
    realmBackup,
    isAdmin,
    signatureVerify,
    validateAuth,
    typeIsValid,
    realmGet,
    realmSave,
    realmDelete,
    getAuth,
    removeAuth,
    checkPath,
    getPublicFiles,
    getLogs
}
