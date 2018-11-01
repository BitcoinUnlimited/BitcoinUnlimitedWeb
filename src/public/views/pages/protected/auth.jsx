'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import Page from '../../page.jsx'
import { getJwt } from '../../../../helpers/helpers.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false
        }
    }

    removeJwtAndRedirect() {
        if ('localStorage' in window) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
        }
        this.props.router.push('/login');
    }

    getUser(pubkey) {
        if ('localStorage' in window) {
            Axios.get(`/api/get/User/${pubkey}`).then(res => {
                let { data: { pubkey: userPubkey } } = res;
                if (userPubkey) {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    this.setState({ isAuthed: true });
                }
            });
        }
    }

    authenticateUser() {
        let jwt = getJwt();
        if (!jwt) {
            removeJwtAndRedirect();
        } else {
            Axios.get('/user_auth', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: { pubkey } } = res;
                if (pubkey) {
                    this.getUser(res.data.pubkey);
                } else {
                    this.removeJwtAndRedirect();
                }
            }).catch(e => {
                this.removeJwtAndRedirect();
            });
        }
    }

    componentDidMount() {
        this.authenticateUser();
    }

    render() {
        let { isAuthed } = this.state;
        if (!isAuthed) {
            return (
                <Page>
                    <div className="react-loading">
                        <ReactLoading type="balls" color="#ccc" />
                    </div>
                </Page>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Auth);

Auth.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
