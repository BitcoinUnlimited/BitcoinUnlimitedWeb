'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';
import Page from '../../page.jsx';
import Axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
        this.state = { error:'', title: '', subtitle: '', body: '', published: false, pubkey: '' };
    }

    change(e) {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    }

    postSubmit(e) {
        e.preventDefault();
        //console.log('submitted');
        // Axios.post('/sig_verify', {
        //     pubkey: pubkey,
        //     challenge: challenge,
        //     signature: signature
        // }).then(response => {
        //     if (response.data && !(response.data.status && response.data.status == 'error')) {
        //         localStorage.setItem('jwt', response.data);
        //         this.props.router.push('/dashboard');
        //     } else {
        //         this.setState({ error: strings().auth.errors[2] });
        //     }
        // }).catch(error => {
        //     this.setState({ error: strings().auth.errors[2] });
        // });
    }

    render() {
        return (
            <Page name="dashboard" title={ strings().dashboard.title } >

                <form className="post__form" onSubmit={ this.postSubmit }>
                    <div className={ this.state.error.length > 0 ? "error" : "error false" }>{ this.state.error }</div>
                    <label className="post__label">
                        <span>Title</span>
                        <input className="post__title" type="text" name="title" value={ this.state.title } onChange={ this.change } />
                    </label>
                    <label className="post__label">
                        <span>Subtitle</span>
                        <input className="post__subtitle" type="text" name="subtitle" value={ this.state.subtitle } onChange={ this.change } />
                    </label>
                    <label className="post__label">
                        <span>Body</span>
                        <textarea className="post__body" name="body" value={ this.state.body } onChange={ this.change }></textarea>
                    </label>

                    <label className="post__label">
                        <span>Published</span>
                        <input className="post__published" type="checkbox" name="published" value={ this.state.published } onChange={ this.change } />
                    </label>
                    <input type="hidden" name="type" value="Post"/>
                    <input className="post__submit" type="submit" value="Submit" />
                </form>

            </Page>
        );
    }
}

export default Dashboard
