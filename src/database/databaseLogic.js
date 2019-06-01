'use strict';

import Realm from 'realm';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import Promise from 'promise';
import uuidv4 from 'uuid/v4';
import { getDBSchema, getAuthSchema } from './realmSchema.js';
import { realmDatabase, authDatabase } from './realmDB.js';
import { setProtocolValues } from './modelProtocols.js';
import { fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import {
    resErr, eToStr, resErrList,
    resSuccess, toInt, isDef,
    isStr, checkDate, isOptional,
    isArr, isEmptyObj, hasKey,
    getKeyForType, realmTypeHasProps
} from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';

const buildDBErr = idx => strings().database.errors[idx];
const buildAuthErr = idx => strings().auth.errors[idx];
const validateAuth = auth => isDef(auth.expires) && checkDate(auth.expires);
const authDefaultExpire = 3600;
const clearChallengeObj = {
    'countdown': process.env.CHALLENGE_EXPIRE || 600, // 10 minute interval default
    'isRunning': false
}

/**
 * [typeIsValid Check if the type is in either the public or private auth database.]
 * @param  {String} type [Type to check.]
 * @return {Boolean}      [Returns true/false.]
 */
const typeIsValid = type => {
    return getDBSchema().filter(schema => schema.name === type).length > 0 || getAuthSchema().filter(schema => schema.name === type).length > 0;
}

/**
 * [typeIsValidPublic Check if the type is in the public database instance]
 * @param  {String} type [Type to check.]
 * @return {Boolean}      [Returns true/false.]
 */
const typeIsValidPublic = type => getDBSchema().filter(schema => schema.name === type).length > 0;

/**
 * [isAuthTypeDB Check if the type is from the Auth database.]
 * @param  {String}  type [Schema name.]
 * @return {Boolean}      [Returns true/false.]
 */
const isAuthTypeDB = type => getAuthSchema().filter(schema => schema.name === type).length > 0;

/**
 * [getDatabaseType Returns the realmDatabase instance specified by the type schema.name.]
 * @param  {String} type [The database schema name.]
 * @return {RealmDatabase Instance}      [RealmDB instance.]
 */
const getDatabaseType = type => {
    if (getDBSchema().filter(schema => schema.name === type).length > 0) {
        return realmDatabase;
    } else {
        return authDatabase;
    }
}

/**
 * [checkPublicDatabase Checks if the realmType is a type available in the public database]
 * @param  {String} type [Schema name.]
 * @return {RealmDatabase Instance}      [Returns the database instance or false.]
 */
const checkPublicDatabase = type => {
    if (getDBSchema().filter(schema => schema.name === type).length > 0) {
        return realmDatabase;
    }
    return false;
}

/**
 * [authExiprationSeconds Returns the amount of time an authenticated user has before expiring.]
 */
const authExiprationSeconds = (process && process.env.AUTH_EXPIRE) ? process.env.AUTH_EXPIRE : authDefaultExpire;
/**
 * [pubkeyIsSuperAdmin Returns boolean value if the pubkey is a super admin set in the environment variables at /.env]
 * @param  {String}  pubkey [The users public key.]
 * @return {Boolean}        [true/false.]
 */
const pubkeyIsSuperAdmin = pubkey => (process.env.DB_ADMIN_PUBKEY.indexOf(pubkey) !== -1);

/**
 * [realmWrite Wrapper for write transactions.]
 * @param  {RealmDatabase Instance}   db [Database instance.]
 * @param  {Function} fn [Callback function.]
 * @return {Promise - RealmDatabase Object} [Returns a Promise with the resulting saved object.]
 */
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

/**
 * [realmFetch Fetch from the database, does not open a write transaction.]
 * @param  {RealmDatabase Instance}   db [Database instance.]
 * @param  {Function} fn [Callback function.]
 * @return {RealmDatabase Object} [Returns a Promise with the resulting object.]
 */
const realmFetch = (db, fn) => new Promise((resolve, reject) => {
    Realm.open(db).then(realm => {
        try {
            resolve(fn(realm));
        } catch(e) {
            reject(e);
        }
    }).catch(e => {
        reject(e);
    });
});

/**
 * [realmBackup Builds a database backup object]
 * @param  {undefined} _ [ignored param]
 * @return {Object}   [JavaScript object built from the current database snapshot.]
 */
const realmBackup = _ => new Promise((resolve, reject) => {
    let promiseMap = getDBSchema().map(schema => {
        return realmFetch(realmDatabase, realm => {
            let objects = realm.objects(schema.name);
            let results = [];
            Object.keys(objects).map(key => {
                results.push(objects[key]);
            });
            return (results.length > 0) ? { [schema.name]: results } : { [schema.name]: false };
        }).then(res => {
            return res;
        });
    });
    Promise.all(promiseMap).then(results => {
        resolve(results);
    });
});

/**
 * [getBackupJSON Get JSON for a specific backup path.]
 * @param  {String} path [The path to the backup JSON.]
 * @return {Object}      [Parsed JSON object.]
 */
const getBackupJSON = path => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (e, res) => {
        if (e) throw e;
        let backupJSON = JSON.parse(res);
        resolve(backupJSON);
    });
});

