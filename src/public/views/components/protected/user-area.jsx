'use strict';

import React from 'react';
import { Link } from 'react-router';
import UserIcon from '../icons/userIcon.jsx';
import { isEmptyObj } from '../../../../helpers/helpers.js';

class UserArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasUser: false,
            user: {}
        }
    }

    getNameDisplay() {
        let { pubkey, name } = this.state.user;
        pubkey = (pubkey) ? pubkey.substr(0, 6) + '..' : null;
        return name || pubkey;
    }

    getEditLink() {
        let { pubkey } = this.state.user;
        if (pubkey) {
            return (
                <Link className='user-edit' to={`/update/User/${pubkey}`}>{this.getNameDisplay()}</Link>
            );
        }
        return null;
    }

    setUser() {
        if ('localStorage' in window) {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                if (!isEmptyObj(user)) {
                    this.setState({ hasUser: true, user: user });
                }
            }
        }
    }

    componentDidMount() {
        this.setUser();
    }

    render() {
        if (!this.state.hasUser) {
            return null;
        }
        return (
            <div className="user-header">
                <UserIcon width="20" height="20" />
                {this.getEditLink()}
            </div>
        );
    }
}

export default UserArea;
