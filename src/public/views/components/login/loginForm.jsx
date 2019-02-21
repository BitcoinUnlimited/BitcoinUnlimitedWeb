'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { strings } from '../../../lib/i18n';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.getChallenge = this.getChallenge.bind(this);
        this.state = {
            fetching: false,
            pubkey: '',
            uid: null,
            challenge: null,
            signature: '',
            error: '',
        };
    }

    change(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    validate(auth) {
        let { pubkey, uid, signature, challenge } = auth;
        if (!pubkey || !uid || !signature || !challenge) {
            return 1;
        }
        return null;
    }

    loginSubmit(e) {
        e.preventDefault();
        let { pubkey, challenge, uid, signature } = this.state;
        let auth = { pubkey, challenge, uid, signature };
        let errors = this.validate(auth);
        if (Number.isInteger(errors)) {
            this.setState({ error: strings().auth.errors[errors] });
            return;
        }
        this.verifySignature(auth);
    }

    verifySignature(auth) {
        // Makes a call to verify the users input signature
        Axios.post('/sig_verify', auth).then(response => {
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

    getChallenge(e) {
        e.preventDefault();
        this.setState({ fetching: true })
        /*
         * Call to the function that builds a random 12 word challenge
         * Uses, 'hello, world' if DEBUG=true is specified in the /.env file.
         */
        Axios.get('/get_login_challenge').then(res => {
            if (res.data) {
                let { uid, challenge } = res.data;
                if (uid && challenge) {
                    this.setState({ fetching: false, uid, challenge });
                } else {
                    this.setState({ fetching: false });
                }
            } else {
                this.setState({ fetching: false });
            }
        }).catch(e => {
            console.log(e);
            this.setState({ fetching: false, error: 'Error getting challenge.' });
        });
    }

    showError(error) {
        if (error) {
            return (<div className="error">{ error }</div>);
        }
        return null;
    }

    showChallenge(fetching, challenge) {
        if (fetching) {
            return (<ReactLoading type="balls" color="#ccc" />);
        }
        if (challenge) {
            return challenge;
        }
        return (<button onClick={ this.getChallenge }>Get Challenge</button>);
    }

    render() {
        let { fetching, pubkey, error, challenge, signature } = this.state;
        return (
            <form className="login__form" onSubmit={ this.loginSubmit }>
                { this.showError(error) }
                <label className="login__label">
                    <span>Public Key:</span>
                    <input className="login__text" type="text" name="pubkey" value={ pubkey } onChange={ this.change } />
                </label>
                <label className="login__label">
                    <span>Challenge:</span>
                    <div className="challenge">{ this.showChallenge(fetching, challenge) }</div>
                </label>
                <label className="login__label">
                    <span>Signature:</span>
                    <textarea className="login__textarea" type="password" name="signature" value={ signature } onChange={ this.change }></textarea>
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
