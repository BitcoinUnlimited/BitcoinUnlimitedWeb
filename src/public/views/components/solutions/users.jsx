'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Users extends React.Component {
    render() {
        return (
            <div>
                <p> { strings().solutions.users.body[0] } </p>
                <div className='center py3'>
                    <img className='section__image' src="../img/solutions/users.gif" alt="users" />
                </div>
                <p> { strings().solutions.users.body[1] } </p>
            </div>

        );
    }
};

export default Users
