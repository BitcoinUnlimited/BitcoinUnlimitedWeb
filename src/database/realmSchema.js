'use strict';

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

const RedirectSchema = {
    name: 'Redirect',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        url: 'string'
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
        bio: 'string?'
    }
}

const PostSchema = {
    name: 'Post',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        title: 'string',
        subtitle: 'string',
        body: 'string',
        created: 'date',
        published: 'bool',
        url: 'Redirect?',
        author: 'User?',
        tags: 'string?[]',
        updated: 'date?'
    }
}

const getDBSchema = () => {
    return [RedirectSchema, UserSchema, PostSchema];
}

const getAuthSchema = () => {
    return [AuthSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
