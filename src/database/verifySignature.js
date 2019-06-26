'use strict';

import { Message } from 'bitcore-lib';
import AddrFormat from 'bchaddrjs';

/**
 * [fixAddressFormat Converts Bitcoin Cash and Bitpay addresses to legacy addresses before verifiation.]
 * @param  {String} address [The original address.]
 * @return {String}         [The corresponding legacy address.]
 */
const fixAddressFormat = address => { return !AddrFormat.isLegacyAddress(address) ? AddrFormat.toLegacyAddress(address) : address; }

/*
 * Verify the message
 * { challenge: {string}, address: {string}, signature: {string} }
 * Note: Bitcore causes errors when non-signature strings are passed as the signature param
 */
/**
 * [messageVerify Fixes the address type and then verifies the message via Bitcore.]
 * @param  {Object} message [Object containing the challenge, pubkey and signature.]
 * @return {Boolean}         [true/false result.]
 */
const messageVerify = message => {
    let { challenge, pubkey, signature } = message;
    const fixedPubKey = fixAddressFormat(pubkey);
    try {
        return new Message(challenge).verify(fixedPubKey, signature);
    } catch(e) {
        return false;
    }
}

module.exports = {
    fixAddressFormat,
    messageVerify
}
