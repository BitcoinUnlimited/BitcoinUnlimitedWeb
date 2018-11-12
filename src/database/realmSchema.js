'use strict';

import uuidv4 from 'uuid/v4';
/*
 * When declaring additional schemas use the following rules to auto-generate forms:
 *
 * - All primary keys on the main content store should use uid. User is an explicit exception.
 * - All content should have a created date for optional ASC/DESC sorting
 * - Image types should have a key suffixed with _img.
 * - Text that needs an editor input should have a key suffixed with _editor.
 * - Realm model associations should include the optional ? identifier.
 *
 * Additional rules are available at: https://realm.io/docs/javascript/latest/#models
 *
 * Auth and Log are separated from the main content realmDatabase. These realmTypes
 * are excluded from the auto-generating RealmFormWrapper and ContentList components.
 *
 * Make sure to update modelProtocols.js with preprocessing
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
        displayname: 'string?',
        icon_img_64: 'string?',
        bio_editor: 'string?'
    }
}

const AlertSchema = {
    name: 'Alert',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        name: 'string?',
        message_editor: 'string',
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
        name: 'string?',
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
        name: 'string?',
        title: 'string',
        subtitle: 'string?',
        header_img: 'string?',
        body_editor: 'string',
        published: {type: 'bool', default: false},
        author: 'User?',
        tags: 'string?'
    }
}

const DataSchema = {
    name: 'Data',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        name: 'string?',
        upload_file: 'string?',
        misc_data: 'string?'
    }
}

const getDBSchema = () => {
    return [UserSchema, HeroSchema, PostSchema, AlertSchema, DataSchema];
}

const getAuthSchema = () => {
    return [AuthSchema, LogSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
