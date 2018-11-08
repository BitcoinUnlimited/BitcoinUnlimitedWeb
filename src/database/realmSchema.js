'use strict';

import uuidv4 from 'uuid/v4';
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

 /* Admin */
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

const LogSchema = {
    name: 'Log',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        status: 'string?',
        message: 'string?'
    }
}

/* Public */
const UserSchema = {
    name: 'User',
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        created: {type: 'date', default: new Date()},
        name: 'string?',
        icon_img: 'string?',
        bio_editor: 'string?'
    }
}

const AlertSchema = {
    name: 'Alert',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        message_editor: 'string',
        expires: {type: 'date', optional: true},
        published: {type: 'bool', default: false},
        alert_type: {type: 'string', default: 'announce'}
    }
}

const HeroSchema = {
    name: 'Hero',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        title: 'string',
        billboard_img: 'string?',
        subtitle_editor: 'string?',
        urltext: 'string?',
        url: 'string?',
        author: 'User?'
    }
}

const PostSchema = {
    name: 'Post',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
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

const getDBSchema = () => {
    return [UserSchema, HeroSchema, PostSchema, AlertSchema];
}

const getAuthSchema = () => {
    return [AuthSchema, LogSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
