'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import { strings } from '../../../lib/i18n';
import { isDef } from '../../../../helpers/helpers.js';
import Editor from '../../editor.jsx';
import Axios from 'axios';

function FormWrap(props) {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">{props.title}</h2>
      <p className="Dialog-message">{ (props.subtitle) ? props.subtitle : "" }</p>
      {props.children}
    </div>
  );
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.state = { error:'', title: '', subtitle: '', body: '', published: false, pubkey: '', author: '', user: undefined, file: undefined, image: undefined };
    }

    change(e) {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    }

    removeJwtAndRedirect() {
        localStorage.removeItem('jwt');
        this.props.router.push('/login');
    }

    realmProtected(jwt, data) {
        Axios.post('/realm', data, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            console.log(res.data);
            const data = {
                type: 'User',
                op: 'upsert',
                title: 'title',
                subtitle: 'subtitle',
                body: 'body',
                published: 1,
                author: res.data,
                created: new Date()
            };
            Axios.post('/realm', data, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                console.log(res);
            }).catch(e => {
                this.removeJwtAndRedirect();
            });

            //console.log(res);
            // if (res.data && !(res.data.status && res.data.status == 'error')) {
            //     console.log(res.data);
            // } else {
            //     console.log(res.data.status);
            // }
        }).catch(error => {
            console.log(error);
        });
    }

    doTest(jwt) {
        Axios.post('/test', {}, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }

    postSubmit(e) {
        e.preventDefault();
        //console.log('submitted');
        let jwt = localStorage.getItem('jwt');
        if (jwt) {
            this.doTest(jwt);
            // const user = {
            //     type: 'User',
            //     op: 'upsert',
            //     pubkey: '1ksndfosindoinsofisdif',
            //     name: 'Pat'
            // }
            // this.realmProtected(jwt, user);

            // const data = {
            //     type: 'User',
            //     op: 'upsert',
            //     title: this.state.title,
            //     subtitle: this.state.subtitle,
            //     body: this.state.body,
            //     published: this.state.published,
            //     author: this.state.author,
            //     updated: new Date()
            // };
            // Axios.post('/realm', data, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            //     console.log(res);
            // }).catch(e => {
            //     this.removeJwtAndRedirect();
            // });

            // const data = {
            //     type: 'Post',
            //     op: 'upsert',
            //     title: this.state.title,
            //     subtitle: this.state.subtitle,
            //     body: this.state.body,
            //     published: this.state.published,
            //     author: this.state.author,
            //     updated: new Date()
            // };
            // Axios.post('/realm', data, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            //     console.log(res);
            // }).catch(e => {
            //     this.removeJwtAndRedirect();
            // });
        } else {
            this.removeJwtAndRedirect();
        }
    }

    imageChange(e) {
        e.preventDefault();
        let file = e.target.files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file,
                image: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    render() {
        let { image } = this.state;
        let imagePreview = null;
        if (image) {
            imagePreview = (<img src={image} />);
        }
        return (
            <Editor name="dashboard" title={ strings().dashboard.title } >

                <FormWrap title="Add Post">
                    <form className="post__form" onSubmit={ this.postSubmit }>
                        <div className={ this.state.error.length > 0 ? "error" : "error false" }>{ this.state.error }</div>
                        <label className="post__label">
                            <span>Title</span>
                            <input className="post__title" type="text" name="title" value={ this.state.title } onChange={ this.change } />
                        </label>
                        <label className="post__label">
                            <span>Author</span>
                            <input className="post__author" type="text" name="author" value={ this.state.author } onChange={ this.change } />
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
                            <span>Hero Image</span>
                            <input type="file" name="hero" accept="image/*" multiple="multiple" onChange={ this.imageChange } />
                            {imagePreview}
                        </label>

                        <label className="post__label">
                            <span>Published</span>
                            <input className="post__published" type="checkbox" name="published" value={ this.state.published } onChange={ this.change } />
                        </label>
                        <input type="hidden" name="type" value="Post"/>
                        <input type="hidden" name="uid" value={ this.state.uid } />
                        <input className="post__submit" type="submit" value="Submit" />
                    </form>
                </FormWrap>

            </Editor>
        );
    }
}

export default withRouter(Dashboard)
