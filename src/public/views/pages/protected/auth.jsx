'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import Page from '../../page.jsx'
import { isDef } from '../../../../helpers/helpers.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false
        }
    }

    removeJwtAndRedirect() {
        console.log('remove jwt and redirect');
        if ('localStorage' in window) {
            localStorage.removeItem('jwt');
        }
        this.props.router.push('/login');
    }

    getUser(pubkey) {
        if ('localStorage' in window) {
            Axios.get(`/api/get/User/${pubkey}`).then(res => {
                if (res.data && res.data[0]) {
                    localStorage.setItem('user',JSON.stringify(res.data[0]));
                }
            });
        }
    }

    componentDidMount() {
        let jwt = localStorage.getItem('jwt');
        if (!jwt) {
            this.props.router.push('/login');
        } else {
            Axios.get('/get_auth', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                if (res.data && res.data.pubkey) {
                    console.log('set authed: ' + res.data.pubkey);
                    this.getUser(res.data.pubkey);
                    this.setState({ isAuthed: true });
                } else {
                    console.log('no jwt, redirect');
                    this.removeJwtAndRedirect();
                }
            }).catch(e => {
                console.log('catch type error: ' + e);
                this.removeJwtAndRedirect();
            });
        }
    }

    render() {
        if (this.state.isAuthed) {
            return (
                <div>
                  {this.props.children}
                </div>
            );
        }
        return (
            <Page>
                <div className="react-loading">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            </Page>
        );
    }
}

export default withRouter(Auth);

Auth.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
