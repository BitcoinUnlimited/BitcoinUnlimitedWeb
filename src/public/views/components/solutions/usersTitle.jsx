'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import UserIcon from '../icons/userIcon.jsx'

class UsersTitle extends React.Component {
    render() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <UserIcon width='20' height='24' />
                </div>
                { strings().solutions.users.title }
            </div>
        );
    }
};

export default UsersTitle
