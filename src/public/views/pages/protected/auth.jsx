'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import Axios from 'axios';

const isDefined = optional => typeof optional !== 'undefined';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            user: undefined
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
            Axios.get('/get_user', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                if (isDefined(res.data) && isDefined(res.data.pubkey)) {
                    this.setState({
                        user: res.data
                    })
                } else {
                    this.removeJwtAndRedirect();
                }
            }).catch(e => {
                //console.log(`Get user error: ${e}`);
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
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};
