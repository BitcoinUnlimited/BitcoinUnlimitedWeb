'use strict';

import { getDBSchema, getAuthSchema } from './realmSchema.js';

const env = require('dotenv').config();

const getDB = type => {
    try {
        return (type == 'auth') ? process.env.DB_AUTH_NAME : process.env.DB_NAME;
    } catch(e) {
        return (type == 'auth') ? 'realmDBauth.realm' : 'realmDB.realm';
    }
}

const realmDatabase = {
    path: './databases/' + getDB(),
    schema: getDBSchema()
}

const authDatabase = {
    path: './databases/' + getDB('auth'),
    schema: getAuthSchema()
}

module.exports = {
    realmDatabase,
    authDatabase
}
