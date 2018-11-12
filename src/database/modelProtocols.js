'use strict';

import { strings } from '../public/lib/i18n';
import uuidv4 from 'uuid/v4';
import { getKeyForType } from '../helpers/helpers.js';

/*
 * Declare types that require processing
 *
 * E.g., const contentNames = ['Post','Hero','User','Yourmodelname' ...];
 */
const contentNames = ['Post', 'Hero', 'User', 'Alert', 'Data'];
const protocol = {};

/*
 * Declare hook operations below.
 */

protocol.setPrimaryKey = data => {
    let key = getKeyForType(data.realmType);
    if (!data[key]) {
        data[key] = uuidv4();
    }
    return data;
}

protocol.setCreated = data => {
    if (data.created === '') {
        delete data.created;
    }
    return data;
}

protocol.setUpdated = data => {
    data.updated = new Date();
    return data;
}

protocol.setPublished = data => {
    data.published = (typeof data.published !== 'undefined' && data.published === 'true') ? true : false;
    return data;
}

protocol.setAuthor = data => {
    if (typeof data.author === 'object') return data;
    if (data.author === '') {
        if (data.pubkey) {
            data.author = { pubkey: data.pubkey };
        } else {
            delete data.author;
        }
    } else if (data.author) {
        data.author = { pubkey: data.author };
    }
    delete data.pubkey;
    return data;
}

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

protocol.checkPubkey = data => {
    if (!data.pubkey) {
        throw 'Pubkey does not exist. fn: protocol.User()';
    }
    return data;
}

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

protocol.Post = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setAuthor', 'setPublished', 'setUpdated'];
    return runOps(ops, data);
}

protocol.Hero = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setAuthor', 'setPublished', 'setUpdated'];
    return runOps(ops, data);
}

protocol.User = data => {
    let ops = ['checkPubkey', 'setCreated'];
    return runOps(ops, data);
}

protocol.Alert = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setPublished', 'validateAlertType'];
    return runOps(ops, data);
}

protocol.Data = data => {
    let ops = ['setPrimaryKey', 'setCreated', 'setUpdated'];
    return runOps(ops, data);
}

const typeHasProtocol = type => contentNames.indexOf(type) !== -1;

const setProtocolValues = (type, data) => new Promise((resolve, reject) => {
    if (!typeHasProtocol(type)) return resolve(data);
    try {
        resolve(protocol[type](data));
    } catch(e) { reject(e) }
});

module.exports = {
    setProtocolValues
}
