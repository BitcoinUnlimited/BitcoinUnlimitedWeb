'use strict';

import Bitcore from 'bitcore-lib';
import Message from 'bitcore-message';
import AddrFormat from 'bchaddrjs';
import { strings } from '../public/lib/i18n';

/*
 * Converts BitcoinCash and Bitpay addresses to legacy for verification
 * address {string}
 */
const fixAddressFormat = address => { return !AddrFormat.isLegacyAddress(address) ? AddrFormat.toLegacyAddress(address) : address; }

/*
 * Verify the message
 * { challenge: {string}, address: {string}, signature: {string} }
 * Note: Bitcore causes errors when non-signature strings are passed as the signature param
 */
const messageVerify = message => {
    let { challenge, pubkey, signature } = message;
    const fixedPubKey = fixAddressFormat(pubkey);
    try {
        return Message(challenge).verify(fixedPubKey, signature);
    } catch(e) {
        return false;
    }
}

const testSomething = () => 'true';

module.exports = {
    fixAddressFormat,
    messageVerify,
    testSomething
}
