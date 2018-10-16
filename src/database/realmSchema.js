'use strict';

import { getUid } from '../helpers/helpers.js';
/*
 * When declaring additional schemas use the following rules to auto-generate forms:
 *
 * - All primary keys on the main content store should use uid.
 * - Image types should have a key suffixed with _img.
 * - Text that needs an editor input should have a key suffixed with _editor.
 * - Realm model associations should include the optional ? identifier.
 *
 * Additional rules are available at: https://realm.io/docs/javascript/latest/#models
 */

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
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        name: 'string?',
        icon_img: 'string?',
        bio_editor: 'string?'
    }
}

const HeroSchema = {
    name: 'Hero',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: getUid()},
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        title: 'string',
        billboard_img: 'string?',
        subtitle_editor: 'string?',
        urltext: 'string?',
        url: 'string?',
        published: {type: 'bool', default: false},
        tags: 'string?'
    }
}

const PostSchema = {
    name: 'Post',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: getUid()},
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        title: 'string',
        subtitle: 'string?',
        header_img: 'string?',
        body_editor: 'string',
        published: {type: 'bool', default: false},
        author: 'User?',
        tags: 'string?'
    }
}

/* Admin */
const LogSchema = {
    name: 'Log',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: getUid()},
        created: {type: 'date', default: new Date()},
        status: 'string?',
        message: 'string?',
        fn: 'string?'
    }
}

const getDBSchema = () => {
    return [UserSchema, HeroSchema, PostSchema, LogSchema];
}

const getAuthSchema = () => {
    return [AuthSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
