'use strict';

import jwt from 'jsonwebtoken';
import uuidv4 from 'uuid/v4';
import Promise from 'promise';
import { realmDB, getSchemas, authDB, getDB } from './realmSchema.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, resSuccess, toInt, isDef, isStr, checkDate, isReq, isArr, isEmptyObj, hasKey } from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';
import Axois from 'axios';

const buildDBErr = idx => resErr(strings().database.errors[idx]);
const buildAuthErr = idx => resErr(strings().auth.errors[idx]);

/*
 * 7200 === 2 hrs
 * todo: add interface for role 0 to adjust value
 */
const authExiprationSeconds = 7200;

const insertAuth = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, expires } = data;
    authDB.write(() => {
        let auth = authDB.create('Auth', { pubkey: pubkey, challenge: challenge, signature: signature, expires: expires }, true);
    });
    if (isDef(auth)) {
        resolve(auth);
    } else {
        reject(buildAuthErr(6));
    }
});

const removeAuth = pubkey => new Promise((resolve, reject) => {
    authDB.write(() => {
        let auth = authDB.objects('Auth').filtered('pubkey == $0', pubkey);
        if (isDef(auth) && isDef(auth[0])) {
            realmDB.delete(auth);
        }
    });
    resolve();
});

const getAuth = pubkey => new Promise((resolve, reject) => {
    try {
        let auth = authDB.objects('Auth').filtered('pubkey == $0', pubkey);
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
        const isRequired = isReq(props[key]);
        if (isRequired && !hasKey(data, key)) {
            hasRequired = false;
        }
    });
    return hasRequired;
}

const schemaProperties = type => {
    const schemas = getSchemas();
    if (!isDef(schemas)) {
        return false;
    }
    const schema = schemas.filter(obj => obj.name === type);
    if (!isDef(schema[0])) {
        return false;
    }
    return schema[0].properties;
}

const checkData = (type, data) => {
    const schemaProps = schemaProperties(type);
    if (!schemaProps || !hasRequiredProps(props, data)) {
        return false;
    }
    return data;
}

const realmSave = (type, uid, data) => {
    return new Promise((resolve, reject) => {
        data.uid = uuidv4();
        const hasRequiredParams = checkData(data);
        if (!hasRequiredParams) {
            reject(buildDBErr(5));
        }
        realmDB.write(() => {
            const result = realmDB.create(type, hasRequiredParams, true);
            resolve(result);
        });
    }).catch(e => {
        reject(e);
    });
}

const realmUpdate = (type, uid, data) => {
    return new Promise((resolve, reject) => {
        realmDB.write(() => {
            const updated = realmDB.create(type, data, true);
            resolve(updated);
        });
    }).catch(e => {
        reject(e);
    });
}

const realmUpsert = data => {
    const { type, uid } = data;
    if (!isStr(type)) {
        return Promise.reject(buildDBErr(0));
    }
    return (uid) ? realmUpdate(type, uid, data) : realmSave(type, data);
}

const realmGetAll = (type, filtered) => {
    return new Promise((resolve, reject) => {
        realmDB.write(() => {
            if (isDef(filtered)) {
                let result = realmDB.objects(type).filtered(filtered);
                resolve(result);
            } else {
                let result = realmDB.objects(type);
                resolve(result);
            }
        });
    });
}

const realmGetUid = (type, uid) => {
    return new Promise((resolve, reject) => {
        realmDB.write(() => {
            const result = realmDB.objects(type).filtered('uid == $0', uid);
            if (isDef(result)) {
                resolve(result);
            } else {
                reject(buildDBErr(2));
            }
        });
    });
};

const realmDeleteUid = (type, uid) => {
    return new Promise((resolve, reject) => {
        realmGetUid(type, uid).then(realmObj => {
            realmDB.write(() => {
                realmDB.delete(realmObj);
                resolve(resSuccess());
            });
        }).catch(e => {
            reject(e);
        });
    });
}

const realmGet = data => {
    const { type, uid } = data;
    if (!isStr(type)) {
        return Promise.reject(buildDBErr(0));
    }
    return (uid) ? realmGetUid(type, uid) : realmGetAll(type);
}

const realmDelete = data => {
    const { type, uid } = data;
    if (!isStr(type)) {
        return Promise.reject(buildDBErr(0));
    }
    if (!isStr(uid)) {
        return Promise.reject(buildDBErr(1));
    }
    return realmDeleteUid(type, uid);
}

const validateAuth = auth => isDef(auth.expires) && checkDate(auth.expires);

module.exports = {
    signatureVerify,
    validateAuth,
    realmGet,
    realmUpsert,
    realmDelete,
    getAuth,
    removeAuth,
    testing
}
