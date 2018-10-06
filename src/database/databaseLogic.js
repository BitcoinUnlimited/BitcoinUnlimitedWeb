'use strict';

import jwt from 'jsonwebtoken';
import fs from 'fs';
import Promise from 'promise';
import { getDBSchema, getAuthSchema } from './realmSchema.js';
import { realmDatabase, authDatabase } from './realmDB.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, resErrList, resSuccess, toInt, isDef, isStr, checkDate, isOptional, isArr, isEmptyObj, hasKey, getUid, relativeImgPath, checkPath, getKeyForType } from '../helpers/helpers.js';
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
    let missing = [];
    Object.keys(props).forEach(function(key) {
        const isRequired = !isOptional(props[key]);
        if (isRequired && !hasKey(data, key)) {
            missing.push(key);
            hasRequired = false;
        }
    });
    return hasRequired ? hasRequired : missing;
}

const getSchemaProps = realmType => {
    const schemas = getgetDBSchema();
    if (!isDef(schemas)) {
        return false;
    }
    const schema = schemas.filter(obj => obj.name === realmType);
    if (!isDef(schema[0]) || !isDef(schema[0].properties)) {
        return false;
    }
    return schema[0].properties;
}

const checkRequiredParams = (realmType, data) => {
    const schemaProps = getSchemaProps(realmType);
    if (!schemaProps) {
        return resErr(buildDBErr(4));
    }
    let hasRequired = hasRequiredProps(schemaProps, data);
    if (hasRequired !== true) {
        return resErrList(hasRequired);
    }
    return true;
}

const setAuth = pubkey => {
    let author = realmDatabase.objects('User').filtered('pubkey == $0', pubkey);
    if (!isEmptyObj(author)) {
        return author;
    }
    return { uid: getUid(), pubkey: pubkey };
}

const propSaveFixesForType = (realmType, data) => {
    data.uid = getUid();
    data.created = new Date();
    data.updated = data.created;
    data.published = (data.published === 'true') ? true : false;
    return data;
}

const realmSave = (realmType, data) => new Promise((resolve, reject) => {
    console.log('realmSave:');
    console.log(data);

    // set defaults per each realmType
    // give this a better name
    data = propSaveFixesForType(realmType);

    let hasRequired = checkRequiredParams(data);
    if (hasRequired !== true) {
        reject(resErr(hasRequired));
    }

    // check for errors (missing required values)
    // apply auth info

    realmDatabase.write(() => {
        try {

            /*
             * Todo: If model has a realm association, get that association if it exists.
             * associations should be optional and non-breaking
             */

            // if (isStr(data.pubkey)) {
            //     data.author = setAuth(data.pubkey);
            // }

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


            console.log('realmSave-after data:');
            console.log(data);
            const result = realmDatabase.create(realmType, data, true);
            resolve(result);
        } catch(err) {
            reject(err);
        }
    });
}).catch(e => {
    reject(e);
});

const realmUpdate = (realmType, data) => new Promise((resolve, reject) => {
    console.log('realmUpdate:');
    console.log(data);

    // update info
    data.updated = new Date();
    data.published = (data.published === 'true') ? true : false;

    realmDatabase.write(() => {


        console.log('realmUpdate-after data:');
        console.log(data);
        const updated = realmDatabase.create(realmType, data, true);
        resolve(updated);
    });
}).catch(e => {
    reject(e);
});

const realmUpsert = data => {
    const { realmType, uid } = data;
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
