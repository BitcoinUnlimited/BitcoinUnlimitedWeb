'use strict';

//import { getKeyForType } from '../helpers/helpers.js';

/*
 * Declare types that will have custom values
 */
const models = ['Post','Hero','User'];

const typeHasProtocol = type => models.indexOf(type) !== -1;

const protocol = {};

/*
 * Declare custom model operations before being saved or updated
 */
protocol.Post = data => {
    //let associations = [{field: 'author', model: 'User'}];
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
        throw 'Pubkey not available.';
    }
    return data;
}

// const setAuthor = pubkey => {
//     let author = realmDatabase.objects('User').filtered('pubkey == $0', pubkey);
//     if (!isEmptyObj(author)) {
//         return author;
//     }
//     return { uid: getUid(), pubkey: pubkey };
// }

const setProtocolValues = (type, data) => new Promise((resolve, reject) => {
    if (!typeHasProtocol(type)) resolve(data);
    try {
        resolve(protocol[type](data));
    } catch(e) {
        reject(e);
    }
});

module.exports = {
    setProtocolValues,
}
