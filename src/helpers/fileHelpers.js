'use strict';

import fs from 'fs';

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

const relativeImgPath = fullPath => {
    return '/static' + fullPath.split('/assets').pop();
}

const getStaticFiles = (dir) => new Promise((resolve, reject) => {
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
    toBase64
}
