'use strict';

import { getDBSchema, getAuthSchema } from './realmSchema.js';

const env = require('dotenv').config();
const Realm = require('realm');

const getDB = type => {
    try {
        return (type == 'auth') ? process.env.DB_AUTH_NAME : process.env.DB_NAME;
    } catch(e) {
        return (type == 'auth') ? 'realmDBauth.realm' : 'realmDB.realm';
    }
}

const database = {
    path: './databases/' + getDB(),
    schema: getDBSchema()
}

const auth = {
    path: './databases/' + getDB('auth'),
    schema: getAuthSchema()
}

const authDatabase = new Realm(auth);
const realmDatabase = new Realm(database);

module.exports = {
    realmDatabase,
    authDatabase
}