/**
 * [formatBackupJSON Formats the backup JSON object for saving.]
 * @param  {Object} backupJSON [Backup object to be transformed.]
 * @return {Object}            [Backup object.]
 */
const formatBackupJSON = backupJSON => {
    let backup = {};
    backupJSON.map(obj => {
        return Object.keys(obj).map(key => {
            let row = obj[key];
            // false is skipped
            if (row) {
                backup[key] = row;
            }
        });
    });
    return backup;
}

/**
 * [revertSchema Deletes old objects from the database and replaces them with the backup data.]
 * @param  {Object} backupJSON [Backup data.]
 * @return {Promise}            [Promise resolved as true on success.]
 */
const revertSchema = backupJSON => new Promise((resolve, reject) => {
    // format things
    let backup = formatBackupJSON(backupJSON);
    // for each schema type
    let promiseMap = getDBSchema().map(schema => {
        return realmWrite(realmDatabase, realm => {
            // delete all objects
            let objects = realm.objects(schema.name);
            realm.delete(objects);
            // revert to json
            let didUpdate = false;
            Object.keys(backup).map(key => {
                if (schema.name === key) {
                    let typeContentArray = backup[key];
                    typeContentArray.map(content => {
                        realm.create(schema.name, content, true);
                        didUpdate = true;
                    });
                }
            });
            return didUpdate;
        }).then(res => {
            return res;
        }).catch(e => {
            throw e;
        });
    });
    Promise.all(promiseMap).then(results => {
        resolve(true);
    }).catch(e => {
        reject(e);
    });
});

/**
 * [revertDatabase Wrapper process for getting a database backup and then reverting to that backup.]
 * @param  {String} path [Path of database backup.]
 * @return {Promise}      [Resolved Promise.]
 */
const revertDatabase = path => new Promise((resolve, reject) => {
    getBackupJSON(path).then(backupJSON => {
        revertSchema(backupJSON).then(result => {
            resolve(result);
        }).catch(e => {
            throw e;
        });
    }).catch(e => reject(e));
});

/**
 * [realmLog Writes a log message to the database.]
 * @param  {Object} data [Data object to be saved.]
 * @return {RealmDatabase Object}      [Returns the saved object as a resolved Promise.]
 */
const realmLog = data => {
    if (data) {
        realmWrite(authDatabase, realm => {
            realm.create('Log', data, true);
        });
    }
}

/**
 * [rejectWithLog Log an exception or error to the database.]
 * @param  {String}  [The error.]
 * @return {String}   [Returns the error.]
 */
const rejectWithLog = e => {
    e = (e) ? e : 'There was an unknown error.';
    let error = resErr(e);
    realmLog(error);
    return error;
}

/**
 * [insertAuth Write a newly created auth record to the database. Called from signatureVerify() nested operations.]
 * @param  {Object} data [Auth data to save.]
 * @return {RealmDatabase Object}      [Returns the object to then create a token for the user.]
 */
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
            realmLog(resErr(eToStr(e)));
        });
        resolve(res);
    }).catch(e => reject(e));
});

/**
 * [removeAuth Delete an auth record]
 * @param  {String} pubkey [Pubkey to remove]
 * @return {Promise}        [Promise resolved success message.]
 */
const removeAuth = pubkey => new Promise((resolve, reject) => {
    realmWrite(authDatabase, realm => {
        let user = realm.objects('Auth').filtered('pubkey == $0', pubkey);
        let { "0": result } = user;
        if (result) realm.delete(user);
    }).then(res => resolve(resSuccess(`Deleted pubkey: ${pubkey}`))).catch(e => reject(e));
});

/**
 * [getAuth Get specific auth record from the database for auth validation.]
 * @param  {String} pubkey [Pubkey to fetch.]
 * @return {Promise}        [Promise resolved data (identical to an auth token).]
 */
const getAuth = pubkey => new Promise((resolve, reject) => {
    realmFetch(authDatabase, realm => {
        let user = realm.objects('Auth').filtered('pubkey == $0', pubkey);
        let { "0": result } = user;
        if (!result) throw 'Pubkey not found.';
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e)));
});

