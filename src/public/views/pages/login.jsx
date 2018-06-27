'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

import LoginForm from '../components/login/loginForm.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    buildChallenge() {
      var wordArr = strings().auth.wordpool.split(' ');
      var challenge = '',
          wordCount = 12;
      for (var i=0; i < wordCount; i++) {
        challenge += ' ' + wordArr[Math.floor(Math.random()*wordArr.length)];
      }
      return challenge;
    }

    render() {
        return (
            <Page name="login" title={ strings().login.title } subtitle={ strings().login.subtitle } >
                <LoginForm challenge={ this.buildChallenge() } />
            </Page>
        );
    }
}

export default Login
