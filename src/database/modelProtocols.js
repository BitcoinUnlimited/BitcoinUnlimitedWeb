'use strict';

import { strings } from '../public/lib/i18n';

/*
 * Declare types that require extra processing
 *
 * E.g., const modelProtocols = ['Post','Hero','User','Yourmodelname' ...];
 */
const modelProtocols = ['Post','Hero','User'];
const typeHasProtocol = type => modelProtocols.indexOf(type) !== -1;
const protocol = {};

const setCreated = data => {
    if (data.created === '') {
        delete data.created;
    }
    return data;
}

const setPublished = data => {
    data.published = (typeof data.published !== 'undefined' && data.published === 'true') ? true : false;
    return data;
}

const setAuthor = data => {
    if (typeof data.author === 'object') return data;
    if (data.author === '') {
        if (data.pubkey) {
            data.author = { pubkey: data.pubkey }
        } else {
            delete data.author;
        }
    } else if (data.author) {
        data.author = { pubkey: data.author }
    }
    return data;
}

/*
 * Declare custom processing before objects are saved or updated
 *
 * The below processing will automatically apply if the realmType name as an entry in the modelProtocols array.
 * E.g., protocol.Yourmodelname = data => { ... return data; }
 */
protocol.Post = data => {
    data = setCreated(data);
    data = setAuthor(data);
    data = setPublished(data);
    data.updated = new Date();
    return data;
}

protocol.Hero = data => {
    data = setCreated(data);
    data = setAuthor(data);
    data = setPublished(data);
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
