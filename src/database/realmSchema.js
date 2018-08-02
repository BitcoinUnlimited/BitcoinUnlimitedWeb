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
        name: 'string?',
        jwt: 'string',
    }
}

const realmDB = new Realm({
  path: 'realmDB.realm',
  schema: [UserSchema],
  deleteRealmIfMigrationNeeded: true,
});

// const databaseOptions = {
//     path: 'realmDB.realm',
//     schema: [UserSchema],
//     schemaVersion: 0,
// }

const insertUser = body => new Promise((resolve, reject) => {
    const { pubkey, name, jwt } = body;
    realmDB.write(() => {
        let user = realmDB.create('User', {pubkey:pubkey, name:name, jwt:jwt}, true);
    });
    resolve(user);
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
},(e) => {
    console.log(e);
    reject(e);
});

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
        resolve(user)
    } catch (e) {
        reject(e);
    }
});

module.exports = {
    realmDB,
    insertUser,
    getUser,
}
