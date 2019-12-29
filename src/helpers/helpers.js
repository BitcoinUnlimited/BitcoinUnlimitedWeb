'use strict';

/**
 * This file holds misc. helper functions that are used by other js and jsx files.
 */
import { getDBSchema, getAuthSchema, getTypeForm } from '../database/realmSchema.js';
import { getModelPropInfo } from '../database/modelProperties.js';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
/*
 * Low level basic helpers and error checking.
 */
const resObject = (status = 'log', message = '') => ({ status, message });
const eToStr = e => (isObj(e)) ? JSON.stringify(e) : e;
const resErr = e => ({ status: 'error', message: `${eToStr(e)}` });
const resErrList = list => ({ status: 'error', message: `Missing required parameters: ${list.join(', ')}` });
const resSuccess = msg => ({ status: 'success', message: ((msg) ? eToStr(msg) : '') });
const resError = data => data.status && data.status == 'error';
const toInt = value => Math.trunc(value);
const isDef = obj => typeof obj !== 'undefined';
const isObj = obj => isDef(obj) && typeof obj === 'object';
const isStr = obj => isDef(obj) && typeof obj === 'string';
const checkDate = expires => Math.floor(Date.now() / 1000) < expires;
/*
 * db schema operations property type determinations.
 */
const isOptionalProp = prop => prop.hasOwnProperty('optional') && prop.optional === true && !prop.hasOwnProperty('default');
const checkRealmType = (prop, str_idx) => isStr(prop) ? prop.indexOf(str_idx) !== -1 : isOptionalProp(prop);
const isOptional = prop => (checkRealmType(prop, '?')) ? true : false;
const isArr = prop => (checkRealmType(prop, '[]')) ? true : false;
const isText = prop => (checkRealmType(prop, 'string')) ? true : false;
const isBool = prop => (checkRealmType(prop, 'bool')) ? true : false;
const isDate = prop => (checkRealmType(prop, 'date')) ? true : false;
/*
 * check keys for input type specifiers
 * These helpers determine the type of input to be displayed on update forms
 * for the specified schema.
 */
const isUid = key => (key.indexOf('uid') !== -1) ? true : false;
const isEditor = key => (key.indexOf('editor') !== -1) ? true : false;
const isImage64 = key => (key.indexOf('_img_64') !== -1) ? true : false;
const isImage = key => (key.indexOf('_img') !== -1) ? true : false;
const isFile = key => (key.indexOf('_file') !== -1) ? true : false;
const isTextarea = key => (key.indexOf('_data') !== -1) ? true : false;
const isFileInput = key => (isFile(key) || isImage(key)) ? true : false;
const isEmptyObj = obj => Object.keys(obj).length === 0;
const isEmptyArr = arr => arr.length === 0;

/*
 * Object[key] checkers
 */
const hasKey = (obj, key) => Object.keys(obj).indexOf(key) !== -1;
const hasAllKeys = (obj, keys) => {
    let hasAll = true;
    keys.map(key => {
        if (!hasKey(obj, key)) {
            hasAll = false;
        }
    });
    return hasAll;
}

/*
 * Formatting helpers
 */
const monthName = idx => ['January','February','March','April','May','June','July','August','September','October','November','December'].filter((month, i) => i == idx)[0];
const formatDate = date => `${monthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
const formatDateFull = date => `${monthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
const saveDateFormat = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
const getMarkdownOptions = () => {
    return {
        html: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) { }
            }
            return ''
        }
    }
}
const markdownToHTML = markdown => {
    if (markdown && markdown.length > 0) {
        let mdParser = new MarkdownIt(getMarkdownOptions());
        return mdParser.render(markdown);
    } else {
        return '';
    }
}
/*
 * Local storage key helpers
 */
const getLocalstorageKey = key => ('localStorage' in window) ? localStorage.getItem(key) : false;
const setLocalstorageKey = (key, value) => ('localStorage' in window) ? localStorage.setItem(key, value) : false;

/*
 * Schema helpers
 */
const getDBSchemas = type => (type == 'Auth') ? getAuthSchema() : getDBSchema();
const getSchema = (name, db = '') => getDBSchemas(db).filter(schema => schema.name === name)[0];
// automatically set on content creation
const readOnlyKeys = key => ['created', 'updated'].indexOf(key) !== -1;
// check a schema for a specific property
const realmTypeHasProps = (type, prop) => {
    let schema = getSchema(type) || getSchema(type, 'Auth');
    let props = schema.properties;
    return (Array.isArray(prop)) ? hasAllKeys(props, prop) : hasKey(props, prop);
}

/*
 * Determines the input field type for a given realmModel property.
 * This is used in the dynamic form creation process.
 */
const getModelPropType = (propKey, propType, primaryKey) => {
    // key checking
    if (propKey === primaryKey || readOnlyKeys(propKey) || isUid(propKey)) return 'hidden';
    if (isTextarea(propKey)) return 'textarea';
    if (isEditor(propKey)) return 'editor';
    if (isFileInput(propKey)) return 'file';
    // type checking
    propType = isObj(propType) ? propType.type : propType;
    if (isBool(propType)) return 'checkbox';
    if (isDate(propType)) return 'date';
    if (isText(propType)) return 'text';
    return 'hidden';
}

/*
 * Determines if the property value is a realmType association.
 * (select dropdown input)
 */
const getRealmType = modelType => {
    modelType = isStr(modelType) ? modelType : modelType.type;
    let results = getDBSchemas().filter(schema => modelType.indexOf(schema.name) !== -1);
    return results.length > 0 ? results[0].name : false;
}

/*
 * Returns the primaryKey for a specific realmType.
 * Primary keys may be different across database models, but is generally
 * the 'uid' property. View more at /src/database/realmSchema.js
 */
const getKeyForType = name => {
    let schema = getSchema(name) || getSchema(name, 'Auth');
    return schema.primaryKey;
}

/*
 * Builds info about each property on a decalred schema.
 * realmType is used for model to model associations.
 * This data is then used to build forms and provide other schema information.
 */
const getDBModel = name => {
    let schema = getSchema(name) || getSchema(name,'Auth');
    if (!isDef(schema)) {
        return {};
    }
    let primaryKey = schema.primaryKey;
    let props = schema.properties;
    let model = {};
    Object.keys(props).map(propKey => {
        let schemaString = props[propKey];
        // declare initial model object values
        let prop = { name: propKey, realmType: getRealmType(schemaString), error: '' };
        prop.required = (!isOptional(schemaString)) ? true : false;
        if (!prop.realmType) {
            prop.type = getModelPropType(propKey, schemaString, primaryKey);
        } else {
            prop.type = 'selectrealm';
            prop.typePrimaryKey = getKeyForType(prop.realmType);
        }
        if (prop.type === 'file' || prop.type === 'selectrealm') {
            prop.fetching = false;
        }
        prop.value = '';
        // Adds extra field information from /src/database/modelProperties.js
        prop.fieldInfo = getModelPropInfo(propKey);
        model[propKey] = prop;
    });
    return model;
}

module.exports = {
    resObject,
    eToStr,
    resErr,
    resErrList,
    resSuccess,
    resError,
    toInt,
    isDef,
    isStr,
    isImage,
    isImage64,
    isFile,
    checkDate,
    isOptional,
    isArr,
    isEmptyObj,
    isEmptyArr,
    hasKey,
    realmTypeHasProps,
    formatDate,
    formatDateFull,
    saveDateFormat,
    getDBSchemas,
    getSchema,
    getDBModel,
    setLocalstorageKey,
    getLocalstorageKey,
    getKeyForType,
    markdownToHTML
}
