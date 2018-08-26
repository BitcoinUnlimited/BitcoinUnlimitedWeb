'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { strings } from '../../../lib/i18n';
import { validateAddress } from '../../../../database/verifySignature.js';
import Axios from 'axios';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.state = { isAuthed: false ,pubkey:'', sig:'', error:'', counter: 0 };
    }

    change(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginSubmit(e) {
        e.preventDefault();
        let errors = this.validate();
        if (Number.isInteger(errors)) {
            this.setState({ error: strings().auth.errors[errors] });
            return;
        }
        this.verifySignature({ pubkey: this.state.pubkey, challenge: this.props.challenge, signature: this.state.sig });
    }

    verifySignature(auth) {
        const { pubkey, challenge, signature } = auth;
        Axios.post('/sig_verify', {
            pubkey: pubkey,
            challenge: challenge,
            signature: signature
        }).then(response => {
            if (response.data && !(response.data.status && response.data.status == 'error')) {
                localStorage.setItem('jwt', response.data);
                this.props.router.push('/dashboard');
            } else {
                this.setState({ error: strings().auth.errors[2] });
            }
        }).catch(error => {
            this.setState({ error: strings().auth.errors[2] });
        });
    }

    validate() {
        if (!this.state.sig || !this.state.pubkey) {
            return 1;
        } else if (!validateAddress(this.state.pubkey)) {
            return 0;
        }
    }

    render() {
        return (
            <form className="login__form" onSubmit={ this.loginSubmit }>
                <div className={ this.state.error.length > 0 ? "error" : "error false" }>{ this.state.error }</div>
                <label className="login__label">
                    <span>Public Key:</span>
                    <input className="login__text" type="text" name="pubkey" value={ this.state.pubkey } onChange={ this.change } />
                </label>
                <label className="login__label">
                    <span>Challenge:</span>
                    <div className="challenge">{ this.props.challenge }</div>
                </label>
                <label className="login__label">
                    <span>Signature:</span>
                    <textarea className="login__textarea" type="password" name="sig" value={ this.state.sig } onChange={ this.change }></textarea>
                </label>
                <input className="login__submit" type="submit" value="Submit" />
            </form>
        )
    }
}

export default withRouter(LoginForm);

LoginForm.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
