'use strict';

import React from 'react';
import { Link } from 'react-router';
import UserIcon from '../icons/userIcon.jsx';
import { isEmptyObj, getLocalstorageKey } from '../../../../helpers/helpers.js';

class UserArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasUser: false,
            user: {}
        }
    }
    getNameDisplay(pubkey) {
        let { user: { name } } = this.state;
        return (name) ? name : pubkey.substr(0, 6) + '..';
    }
    getIconLink(pubkey, icon) {
        return (<Link to={ `/update/User/${pubkey}` }><img className="icon" src={ icon } /></Link>);
    }
    getDefaultLink(pubkey) {
        return (<Link to={ `/update/User/${pubkey}` }><div className="icon"><UserIcon width="20" height="20" /></div></Link>);
    }
    getUserIcon() {
        let { user: { icon_img_64: icon, pubkey } } = this.state;
        if (pubkey) {
            return (
                <div className="user-header">
                    { (icon) ? this.getIconLink(pubkey, icon) : this.getDefaultLink(pubkey) }
                </div>
            );
        }
        return null;
    }
    userDidChange(newUser) {
        let { user } = this.state;
        if (!user || isEmptyObj(user)) return true;
        let changed = false;
        Object.keys(user).map(key => {
            if (user[key] !== newUser[key]) {
                changed = true;
            }
        });
        return changed;
    }
    setUser() {
        let user = getLocalstorageKey('user');
        if (user) {
            user = JSON.parse(user);
            if (this.userDidChange(user)) {
                this.setState({ hasUser: true, user: user });
            }
        }
    }
    componentDidUpdate() {
        this.setUser();
    }
    componentDidMount() {
        this.setUser();
    }
    render() {
        let { hasUser } = this.state;
        if (!hasUser) return null;
        return this.getUserIcon();
    }
}

export default UserArea;
