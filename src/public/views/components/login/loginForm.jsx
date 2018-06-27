'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

var Bitcore = require('bitcore-lib');
var Message = require('bitcore-message');
var AddrFormat = require('bchaddrjs');
//import Jwt from 'jsonwebtoken'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.setPubKey = this.setPubKey.bind(this);
        this.setSignature = this.setSignature.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.state = { pubkey:"", sig:"", error:"" };
    }

    setPubKey(e) {
        this.setState({ pubkey: e.target.value });
    }
    setSignature(e) {
        this.setState({ sig: e.target.value });
    }

    loginSubmit(e) {
        e.preventDefault();
        let errorType = this.errorsExist();
        if (Number.isInteger(errorType)) {
            this.setState({ error: strings().auth.errors[errorType] });
        } else {
            console.log("valid! Send jwt");
        }
    }

    errorsExist() {
        if (!this.validateAddress(this.state.pubkey)) {
            return 0;
        } else if (this.state.sig.length === 0) {
            return 1;
        } else {
            // Convert BitcoinCash and Bitpay addresses to legacy for verification
            let addr = this.fixAddressFormat(this.state.pubkey);
            // bitcore/node causes errors when random strings are passed as the signature param
            try {
                if (!Message(this.props.challenge).verify(addr, this.state.sig)) return 1;
            }
            catch(error) {
                return 1;
            }
        }
    }

    validateAddress(address) {
        return strings().auth.validAddresses.filter(addr => addr === address).length > 0;
    }

    fixAddressFormat(address) {
        if (!AddrFormat.isLegacyAddress(address)) {
            return AddrFormat.toLegacyAddress(address)
        }
        return address;
    }

    render() {
        return (
            <form className="login__form" onSubmit={ this.loginSubmit }>
                <div className={ this.state.error.length > 0 ? "error" : "error false" }>{ this.state.error }</div>
                <label className="login__label">
                    <span>Public Key:</span>
                    <input className="login__text" type="text" name="pubkey" value={ this.state.pubkey } onChange={ this.setPubKey } />
                </label>
                <label className="login__label">
                    <span>Challenge:</span>
                    <div className="challenge">{ this.props.challenge }</div>
                </label>
                <label className="login__label">
                    <span>Signature:</span>
                    <textarea className="login__textarea" type="textarea" name="sig" value={ this.state.sig } onChange={ this.setSignature }></textarea>
                </label>
                <input className="login__submit" type="submit" value="Submit" />
            </form>
        )
    }
}

export default LoginForm
