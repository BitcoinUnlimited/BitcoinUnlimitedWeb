'use strict';

import { strings } from '../public/lib/i18n';
import uuidv4 from 'uuid/v4';
import { getKeyForType } from '../helpers/helpers.js';

/**
 * [contentNames Declare types that require processing]
 * E.g., const contentNames = ['Post','Hero','User','Yourmodelname' ...];
 * @type {Array}
 */
const contentNames = ['Post', 'Hero', 'User', 'Alert', 'Data', 'Admin'];

/**
 * [protocol The protocol object holds fuctions that can be looped through to perform
 * operations on a specific type before saving.]
 * @type {Object}
 */
const protocol = {};

/**
 * [setPrimaryKey Sets the default primary key.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.setPrimaryKey = data => {
    let key = getKeyForType(data.realmType);
    if (!data[key]) {
        data[key] = uuidv4();
    }
    return data;
}

/**
 * [setCreated Deletes the created date if not specified.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.setCreated = data => {
    if (data.created === '') {
        delete data.created;
    }
    return data;
}

/**
 * [setUpdated Sets the updated date.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.setUpdated = data => {
    data.updated = new Date();
    return data;
}

/**
 * [setPublished Set the published value if it exists.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.setPublished = data => {
    data.published = (typeof data.published !== 'undefined' && data.published === 'true') ? true : false;
    return data;
}

/**
 * [setAuthor Set the author, defaulting to pubkey value if no author is specified.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.setAuthor = data => {
    if (data.author) {
        data.author = { pubkey: data.author };
    } else if (data.pubkey) {
        data.author = { pubkey: data.pubkey };
    }
    delete data.pubkey;
    return data;
}

/**
 * [validateAlertType Make sure the passed alert type is correct. These values
 * are specified in database/modelProperties.js]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.validateAlertType = data => {
    let { alert_type: type } = data;
    if (type) {
        if (['announce', 'alert', 'security'].indexOf(type) === -1) {
            delete data.alert_type;
        }
    } else {
        delete data.alert_type;
    }
    return data;
}

/**
 * [checkPubkey Check for a user's pubkey.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.checkPubkey = data => {
    if (!data.pubkey) {
        throw 'Pubkey does not exist. fn: protocol.User()';
    }
    return data;
}

/**
 * [removeRole Remove a role value. Currently not used.]
 * @param {Object} data [Object to be updated.]
 * @return {Object}      [Modified Object ready for next operation or to be saved.]
 */
protocol.removeRole = data => {
    delete data.role;
    return data;
}

/**
 * [runOps Loops through each model's operations and performs explicitly specified changes.]
 * @param  {Array} ops  [The operations to be performed on the object.]
 * @param  {Object} data [The data to be altered.]
 * @return {Object}      [The data post-changes.]
 */
const runOps = (ops, data) => {
    ops.map(fn => {
        data = protocol[fn](data);
    });
    return data;
}

/*
 * Declare custom processing before realm objects are saved or updated
 *
 * The below processing will automatically apply if the realmType name as an entry in the contentNames array.
 * E.g., protocol.Yourmodelname = data => { let ops = ['someFnName1', 'someFnName2']; runOps(ops, data); }
 *
 * You can declare additional processing functions on the protocol object above. See protocol.checkPubkey as a simple example.
 */

/**
 * [Post Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.Post = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setAuthor', 'setPublished', 'setUpdated'];
    return runOps(ops, data);
}

/**
 * [Hero Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.Hero = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setAuthor', 'setPublished', 'setUpdated'];
    return runOps(ops, data);
}

/**
 * [User Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.User = data => {
    let ops = ['checkPubkey', 'setCreated'];
    return runOps(ops, data);
}

/**
 * [Alert Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.Alert = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setPublished', 'validateAlertType'];
    return runOps(ops, data);
}

/**
 * [Data Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.Data = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setUpdated', 'setPublished'];
    return runOps(ops, data);
}

/**
 * [Admin Operations on data before saving.]
 * @param {Object} data [description]
 * @return {Object}  [The data post-changes.]
 */
protocol.Admin = data => {
    let ops = ['removeRole'];
    return runOps(ops, data);
}

/**
 * [typeHasProtocol Helper if the type has data transformations.]
 * @param  {String} type [The realmType.]
 * @return {Boolean}      [true/false]
 */
const typeHasProtocol = type => contentNames.indexOf(type) !== -1;

/**
 * [setProtocolValues Wrapper for protocol data changes.]
 * @param {String} type [The realmType to change data on.]
 * @param {Promise} data []
 */
const setProtocolValues = (type, data) => new Promise((resolve, reject) => {
    if (!typeHasProtocol(type)) return resolve(data);
    try {
        resolve(protocol[type](data));
    } catch(e) { reject(e) }
});

module.exports = {
    setProtocolValues
}