/**
 * [realmGetAllSecure Get all objects of a specific type from the secure auth database.]
 * @param  {RealmDatabase Instance} db        [Database instance.]
 * @param  {String} realmType [Object type.]
 * @return {Promise}           [All objects of type, resolved as a Promise.]
 */
const realmGetAllSecure = (db, realmType) => new Promise((resolve, reject) => {
    realmFetch(db, realm => {
        return realm.objects(realmType);
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(e)));
});

/**
 * [realmGetSecureUid Gets a specific secure realmObject from the database.]
 * @param  {RealmDatabase Instance} db        [Database instance.]
 * @param  {String} realmType [Object type.]
 * @param  {String} key       [Primary key value for the type schema.]
 * @param  {String} uid       [Unique id of the object.]
 * @return {RealmDatabase Object}           [Promise resolving object.]
 */
const realmGetSecureUid = (db, realmType, key, uid) => new Promise((resolve, reject) => {
    realmFetch(db, realm => {
        const predicate = `${key} == "${uid}"`;
        const { "0": result } = realm.objects(realmType).filtered(predicate);
        if (!result || isEmptyObj(result)) throw `No results found for uid: ${uid} in ${realmType}.`;
        return result;
    }).then(res => resolve(res)).catch(e => reject(rejectWithLog(eToStr(e))));
});

/**
 * [realmGetSecure Gets secure data from the Auth database. Optionally get public data with this method routed through middleware.]
 * @param  {String} realmType [The object type.]
 * @param  {String} uid       [Optional: specify a uid.]
 * @return {{RealmDatabase Object}           [Promise resolving the object or all objects of the type.]
 */
const realmGetSecure = (realmType, uid) => {
    let db = getDatabaseType(realmType);
    return (uid) ? realmGetSecureUid(db, realmType, getKeyForType(realmType), uid) : realmGetAllSecure(db, realmType);
}

/**
 * [isAdmin Checks if the pubkey is either a super admin specified in /.env or is an admin stored in the database.
 * Additional admins can be stored in the database via the front-facing administration interface at /dashboard. ]
 * @param  {String}  pubkey [The public key.]
 * @return {Boolean}        [Promise resolves true or false.]
 */
const isAdmin = pubkey => new Promise((resolve, reject) => {
    if (pubkeyIsSuperAdmin(pubkey)) {
        resolve(true);
    } else {
        realmFetch(authDatabase, realm => {
            const predicate = `pubkey == "${pubkey}"`;
            const { "0": result } = realm.objects('Admin').filtered(predicate);
            if (!result || isEmptyObj(result)) throw `Invalid pubkey: pubkey not found.`;
            resolve(result);
        }).then(res => resolve(res)).catch(e => reject(rejectWithLog(eToStr(e))));
    }
});

/*
 * For testing purposes, set DEBUG=true in the /.env file.
 */
const isTesting = process.env.DEBUG || false;
/*
 * For testing you can use the following pubkey/signature for the 'hello,world' string.
 * pubkey: 12PSYTJQ5cNLLKtQt95S94JGoCuxxV2ADN
 * signature: IK1czmPxCLMSvKlMF2n8ERcG5gPNbLfFV4Aswsx0w+o8IGZjis1BrGgAPdpBIQtu3sK17yAWOwn3XLoR8iwTYbs=
 */
const testString = 'hello, world';

/**
 * [getChallengeString Builds the auth challenge string]
 * @param  {undefined} _ [ignored param]
 * @return {String}   [Returns 12 word challenge to be signed.]
 */
const getChallengeString = _ => {
    if (isTesting.toLowerCase() === 'true') return testString;
    let wordArr = strings().auth.wordpool.split(' ');
    let challenge = 'bitcoinunlimited.info/login:',
    wordCount = 12;
    for (var i=0; i < wordCount; i++) {
        challenge += ' ' + wordArr[Math.floor(Math.random()*wordArr.length)];
    }
    return challenge.trim()
}

/**
 * Trunicate the Challenge table in the Auth database
 */
const clearAllChallenges = _ => {
    if (clearChallengeObj.isRunning) {
        realmWrite(authDatabase, realm => {
            // fetch and delete all challenges
            let allChallenges = realm.objects('Challenge');
            realm.delete(allChallenges);
            // reset clear challenge state
            clearChallengeObj.isRunning = false;
        }).catch(e => {
            clearChallengeObj.isRunning = false;
            rejectWithLog(eToStr(e))
        });
    }
}

/**
 * Check if a challenge countdown is running and if not, create one
 */
