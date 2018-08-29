'use strict';

import jwt from 'jsonwebtoken';
import uuidv4 from 'uuid/v4';
import Promise from 'promise';
import { realmDB, getSchemas, authDB, getDB } from './realmSchema.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { resErr, resSuccess, toInt, isDef, isStr, checkDate, isReq, isArr, isEmptyObj, hasKey } from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';

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
        reject(resErr(strings().auth.errors[6]));
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
            reject(resErr(strings().auth.errors[4]));
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
    return resErr(strings().auth.errors[5]);
};

const buildDatabaseError = idx => resErr(strings().database.errors[idx]);

const realmGetAll = (type, filtered) => {
    return new Promise((resolve, reject) => {
        if (!isDef(type)) {
            reject(resErr(strings().database.errors[0]));
        }
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
        if (!isDef(type) || !isDef(uid)) {
            resolve(resErr(strings().database.errors[0]));
        }
        realmDB.write(() => {
            const result = realmDB.objects(type).filtered('uid == $0', uid);
            if (isDef(result)) {
                resolve(result);
            } else {
                reject(buildDatabaseError(2));
            }
        });
    });
};

const realmDelete = (type, value) => {
    return new Promise((resolve, reject) => {
        realmGetUid(type, value).then(realmObj => {
            realmDB.write(() => {
                realmDB.delete(realmObj);
                resolve(resSuccess());
            });
        }).catch(e => {
            reject(e);
        });
    });
}

const realmUpsert = (type, obj) => {
    return new Promise((resolve, reject) => {
        realmDB.write(() => {
            resolve(realmDB.create(type, obj, true));
        });
    });
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

const buildProps = (props, data) => {
    let obj = {};
    Object.keys(props).forEach(function(key) {
        if (hasKey(data, key)) {
            obj[key] = data[key];
        }
    });
    return obj;
}

const buildUpsertObj = (type, data) => {
    const schemas = getSchemas();
    if (!isDef(type) || !isDef(schemas)) {
        return {};
    }
    const schema = schemas.filter(obj => obj.name === type);
    if (isDef(schema[0]) && schema[0].hasOwnProperty('properties')) {
        const props = schema[0].properties;
        data.uid = data.uid || uuidv4();
        if (!hasRequiredProps(props, data)) {
            return {};
        }
        return buildProps(props, data);
    }
}

const opSwitch = data => {
    const { type, op } = data;
    if (op === 'upsert') {
        const upsertObject = buildUpsertObj(type, data);
        if (!isEmptyObj(upsertObject)) {
            return realmUpsert(type, upsertObject);
        }
        return Promise.reject(buildDatabaseError(4));
    } else {
        const { uid } = data;
        if (isDef(uid)) {
            if (op === 'delete') {
                return realmDelete(type, uid);
            } else {
                return realmGetUid(type, uid);
            }
        } else {
            const { filtered } = data;
            return realmGetAll(type, filtered);
        }
    }
}

const realmOp = data => {
    const { type, op } = data;
    if (!isStr(type)) {
        return Promise.reject(buildDatabaseError(0));
    }
    return opSwitch(data);
};

const validateAuth = auth => isDef(auth.expires) && checkDate(auth.expires);

module.exports = {
    signatureVerify,
    validateAuth,
    realmOp,
    getAuth,
    removeAuth
}
