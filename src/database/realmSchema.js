'use strict';

/*
 * When declaring additional schemas use the following rules to auto-generate forms:
 *
 * - All primary keys on the main content store should use uid.
 * - Image types should have a key suffixed with _img.
 * - Text that needs an editor input should have a key suffixed with _editor.
 * - Realm type associations should include the optional ? identifier.
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
        uid: 'string',
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        title: 'string',
        billboard_img: 'string',
        subtitle_editor: 'string?',
        urltext: 'string?',
        url: 'string?',
        published: 'bool',
        tags: 'string?'
    }
}

const PostSchema = {
    name: 'Post',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        title: 'string',
        subtitle: 'string',
        header_img: 'string?',
        body_editor: 'string',
        published: 'bool',
        author: 'User?',
        tags: 'string?'
    }
}

const getDBSchema = () => {
    return [UserSchema, HeroSchema, PostSchema];
}

const getAuthSchema = () => {
    return [AuthSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
