'use strict';

const Realm = require('realm');
const Promise = require('promise');
import { strings } from '../public/lib/i18n';
import { responseError, toInt, isDefined, isString } from '../helpers/helpers.js';

const UserSchema = {
    name: 'User',
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        challenge: 'string',
        signature: 'string',
        expires: 'int'
    }
}

const realmDB = new Realm({
  path: 'realmDB.realm',
  schema: [UserSchema],
  deleteRealmIfMigrationNeeded: true, // dev only
});

const insertUser = body => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, expires } = body;
    if (!isString(pubkey) || !isString(challenge) || !isString(signature) || !expires) {
        reject(responseError(strings().auth.errors[3]));
    }
    realmDB.write(() => {
        let user = realmDB.create('User', { pubkey: pubkey, challenge: challenge, signature: signature, expires: expires }, true);
    });
    if (isDefined(user)) {
        resolve(user);
    } else {
        reject(responseError(strings().auth.errors[6]));
    }
});

const removeUser = pubkey => new Promise((resolve, reject) => {
    realmDB.write(() => {
        let user = realmDB.objects('User').filtered('pubkey == $0', pubkey);
        if (isDefined(user) && isDefined(user[0])) {
            realmDB.delete(user);
        }
    });
    resolve();
});

const getUser = pubkey => new Promise((resolve, reject) => {
    try {
        let user = realmDB.objects('User').filtered('pubkey == $0', pubkey);
        if (isDefined(user) && isDefined(user[0])) {
            resolve(user[0]);
        } else {
            reject(responseError(strings().auth.errors[4]));
        }
    } catch (e) {
        reject(e);
    }
});

module.exports = {
    insertUser,
    getUser,
    removeUser,
}
