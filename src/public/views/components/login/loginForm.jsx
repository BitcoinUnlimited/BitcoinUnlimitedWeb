'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from "react-loading";
import CountdownTimer from "./countdownTimer.jsx";
import { strings } from '../../../lib/i18n';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.getChallenge = this.getChallenge.bind(this);
        this.copyChallenge = this.copyChallenge.bind(this);
        this.getCopyButton = this.getCopyButton.bind(this);
        this.clearError = this.clearError.bind(this);
        this.refreshButton = this.refreshButton.bind(this);
        this.state = {
            fetching: false,
            countdown: false,
            timeleft: null,
            pubkey: '',
            uid: null,
            challenge: null,
            copy: 'Copy',
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
                let { challenge, challengeExpires } = res.data;
                if (challenge && challenge.uid && challenge.challenge && challengeExpires) {
                    this.setState({
                        fetching: false,
                        countdown: true,
                        timeleft: challengeExpires,
                        uid: challenge.uid,
                        challenge: challenge.challenge
                    });
                } else {
                    this.setState({ fetching: false });
                }
            } else {
                this.setState({ fetching: false });
            }
        }).catch(e => {
            this.setState({ fetching: false, error: 'Error getting challenge.' });
        });
    }

    clearError() {
        this.setState({ error: null })
    }

    showError(error) {
        if (error) {
            return (
                <div className="error">{ error }
                    <span className="clear-error" onClick={ this.clearError }>X</span>
                </div>
            );
        }
        return null;
    }

    copyEnabled() {
        return document && document.queryCommandSupported('copy');
    }

    copyChallenge(e) {
        e.preventDefault();
        document.getElementById('challenge-text').select();
        document.execCommand('copy');
        this.setState({ copy: 'Copied' })
    }

    getCopyButton() {
        if (this.copyEnabled()) {
            return (<button onClick={ this.copyChallenge }>{ this.state.copy }</button>);
        }
        return null;
    }

    refreshButton() {
        this.setState({ countdown: false, challenge: false, timeleft: false });
    }

    showCountdown() {
        let { countdown, timeleft } = this.state;
        if (countdown && timeleft) {
            return (<CountdownTimer seconds={ timeleft } callback={ this.refreshButton } />)
        }
        return null;
    }

    showChallenge(fetching, challenge) {
        if (fetching) {
            return (<ReactLoading type="balls" color="#ccc" />);
        }
        if (challenge) {
            return (
                <div className="challenge-result">
                    <textarea id="challenge-text" value={ challenge } readOnly="readOnly" />
                    { this.getCopyButton() }
                </div>
            );
        }
        return (<button className="get-challenge" onClick={ this.getChallenge }>Get Challenge</button>);
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
                    { this.showCountdown() }
                    { this.showChallenge(fetching, challenge) }
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
