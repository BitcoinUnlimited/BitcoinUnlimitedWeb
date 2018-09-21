'use strict';
import uuidv4 from 'uuid/v4';
import fs from 'fs';
import { getDBSchema, getAuthSchema, getTypeForm } from '../database/realmSchema.js';

const resErr = e => ({ status: 'error', message: `${e}` });
const resSuccess = data => ({ status: 'success', data: data });
const resError = data => data.status && data.status == 'error';
const toInt = value => Math.trunc(value);
const isDef = obj => typeof obj !== 'undefined';
const isStr = obj => typeof obj !== 'undefined' && typeof obj === 'string';
const checkDate = expires => Math.floor(Date.now() / 1000) < expires;
const isReq = prop => (prop.indexOf('?') === -1) ? true : false;
const isArr = prop => (prop.indexOf('[]') !== -1) ? true : false;
const isEmptyObj = obj => Object.keys(obj).length === 0;
const isEmptyArr = arr => arr.length === 0;
const hasKey = (obj, key) => Object.keys(obj).indexOf(key) !== -1;
const monthName = idx => ['January','February','March','April','May','June','July','August','September','October','November','December'].filter((month, i) => i == idx)[0];
const formatDate = date => `${monthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
const relativeImgPath = fullPath => fullPath.split('/public').pop();
/* database */
const getUid = () => uuidv4();
const getDBSchemas = type => (type == 'auth') ? getAuthSchema() : getDBSchema();
const getSchema = (name, type = '') => getDBSchemas(type).filter(schema => schema.name === name)[0];

const checkPath = (path, fileType) => {
    let pathArr = path.split('/').filter(dir => !dir);
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

module.exports = {
    resErr,
    resSuccess,
    resError,
    toInt,
    isDef,
    isStr,
    checkDate,
    isReq,
    isArr,
    isEmptyObj,
    isEmptyArr,
    hasKey,
    formatDate,
    relativeImgPath,
    getUid,
    getDBSchemas,
    getSchema,
    checkPath
}
