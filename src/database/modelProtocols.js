'use strict';

import { strings } from '../public/lib/i18n';

/*
 * Declare types that require extra processing
 */
const modelProtocols = ['Post','Hero','User'];
const typeHasProtocol = type => modelProtocols.indexOf(type) !== -1;
const protocol = {};

/*
 * Declare custom model operations before being saved or updated
 */
protocol.Post = data => {
    data.published = (data.published === 'true') ? true : false;
    data.updated = new Date();
    return data;
}

protocol.Hero = data => {
    data.published = (data.published === 'true') ? true : false;
    data.updated = new Date();
    return data;
}

protocol.User = data => {
    if (!data.pubkey) {
        throw 'Pubkey does not exist. fn: protocol.User()';
    }
    return data;
}

const setProtocolValues = (type, data) => new Promise((resolve, reject) => {
    if (!typeHasProtocol(type)) return resolve(data);
    try {
        resolve(protocol[type](data));
    } catch(e) { reject(e) }
});

module.exports = {
    setProtocolValues
}
