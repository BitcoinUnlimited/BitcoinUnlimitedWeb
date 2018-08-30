'use strict';

const env = require('dotenv').config();
const Realm = require('realm');

const AuthSchema = {
    name: 'Auth',
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        challenge: 'string',
        signature: 'string',
        expires: 'int'
    }
}

const UserSchema = {
    name: 'User',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        pubkey: 'string',
        name: 'string?',
        email: 'string?',
        icon: 'string?',
        bio: 'string?',
        role: 'Role?'
    }
}

const RoleSchema = {
    name: 'Role',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        role: 'string'
    }
}

const TagSchema = {
    name: 'Tag',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        term: 'string'
    }
}

const PostSchema = {
    name: 'Post',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        author: 'User',
        title: 'string',
        subtitle: 'string',
        body: 'string',
        created: 'date',
        published: 'bool',
        updated: 'date?',
        tags: 'string?[]'
    }
};

const getSchemas = () => {
    return [UserSchema, RoleSchema, TagSchema, PostSchema];
}

const getDB = type => {
    try {
        return (type == 'auth') ? process.env.DB_AUTH_NAME : process.env.DB_NAME;
    } catch(e) {
        return (type == 'auth') ? 'realmDBauth.realm' : 'realmDB.realm';
    }
}

const authDB = new Realm({
    path: getDB('auth'),
    schema: [AuthSchema]
});

const realmDB = new Realm({
  path: getDB(),
  schema: getSchemas()
});

module.exports = {
    realmDB,
    getSchemas,
    authDB,
    getDB,
}
