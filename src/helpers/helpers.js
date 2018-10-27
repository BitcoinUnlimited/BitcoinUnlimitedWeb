'use strict';
import uuidv4 from 'uuid/v4';
import fs from 'fs';
import { EditorState } from 'draft-js';
import { getDBSchema, getAuthSchema, getTypeForm } from '../database/realmSchema.js';

const resObject = (message = '', funcName = '', status = 'log') => ({ message, funcName, status });
const resErr = (e, fn) => ({ status: 'error', message: `${e}`, fn: ((fn) ? fn : '') });
const resErrList = (list, fn) => ({ status: 'error', message: `Missing required parameters: ${list.join(', ')}`, fn: ((fn) ? fn : '') });
const resSuccess = msg => ({ status: 'success', message: ((msg) ? msg : '') });
const resError = data => data.status && data.status == 'error';
const toInt = value => Math.trunc(value);
const isDef = obj => typeof obj !== 'undefined';
const isObj = obj => isDef(obj) && typeof obj === 'object';
const isStr = obj => isDef(obj) && typeof obj === 'string';
const checkDate = expires => Math.floor(Date.now() / 1000) < expires;
// db schema operations
const isOptionalProp = prop => prop.hasOwnProperty('optional') && prop.optional === true && !prop.hasOwnProperty('default');
const checkRealmType = (prop, str_idx) => isStr(prop) ? prop.indexOf(str_idx) !== -1 : isOptionalProp(prop);
const isOptional = prop => (checkRealmType(prop, '?')) ? true : false;
const isArr = prop => (checkRealmType(prop, '[]')) ? true : false;
const isText = prop => (checkRealmType(prop, 'string')) ? true : false;
const isBool = prop => (checkRealmType(prop, 'bool')) ? true : false;
const isDate = prop => (checkRealmType(prop, 'date')) ? true : false;
// check keys for input type specifiers
const isEditor = key => (key.indexOf('editor') !== -1) ? true : false;
const isImage = key => (key.indexOf('img') !== -1) ? true : false;
const isUid = key => (key.indexOf('uid') !== -1) ? true : false;

const isEmptyObj = obj => Object.keys(obj).length === 0;
const isEmptyArr = arr => arr.length === 0;
const hasKey = (obj, key) => Object.keys(obj).indexOf(key) !== -1;
const monthName = idx => ['January','February','March','April','May','June','July','August','September','October','November','December'].filter((month, i) => i == idx)[0];
const formatDate = date => `${monthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
const relativeImgPath = fullPath => fullPath.split('/public').pop();

const getUid = () => uuidv4();
const getDBSchemas = type => (type == 'auth') ? getAuthSchema() : getDBSchema();
const getSchema = (name, db = '') => getDBSchemas(db).filter(schema => schema.name === name)[0];

const getModelPropType = (propKey, propType, primaryKey) => {
    if (propKey === primaryKey) return 'hidden';
    propType = isObj(propType) ? propType.type : propType;
    if (isEditor(propKey)) return 'editor';
    if (isImage(propKey)) return 'file';
    if (isUid(propKey)) return 'hidden';
    if (isBool(propType)) return 'checkbox';
    if (isDate(propType)) return 'date';
    if (isText(propType)) return 'text';
    return 'hidden';
}

const getRealmType = modelType => {
    modelType = isStr(modelType) ? modelType : modelType.type;
    let results = getDBSchemas().filter(schema => modelType.indexOf(schema.name) !== -1);
    return results.length > 0 ? results[0].name : false;
}

const getDBModel = name => {
    let schema = getSchema(name);
    if (!isDef(schema)) {
        return {};
    }
    let primaryKey = schema.primaryKey;
    let props = schema.properties;
    let model = {};
    Object.keys(props).map(propKey => {
        let schemaString = props[propKey];
        let prop = { name: propKey, realmType: getRealmType(schemaString), error: '' };
        prop.required = (!isOptional(schemaString)) ? true : false;
        prop.type = getModelPropType(propKey, schemaString, primaryKey);
        prop.value = (prop.type === 'editor') ? EditorState.createEmpty() : '';
        prop.fieldInfo = fieldInfo(propKey);
        model[propKey] = prop;
    });
    return model;
}

const getKeyForType = name => getSchema(name).primaryKey;

const toBase64 = image => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        }
        reader.readAsDataURL(image);
    }).catch(e => reject(e));
}

const checkPath = (path, fileType) => {
    let pathArr = path.split('/').filter(dir => dir !== '');
    for (var i = 0; i < pathArr.length; i++) {
        let segment = '/' + pathArr.filter((p, idx) => idx <= i).join('/');
        if (segment.indexOf('.' + fileType) != -1) break;
        if (!fs.existsSync(segment)) {
            try {
                fs.mkdirSync(segment);
            } catch(e) {
                return false;
            }
        }
    }
    return true;
}

const fieldInfo = key => {
    let extraFieldInfo = {
        title: { label: 'Title', description: 'The title of the post or content.' },
        subtitle: { label: 'Subtitle', description: 'A small description used in a list view.' },
        header_img: { label: 'Billboard Image', description: 'This image will go above the post.' },
        body_editor: { label: 'Content', description: 'This image will go above the post.' },
        created: { label: 'Created Date', description: '' },
        updated: { label: 'Updated Date', description: '' },
        author: { label: 'Content Author', description: '' },
        tags: { label: 'Terms', description: 'List terms, separated with commas.' },
        published: { label: 'Publish Content', description: 'Leave unchecked for draft mode.' },
        billboard_img: { label: 'Billboard Image', description: 'This banner image will go behind the title, subtitle and link.' },
        subtitle_editor: { label: 'Subtitle', description: 'A small description or abstract.' },
        urltext: { label: 'Link Title', description: '' },
        url: { label: 'Link', description: '' },
        pubkey: { label: 'Public BCH or BTC Address', description: '', readonly: true },
        name: { label: 'Name, alias or pseudonom', description: '' },
        email: { label: 'Email', description: 'Optionally add your contact email.' },
        icon_img: { label: 'User Image', description: 'The image should have an equal height/width and be no greater than 100px wide.' },
        bio_editor:  { label: 'Bio', description: 'A short biography or statement of purpose.' }
    }
    let fieldData = extraFieldInfo[key];
    if (fieldData) {
        return fieldData;
    }
    return false;
}

module.exports = {
    resObject,
    resErr,
    resErrList,
    resSuccess,
    resError,
    toInt,
    isDef,
    isStr,
    checkDate,
    isOptional,
    isArr,
    isEmptyObj,
    isEmptyArr,
    hasKey,
    formatDate,
    relativeImgPath,
    getUid,
    getDBSchemas,
    getSchema,
    checkPath,
    toBase64,
    getDBModel,
    fieldInfo,
    getKeyForType
}
