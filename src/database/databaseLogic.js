'use strict';

import jwt from 'jsonwebtoken';
import { insertUser, getUser } from './realmSchema.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './verifySignature.js';
import { responseError, isDefined, isString, checkDate } from '../helpers/helpers.js';
import { strings } from '../public/lib/i18n';

const signatureVerify = body => {
    const { pubkey, challenge, signature } = body;
    if (!isString(pubkey) || !isString(challenge) || !isString(signature)) {
        return responseError(strings().auth.errors[5]);
    } else if (messageVerify(body)) {
        const expires = Math.floor(Date.now() / 1000) + 20;//(120 * 60); // 2 hr
        let error = false;
        insertUser({ pubkey: pubkey, challenge: challenge, signature: signature, expires: expires });
        const token = jwt.sign({
            pubkey: pubkey,
            challenge: challenge,
            signature: signature,
            expires: expires,
        }, process.env.JWT_SECRET);
        return token;
    }
    return responseError(strings().auth.errors[5]);
}

const validateUser = user => isDefined(user.expires) && checkDate(user.expires);

module.exports = {
    signatureVerify,
    validateUser,
}
