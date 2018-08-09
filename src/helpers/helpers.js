'use strict';

const responseError = e => ({ status: 'error', message: `${e}` });
const toInt = value => Math.trunc(value);
const isDefined = obj => typeof obj !== 'undefined';
const isString = obj => typeof obj !== 'undefined' && typeof obj === 'string';
const checkDate = expires => Math.floor(Date.now() / 1000) < expires;

module.exports = {
    responseError,
    toInt,
    isDefined,
    isString,
    checkDate
}
