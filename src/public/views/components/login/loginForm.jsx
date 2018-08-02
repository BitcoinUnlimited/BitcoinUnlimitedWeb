'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';
import { validateAddress, fixAddressFormat, messageVerify } from '../../../../database/verifySignature.js';

import Jwt from 'jsonwebtoken';

import Axios from 'axios';
//import Env from 'process-env'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.setPubKey = this.setPubKey.bind(this);
        this.setSignature = this.setSignature.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.state = { pubkey:"", sig:"", error:"", counter: 0 };
    }

    setPubKey(e) {
        this.setState({ pubkey: e.target.value });
    }
    setSignature(e) {
        this.setState({ sig: e.target.value });
    }

    loginSubmit(e) {
        e.preventDefault();
        let errors = this.checkSubmit();
        if (Number.isInteger(errors)) {
            this.setState({ error: strings().auth.errors[errors] });
        } else {
            this.setState({ error: '' });
            console.log('correct!');

            // get token after checking signature
            Axios.post('/sig_verify', {
                challenge: this.props.challenge,
                address: this.state.pubkey,
                signature: this.state.sig
            }).then(response => {
                if (response.data !== 'undefined') {
                    localStorage.setItem('jwt-token', response.data);
                } else {
                    this.setState({ error: "Authentication failed." });
                }
            }).catch(error => {
                this.setState({ error: error });
            });
        }
    }

    checkSubmit() {
        if (!validateAddress(this.state.pubkey)) {
            return 0;
        } else if (this.state.sig.length === 0) {
            return 1;
        } else {
            let addr = fixAddressFormat(this.state.pubkey);
            try {
                if (!messageVerify({ challenge:this.props.challenge, address:addr, signature:this.state.sig })) return 1;
            }
            catch(error) {
                return 1;
            }
        }
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
                    <textarea className="login__textarea" type="password" name="sig" value={ this.state.sig } onChange={ this.setSignature }></textarea>
                </label>
                <input className="login__submit" type="submit" value="Submit" />
            </form>
        )
    }
}

export default LoginForm
