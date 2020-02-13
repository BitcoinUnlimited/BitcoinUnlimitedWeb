'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import Page from '../../page.jsx'
import { getLocalstorageKey } from '../../../../helpers/helpers.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false
        }
    }

    /**
     * [removeJwtAndRedirect Auth failures are redirected to /login and have thier localStorage credentials removed.]
     */
    removeJwtAndRedirect() {
        if ('localStorage' in window) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
        }
        this.props.router.push('/login');
    }

    getUser(pubkey) {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            /*
             * The second layer of the auth process gets the user's info from the secure auth database.
             * If the token is correct and the user is authed, the user object is stored in
             * local storage and the user is then sent to the page they had requested within the auth area.
             */
            Axios.get(`/get/secure/User/${pubkey}`, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: { pubkey: userPubkey } } = res;
                if (userPubkey) {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    this.setState({ isAuthed: true });
                } else {
                    this.removeJwtAndRedirect();
                }
            }).catch(e => {
                console.log(e);
            });
        } else {
            this.removeJwtAndRedirect();
        }
    }

    authenticateUser() {
        let jwt = getLocalstorageKey('jwt');
        if (!jwt) {
            this.removeJwtAndRedirect();
        } else {
            /*
             * Uses the user's token to attempt to authenticate.
             * Auth failures remove the user's JWT and redirects them to the login.
             * This is the first step in the auth process, getUser is called to verify the user's JWT.
             */
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

    /**
     * [componentDidMount Authenticates the user on mount.]
     */
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
                { this.props.children }
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
