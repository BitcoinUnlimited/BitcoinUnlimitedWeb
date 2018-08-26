'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { isDef } from '../../../../helpers/helpers.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            auth: undefined
        }
    }

    removeJwtAndRedirect() {
        localStorage.removeItem('jwt');
        this.props.router.push('/login');
    }

    componentDidMount() {
        let jwt = localStorage.getItem('jwt');
        if (!jwt) {
            this.props.router.push('/login');
        } else {
            Axios.get('/get_auth', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                if (isDef(res.data) && isDef(res.data.pubkey)) {
                    this.setState({
                        auth: res.data
                    })
                } else {
                    this.removeJwtAndRedirect();
                }
            }).catch(e => {
                this.removeJwtAndRedirect();
            });
        }
    }

    render() {
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
