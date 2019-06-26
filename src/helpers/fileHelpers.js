'use strict';

import fs from 'fs';
import path from 'path';
import { isStr } from './helpers.js';

/**
 * [checkPath Check the path and create it if it does not exist.]
 * @param  {String} path          [Path to file.]
 * @param  {String} [fileType=''] [File type if not a path.]
 * @return {Boolean}              [true/false.]
 */
const checkPath = (path, fileType = '') => {
    let pathArr = path.split('/').filter(dir => dir !== '');
    for (var i = 0; i < pathArr.length; i++) {
        let segment = '/' + pathArr.filter((p, idx) => idx <= i).join('/');
        if (segment.indexOf('.' + fileType) !== -1) break;
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

/**
 * [relativeImgPath Get the full path to the file for front-end.]
 * @param  {String} fullPath [Path to the file or dir.]
 * @return {String}          [The static path.]
 */
const relativeImgPath = fullPath => {
    return '/static' + fullPath.split('/assets').pop();
}

/**
 * [checkBackupPath Get the assets path.]
 * @param  {String} dir        [Directory.]
 * @param  {String} staticPath [The static path.]
 * @return {Promise}            [Promise resolved final path.]
 */
const checkBackupPath = (dir, staticPath) => new Promise((resolve, reject) => {
    if (!isStr(dir) || !isStr(staticPath)) reject('Directory not specified.');
    if (staticPath.indexOf('/static/') == -1) reject('Incorrect path specified.');
    let backupPath = path.join(dir, '/', staticPath.split('/static/')[1]);
    resolve(backupPath);
});

/**
 * [getStaticFiles Gets a list of all static files in the static files directory.]
 * @param  {String} dir [The static directory.]
 * @return {Array}     [Array of files from the static directory. Includes all subdirectories.]
 */
const getStaticFiles = dir => new Promise((resolve, reject) => {
    try {
        if (checkPath(dir)) {
            let results = [];
            fs.readdirSync(dir).forEach(file => {
                file = dir + '/' + file;
                let stat = fs.statSync(file);
                if (stat && stat.isDirectory()) {
                    getStaticFiles(file).then(result => {
                        if (result && Array.isArray(result) && result.length) {
                            result.forEach(item => {
                                results.push(item);
                            });
                        }
                    });
                } else {
                    results.push(relativeImgPath(file));
                }
            });
            resolve(results);
        } else {
            reject(`Path ${dir} was not created.`);
        }
    } catch(e) {
        reject(e);
    }
});

/**
 * [toBase64 Turns a small image into base64 string.]
 * @param  {Data} image [The image blob.]
 * @return {String}       [The base64 string.]
 */
const toBase64 = image => new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = () => {
        resolve(reader.result);
    }
    reader.readAsDataURL(image);
});

module.exports = {
    checkPath,
    relativeImgPath,
    getStaticFiles,
    checkBackupPath,
    toBase64
}
