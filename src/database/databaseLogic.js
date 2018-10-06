'use strict';

import jwt from 'jsonwebtoken';
import fs from 'fs';
import Promise from 'promise';
import { getDBSchema, getAuthSchema } from './realmSchema.js';
import { realmDatabase, authDatabase } from './realmDB.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, resSuccess, toInt, isDef, isStr, checkDate, isOptional, isArr, isEmptyObj, hasKey, getUid, relativeImgPath, checkPath, getKeyForType } from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';
import Axois from 'axios';

const buildDBErr = idx => resErr(strings().database.errors[idx]);
const buildAuthErr = idx => resErr(strings().auth.errors[idx]);
const typeIsValid = type => getDBSchema().filter(schema => schema.name === type).length > 0;

/*
 * 7200 === 2 hrs
 * todo: add interface for role 0 to adjust value
 */
const authExiprationSeconds = 7200;

const insertAuth = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, expires } = data;
    authDatabase.write(() => {
        let auth = authDatabase.create('Auth', { pubkey, challenge, signature, expires }, true);
    });
    if (isDef(auth)) {
        resolve(auth);
    } else {
        reject(buildAuthErr(6));
    }
});

const removeAuth = pubkey => new Promise((resolve, reject) => {
    authDatabase.write(() => {
        let auth = authDatabase.objects('Auth').filtered('pubkey == $0', pubkey);
        if (isDef(auth) && isDef(auth[0])) {
            authDatabase.delete(auth);
        }
    });
    resolve();
});

const getAuth = pubkey => new Promise((resolve, reject) => {
    try {
        let auth = authDatabase.objects('Auth').filtered('pubkey == $0', pubkey);
        if (isDef(auth) && isDef(auth[0])) {
            resolve(auth[0]);
        } else {
            reject(buildAuthErr(4));
        }
    } catch (e) {
        reject(e);
    }
});

const signatureVerify = data => {
    const { pubkey, challenge, signature } = data;
    if (!isStr(pubkey) || !isStr(challenge) || !isStr(signature)) {
        return resErr(strings().auth.errors[5]);
    } else if (messageVerify(data)) {
        const expires = Math.floor(Date.now() / 1000) + authExiprationSeconds;
        insertAuth({ pubkey: pubkey, challenge: challenge, signature: signature, expires: expires });
        const token = jwt.sign({
            pubkey: pubkey,
            challenge: challenge,
            signature: signature,
            expires: expires,
        }, process.env.JWT_SECRET);
        return token;
    }
    return buildAuthErr(5);
};



const hasRequiredProps = (props, data) => {
    let hasRequired = true;
    Object.keys(props).forEach(function(key) {
        const isRequired = !isOptional(props[key]);
        if (isRequired && !hasKey(data, key)) {
            hasRequired = false;
        }
    });
    return hasRequired;
}

const schemaProperties = realmType => {
    const schemas = getgetDBSchema();
    if (!isDef(schemas)) {
        return false;
    }
    const schema = schemas.filter(obj => obj.name === realmType);
    if (!isDef(schema[0])) {
        return false;
    }
    return schema[0].properties;
}

const checkData = (realmType, data) => {
    const schemaProps = schemaProperties(realmType);
    if (!schemaProps || !hasRequiredProps(schemaProps, data)) {
        return false;
    }
    return data;
}

const setAuth = pubkey => {
    let author = realmDatabase.objects('User').filtered('pubkey == $0', pubkey);
    if (!isEmptyObj(author)) {
        return author;
    }
    return { uid: getUid(), pubkey: pubkey };
}

const realmSave = (realmType, data) => new Promise((resolve, reject) => {
    console.log('realmSave:');

    data.uid = getUid();
    data.created = new Date();
    data.updated = data.created;
    data.published = (data.published === 'true') ? true : false;

    // const hasRequiredParams = checkData(data);
    // console.log(hasRequiredParams);
    // if (!hasRequiredParams) {
    //     reject(buildDBErr(5));
    // }

    console.log(data);

    // check for errors (missing required values)
    // apply auth info

    realmDatabase.write(() => {
        try {
            if (isStr(data.pubkey)) {
                data.author = setAuth(data.pubkey);
            }

            // if (isDef(data.auth)) {
            //     let userObject = {};
            //     console.log(data.auth);
            //     console.log(data.auth.RealmObject.pubkey);
            //     console.log(data.auth[0]);
            //     console.log(data.auth[0].pubkey);
            //     if (isDef(data.auth[0]) && isDef(data.auth[0].pubkey)) {
            //         userObject = realm.objects('User').filtered('pubkey CONTAINS[c] $0',data.auth[0].pubkey);
            //         console.log('userObject:');
            //         console.log(userObject);
            //     }
            //     delete data.realmType;
            //     delete data.auth;
            // }
            // get user if data.auth is set

            const result = realmDatabase.create(realmType, data, true);
            //console.log(result);
            //console.log('after realm save');
            resolve(result);
        } catch(err) {
            //console.log('error: ' + err);
            reject(err);
        }
    });
}).catch(e => {
    reject(e);
});

const realmUpdate = (realmType, data) => new Promise((resolve, reject) => {
    console.log('realmUpdate:');

    data.updated = new Date();
    data.published = (data.published === 'true') ? true : false;

    console.log(data);

    realmDatabase.write(() => {
        const updated = realmDatabase.create(realmType, data, true);
        resolve(updated);
    });
}).catch(e => {
    reject(e);
});

const realmUpsert = data => {
    const { realmType, uid } = data;
    console.log(data);
    if (!isStr(realmType)) {
        return Promise.reject(buildDBErr(0));
    }
    return (uid) ? realmUpdate(realmType, data) : realmSave(realmType, data);
}

// Optionally pass filter string
const realmGetAll = (realmType, filtered) => new Promise((resolve, reject) => {
    realmDatabase.write(() => {
        if (isDef(filtered)) {
            let result = realmDatabase.objects(realmType).filtered(filtered);
            resolve(result);
        }
        let result = realmDatabase.objects(realmType);
        resolve(result);
    });
});

const realmGetUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    realmDatabase.write(() => {
        const predicate = `${key} == "${uid}"`;
        const result = realmDatabase.objects(realmType).filtered(predicate);
        if (isDef(result)) {
            resolve(result);
        } else {
            reject(buildDBErr(2));
        }
    });
});

const realmDeleteUid = (realmType, uid) => new Promise((resolve, reject) => {
    let key = getKeyForType(realmType);
    realmGetUid(realmType, uid, key).then(realmObj => {
        realmDatabase.write(() => {
            realmDatabase.delete(realmObj);
            resolve(resSuccess());
        });
    }).catch(e => {
        reject(e);
    });
});

const realmGet = data => {
    const { realmType, uid } = data;
    if (!isStr(realmType) || !typeIsValid(realmType)) {
        return Promise.reject(buildDBErr(0));
    }
    let key = getKeyForType(realmType);
    return (uid) ? realmGetUid(realmType, uid, key) : realmGetAll(realmType);
}

const realmDelete = data => {
    const { realmType, uid } = data;
    if (!isStr(realmType)) {
        return Promise.reject(buildDBErr(0));
    }
    if (!isStr(uid)) {
        return Promise.reject(buildDBErr(1));
    }
    return realmDeleteUid(realmType, uid);
}

const validateAuth = auth => isDef(auth.expires) && checkDate(auth.expires);

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
        reject(e);
    }
});

module.exports = {
    signatureVerify,
    validateAuth,
    realmGet,
    realmUpsert,
    realmDelete,
    getAuth,
    removeAuth,
    getPublicFiles
}
