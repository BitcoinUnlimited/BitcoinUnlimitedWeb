'use strict';

import uuidv4 from 'uuid/v4';
/*
 * When declaring additional schemas use the following rules to auto-generate forms:
 *
 * - All primary keys on the main content store should use uid. User is an explicit exception.
 * - All content should have a created date for optional ASC/DESC sorting
 * - Image types should have a key suffixed with _img.
 * - Text that needs an editor input should have a key suffixed with _editor.
 * - Text that needs a textarea should use the _data suffix in the property name.
 * - Realm model associations should include the optional ? identifier.
 *
 * Additional rules are available at: https://realm.io/docs/javascript/latest/#models
 *
 * Auth and Log are separated from the main content realmDatabase. These realmTypes
 * are excluded from the auto-generating RealmFormWrapper and ContentList components.
 *
 * Make sure to update modelProtocols.js with preprocessing
 */

/*
 * The AuthSchema is used to store logins and validate middleware JWT tokens.
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

/*
 * Used for event, error and exception handling.
 */
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

/*
 * This is used to verify that a user logging in is permitted to login.
 * Super admins are able to add pubkeys via the admin dashboard.
 */
const AdminSchema = {
    name: 'Admin',
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        role:  {type: 'Role', optional: true}
    }
}

/*
 * This is currently unused but can be used to add content create/edit
 * permission tiers.
 */
const RoleSchema = {
    name: 'Role',
    primaryKey: 'rid',
    properties: {
        rid: 'string',
        rolename: 'string'
    }
}

/*
 * When a user clicks to receive a login challenge that challenge is temporarily
 * stored to verify that the user's correct signature is validating a challenge
 * created by the app, rather than a challenge of the user's choice.
 */
const ChallengeSchema = {
    name: 'Challenge',
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        challenge: 'string'
    }
}

/* Public Database (separate) */

/*
 * Used for the public display of author information
 */
const UserSchema = {
    name: 'User',
    primaryKey: 'pubkey',
    properties: {
        pubkey: 'string',
        created: {type: 'date', default: new Date()},
        icon_img_64: 'string?',
        displayname: 'string?',
        org_title: 'string?',
        social_media: 'string?',
        bio_editor: 'string?'
    }
}

/*
 * Used to upload files and for other future purposes.
 */
const DataSchema = {
    name: 'Data',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        updated: {type: 'date', optional: true, default: new Date()},
        name: 'string?',
        upload_file: 'string?',
        misc_data: 'string?',
        published: {type: 'bool', default: false}
    }
}

/*
 * Used to override alert banners.
 */
const AlertSchema = {
    name: 'Alert',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'string', default: uuidv4()},
        created: {type: 'date', default: new Date()},
        name: 'string?',
        message_editor: 'string',
        alert_type: {type: 'string', default: 'announce'},
        published: {type: 'bool', default: false}
    }
}

/*
 * Currently not used. Will be used to override homepage feature images and text.
 */
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
        caption_editor: 'string?',
        subtitle_editor: 'string?',
        urltext: 'string?',
        url: 'string?',
        published: {type: 'bool', default: false},
        author: 'User?',
        tags: 'string?'
    }
}

/*
 * Used to store content for the new Blog area of the site.
 */
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
        video_data: 'string?',
        caption_editor: 'string?',
        body_editor: 'string',
        published: {type: 'bool', default: false},
        author: 'User?',
        tags: 'string?'
    }
}

/**
 * [getDBSchema Builds an array of the public database schemas.]
 * @return {undefined} []
 */
const getDBSchema = _ => {
    return [UserSchema, DataSchema, HeroSchema, PostSchema, AlertSchema];
}

/**
 * [getAuthSchema Builds an array of the auth (secure) schemas.]
 * @return {undefined} []
 */
const getAuthSchema = _ => {
    return [AuthSchema, LogSchema, AdminSchema, RoleSchema, ChallengeSchema];
}

module.exports = {
    getDBSchema,
    getAuthSchema
}
