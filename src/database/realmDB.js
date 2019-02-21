'use strict';

import { getDBSchema, getAuthSchema } from './realmSchema.js';

const env = require('dotenv').config();

/**
 * [getDB Gets the database name from the .env file, otherwise returns default database names.]
 * @param  {String} type [Optionally speicfy 'auth', otherwise the public database is assumed.]
 * @return {String}      [The name of the database.]
 */
const getDB = type => {
    try {
        return (type == 'auth') ? process.env.DB_AUTH_NAME : process.env.DB_NAME;
    } catch(e) {
        return (type == 'auth') ? 'realmDBauth.realm' : 'realmDB.realm';
    }
}

/**
 * [realmDatabase Holds the public database instance.]
 * @type {Object}
 */
const realmDatabase = {
    path: './databases/' + getDB(),
    schema: getDBSchema()
}

/**
 * [authDatabase Holds the private Auth database instance.]
 * @type {Object}
 */
const authDatabase = {
    path: './databases/' + getDB('auth'),
    schema: getAuthSchema()
}

module.exports = {
    realmDatabase,
    authDatabase
}
