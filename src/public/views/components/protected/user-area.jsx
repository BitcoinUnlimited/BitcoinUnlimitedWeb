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

    getNameDisplay(pubkey) {
        let { user : { name } } = this.state;
        return (name) ? name : pubkey.substr(0, 6) + '..';
    }

    getEditLink() {
        let { user : { pubkey, name } } = this.state;
        if (pubkey) {
            return (
                <Link className='user-edit' to={`/update/User/${pubkey}`}>{this.getNameDisplay(pubkey)}</Link>
            );
        }
        return null;
    }

    setUser() {
        if ('localStorage' in window) {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                if (user) {
                    this.setState({ hasUser: true, user: user });
                }
            }
        }
    }

    componentDidMount() {
        this.setUser();
    }

    render() {
        let { hasUser } = this.state;
        if (!hasUser) return null;
        return (
            <div className="user-header">
                <UserIcon width="20" height="20" />
                {this.getEditLink()}
            </div>
        );
    }
}

export default UserArea;
