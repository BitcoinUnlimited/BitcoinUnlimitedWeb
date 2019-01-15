'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import LoginForm from '../components/login/loginForm.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page name="login" title={ strings().login.title } subtitle={ strings().login.subtitle } >
                <LoginForm />
            </Page>
        );
    }
}

export default Login
