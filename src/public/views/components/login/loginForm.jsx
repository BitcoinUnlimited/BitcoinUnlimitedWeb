'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Bitcore from 'bitcore-lib'
import Message from 'bitcore-message'
import AddrFormat from 'bchaddrjs'
import Jwt from 'jsonwebtoken'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.setPubKey = this.setPubKey.bind(this);
        this.setSignature = this.setSignature.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.errorsExist = this.errorsExist.bind(this);
        this.checkAddress = this.checkAddress.bind(this);
        this.fixAddress = this.fixAddress.bind(this);

        this.state = { pubkey:"", sig:"", error:"" };
    }

    setPubKey(e) {
      this.setState({ pubkey: e.target.value });
    }
    setSignature(e) {
      this.setState({ sig: e.target.value });
    }

    loginSubmit(e) {
        e.preventDefault();
        let errorType = this.errorsExist();
        if (errorType === 0 || errorType === 1) {
          this.setState({ error: strings().auth.errors[errorType] });
        } else {
            //console.log('all good!');
        }
    }

    errorsExist() {
        if (!this.checkAddress(this.state.pubkey)) {
            return 0;
        } else if (this.state.sig.length === 0) {
            return 1;
        } else {
          var addr = this.fixAddress(this.state.pubkey);
          console.log(addr);
          console.log(this.state.sig);
          console.log(this.props.challenge);

          console.log(Message(this.props.challenge).verify("1BWZe6XkGLcf6DWC3TFXiEtZmcyAoNq5BW","hereisasignature"));

          // var result = Message(this.props.challenge).verify(addr, this.state.sig);
          // console.log(result);
        }
    }

    checkAddress(address) {
      return strings().auth.validAddresses.filter(addr => addr === address).length > 0;
    }

    fixAddress(address) {
      if (!AddrFormat.isLegacyAddress(address)) {
        return AddrFormat.toLegacyAddress(address)
      }
      return address;
    }

    render() {
        return (
          <form className="login__form" onSubmit={ this.loginSubmit }>
              <div className={ this.state.error.length > 0 ? "error" : "error false" }>{ this.state.error }</div>
              <label className="login__label">
                  <span>Public Key:</span>
                  <input className="login__text" type="text" name="pubkey" value={ this.state.pubkey } onChange={ this.setPubKey } />
              </label>
              <label className="login__label">
                  <span>Challenge:</span>
                  <div className="challenge">
                      { this.props.challenge }
                  </div>
              </label>
              <label className="login__label">
                  <span>Signature:</span>
                  <textarea className="login__textarea" type="textarea" name="sig" value={ this.state.sig } onChange={ this.setSignature }></textarea>
              </label>
              <input className="login__submit" type="submit" value="Submit" />
          </form>
        )
    }
}

export default LoginForm
