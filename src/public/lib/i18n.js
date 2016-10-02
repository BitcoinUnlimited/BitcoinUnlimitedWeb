import en from '../../locales/en.json';
import cn from '../../locales/cn.json';

const languages = ['en', 'cn'];

function addLanguageFallback(target, fallback) {
    Object.keys(fallback).forEach(function(key) {
        if (!fallback.hasOwnProperty(key)) {
            return;
        }
        if (typeof fallback[key] === 'object') {
            if (typeof target[key] !== 'object') {
                target[key] = {};
            }
            addLanguageFallback(target[key], fallback[key]);
        } else if (typeof target[key] !== 'string') {
            target[key] = fallback[key];
        }
    });
}

addLanguageFallback(cn, en);

let language = en;

export function switchLanguage(newLanguage) {
    switch (newLanguage) {
        case 'en':
            language = en;
            break;
        case 'cn':
            language = cn;
            break;
        default:
            throw new Error('Language "' + newLanguage + '" is not supported.');
    }
}

export function strings() {
    return language;
}