const cleanupChallenges = _ => {
    if (clearChallengeObj && !clearChallengeObj.isRunning) {
        clearChallengeObj.isRunning = true;
        setTimeout(clearAllChallenges, clearChallengeObj.countdown * 1000);
    }
}

/**
 * [getLoginChallenge Stores the challenge in the database for future authentication.]
 * @param  {undefined} _ [ignored param]
 * @return {RealmDatabase Object}   [Saved Challenge object.]
 */
const getLoginChallenge = _ => new Promise((resolve, reject) => {
    realmWrite(authDatabase, realm => {
        let challengeString = getChallengeString();
        if (challengeString) {
            let saved = realm.create('Challenge', { uid: uuidv4(), challenge: challengeString });
            if (!saved || isEmptyObj(saved)) throw `${realmType} not saved.`;
            cleanupChallenges();
            resolve({ challenge: saved, challengeExpires: clearChallengeObj.countdown });
        } else {
            reject(rejectWithLog(`Encountered an error building the challenge.`));
        }
    }).then(res => resolve(res)).catch(e => {
        reject(rejectWithLog(eToStr(e)));
    });
});

/**
 * [signatureVerify Multi-level checks for signature integrity.]
 * @param  {Object} data [The signature object.]
 * @return {Object}      [The token to be passed to the user for future write transaction validation.]
 */
const signatureVerify = data => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, uid } = data;
    if (!isStr(pubkey) || !isStr(challenge) || !isStr(signature) || !isStr(uid)) {
        reject(rejectWithLog('signatureVerify(): Missing data for messageVerify.'));
    }
    realmGetSecure('Challenge', uid).then(result => {
        if (!result || !result.challenge || result.challenge !== challenge) {
            throw 'Invalid challenge';
        } else {
            /*
             * Check if the pubkey is an adminstrator
             */
            isAdmin(pubkey).then(res => {
                if (messageVerify(data)) {
                    const expires = Math.floor(Date.now() / 1000) + Number(authExiprationSeconds);
                    insertAuth({ pubkey, challenge, signature, expires }).then(res => {
                        if (!res.pubkey || !res.challenge || !res.signature || !res.expires) throw 'Missing required jwt data.';
                        /*
                         * If auth makes it to this point, build the auth token.
                         * This token will be stored in local storage and used to validate
                         * future secure read, write and delete operations.
                         */
                        const token = jwt.sign({
                            pubkey: res.pubkey,
                            challenge: res.challenge,
                            signature: res.signature,
                            expires: res.expires
                        }, process.env.JWT_SECRET);
                        if (!token) throw 'Token creation error.';
                        resolve(token);
                    }).catch(e => reject(eToStr(e)));
                } else {
                    reject(rejectWithLog('signatureVerify(): Challenge could not be verified.'));
                }
            }).catch(e => {
                reject(rejectWithLog(eToStr(e)));
            });
        }
    }).catch(e => {
        reject(rejectWithLog(eToStr(e)));
    });
});

/**
 * [getSchemaProps Get the property values for a specific database schema.]
 * @param  {String} realmType [The object name.]
 * @return {Object}           [The schema property values declared in database/realmSchema.js.]
 */
const getSchemaProps = realmType => {
    const schemas = isAuthTypeDB(realmType) ? getAuthSchema() : getDBSchema();
    if (!isDef(schemas)) {
        return false;
    }
    const schema = schemas.filter(obj => obj.name === realmType);
    if (!isDef(schema[0]) || !isDef(schema[0].properties)) {
        return false;
    }
    return schema[0].properties;
}

/**
 * [hasRequiredProps Checks the integrity of required values before writing to the database.]
 * @param  {Object}  schemaProps [Properties from the schema.]
 * @param  {Object}  data        [Data to check (Object)]
 * @param  {String}  primaryKey  [Primary index for the realmType]
 * @return {Boolean}             [true/false.]
 */
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

/**
 * [checkRequiredParams Wrapper for hasRequiredProps.]
 * @param  {String} realmType [The Realm object type.]
 * @param  {Object} data      [Data to check (Object).]
 * @return {Boolean}           [true or error.]
 */
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

/**
 * [realmSave Wrapper for setting protocol values before being saved. This handles default values and some other object-specific changes.
 * Custom values or new pre-save operations can be declared in database/modelProtocols.js.]
 * @param  {Object} data [The pre-save data to be altered before saving.]
 * @return {Promise}      [The post-saved object.]
 */
