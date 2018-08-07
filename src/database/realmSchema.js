'use strict';

const Realm = require('realm');
const Promise = require('promise');

// helpers
const toInt = value => Math.trunc(value);
const buildError = e => {
    return { status: 'failed', message: e };
};
// used to validate the jwt
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
  deleteRealmIfMigrationNeeded: true,
});

const insertUser = body => new Promise((resolve, reject) => {
    const { pubkey, challenge, signature, expires } = body;
    if (!pubkey || !challenge || !signature || !expires) {
        reject({ status: 'failed', message: 'Missing user data' });
    }
    realmDB.write(() => {
        let user = realmDB.create('User', { pubkey: pubkey, challenge: challenge, signature: signature, expires: expires }, true);
    });
    resolve(user);
});

// Realm.open(databaseOptions).then(realm => {
//     try {
//         realm.write(() => {
//             let authedUser = realm.create('User', { pubkey: pubkey, signature: signature }, true);
//             console.log(authedUser);
//             resolve(authedUser);
//         });
//     } catch (e) {
//         reject(e);
//     }
// }).catch(e => {
//     reject(e);
// });

// const insertUser = user => new Promise((resolve, reject) => {
//     console.log(user);
//     const { pubkey, signature } = user;
//     Realm.open(databaseOptions).then(realm => {
//         try {
//             realm.write(() => {
//                 let authedUser = realm.create('User', { pubkey: pubkey, signature: signature }, true);
//                 resolve(authedUser);
//             });
//         } catch (e) {
//             console.log(e);
//             reject(e);
//         }
//     }).catch(e => {
//         console.log(e);
//         reject(e);
//     });
// });

const getUser = pubkey => new Promise((resolve, reject) => {
    try {
        let user = realmDB.objects('User').filtered('pubkey == $0', pubkey);
        if (typeof user !== 'undefined' && typeof user[0] !== 'undefined') {
            resolve(user[0]);
        } else {
            reject({ status: 'error', message: 'User not found' });
        }
    } catch (e) {
        reject(e);
    }
});

module.exports = {
    insertUser,
    getUser,
}