const realmSave = data => new Promise((resolve, reject) => {
    let { realmType } = data;
    if (!getSchemaProps(realmType)) {
        reject('Schema not found.');
    }
    let errorCheck = checkRequiredParams(realmType, data);
    if (errorCheck !== true) {
        reject(errorCheck);
    } else {
        setProtocolValues(realmType, data).then(res => {
            let db = getDatabaseType(realmType);
            realmWrite(db, realm => {
                let saved = realm.create(realmType, res, true);
                if (!saved || isEmptyObj(saved)) throw `${realmType} not saved.`;
                return saved;
            }).then(res => resolve(res)).catch(e => {
                reject(rejectWithLog(eToStr(e)));
            });
        }).catch(e => {
            reject(rejectWithLog(eToStr(e)));
        });
    } // required parameter check
});

/**
 * [realmGetAll Get all published objects of the specified RealmType.]
 * @param  {RealmDatabase Instance} db  [the database instance]
 * @param  {String} realmType  [The type.]
 * @param  {String} [query=''] [The query object.]
 * @return {Promise}            [Results.]
 */
const realmGetAll = (db, realmType, query = '') => new Promise((resolve, reject) => {
    let { ordered = 'DESC', start = '', end = '' } = query;
    realmFetch(db, realm => {
        let result;
        if (realmTypeHasProps(realmType, ['created', 'published'])) {
            if (ordered !== 'DESC') {
                result = realm.objects(realmType).sorted('created', false).filtered('published == true');
            } else {
                result = realm.objects(realmType).sorted('created', true).filtered('published == true');
            }
        } else {
            result = realm.objects(realmType);
        }
        /*
         * TODO: add optional pagination filter
         */
        if (!result || isEmptyObj(result)) {
            realmLog(`No results for ${realmType}. ${(ordered) ? ordered : ''} ${(start && end) ? start + '-' + end : ''}`);
        }
        return result || {};
    }).then(res => resolve(res)).catch(e => {
        reject(rejectWithLog(eToStr(e)))
    });
});

/**
 * [realmGetUid Get a specific item from the database.]
 * @param  {RealmDatabase Instance} db        [Database instance.]
 * @param  {String} realmType [Type of object.]
 * @param  {String} key       [Primary key of the object type.]
 * @param  {String} uid       [Unique id of the object to be deleted.]
 * @return {Promise}           [Promise resolves the object, if it exists.]
 */
const realmGetUid = (db, realmType, key, uid) => new Promise((resolve, reject) => {
    realmFetch(db, realm => {
        const predicate = `${key} == "${uid}"`;
        const { "0": result } = realm.objects(realmType).filtered(predicate).filtered('published == true');
        if (!result || isEmptyObj(result)) throw `No results found for uid: ${uid} in ${realmType}.`;
        return result;
    }).then(res => resolve(res)).catch(e => {
        reject(rejectWithLog(eToStr(e)))
    });
});

/**
 * [realmDeleteUid Deletes an object from the RealmDatabase.]
 * @param  {String} realmType [RealmType]
 * @param  {String} uid       [Primary key property of the schema - these can be dynamic per schema.]
 * @param  {String} key       [The unique id for the object.]
 * @return {Promise}           [Promose resolve success message or rejected.]
 */
const realmDeleteUid = (realmType, uid, key) => new Promise((resolve, reject) => {
    let db = getDatabaseType(realmType);
    realmGetSecureUid(db, realmType, key, uid).then(res => {
        realmWrite(db, realm => {
            realm.delete(res);
        }).then(res => resolve(resSuccess())).catch(e => reject(e));
    }).catch(e => reject(rejectWithLog(eToStr(e))));
});

/**
 * [realmGet Get publicly available data.]
 * @param  {Object} data [Type to check for existence in the public database.]
 * @return {Promise}     [Promise reject or query results.]
 */
const realmGet = data => {
    const { realmType, uid, query } = data;
    let db = checkPublicDatabase(realmType);
    if (!db) {
        return Promise.reject();
    }
    return (uid) ? realmGetUid(db, realmType, getKeyForType(realmType), uid) : realmGetAll(db, realmType, query);
}

/**
 * [realmDelete Delete and object from the database. Wrapper for realmDeleteUid.]
 * @param  {Object} data [Data object]
 * @return {Promise}      [Promise]
 */
const realmDelete = data => {
    const { realmType } = data;
    // get the correct primaryKey for this realmType
    const key = getKeyForType(realmType);
    return realmDeleteUid(realmType, data[key], key);
}

module.exports = {
    realmBackup,
    isAdmin,
    signatureVerify,
    validateAuth,
    typeIsValid,
    typeIsValidPublic,
    realmGet,
    realmSave,
    realmDelete,
    getAuth,
    removeAuth,
    realmGetSecure,
    getLoginChallenge,
    revertDatabase
}
