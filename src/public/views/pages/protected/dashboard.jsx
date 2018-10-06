'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import { strings } from '../../../lib/i18n';
import { isDef, getUid, toBase64 } from '../../../../helpers/helpers.js';
import Admin from '../../admin.jsx';
import InputElement from '../../components/forms/input-element.jsx';
import RealmFormWrapper from './realm-form-wrapper.jsx';
import Axios from 'axios';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

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
    // display a list of blogs to edit

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);

        this.didChange = this.didChange.bind(this);

        // this.getModules = this.getModules.bind(this);
        // this.getFormats = this.getFormats.bind(this);
        this.state = { inputname: '', inputname_error: '', required: [], error:'', editorState: EditorState.createEmpty(), title: '', subtitle: '', body: '', published: false, pubkey: '', author: '', user: undefined, file: undefined, image: undefined, allImages: undefined };
    }

    change(e) {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    }

    getRequired() {
        return this.props.required || [];
    }

    isRequired(inputName) {
        return getRequired().filter(req => req === inputName).length > 0;
    }

    // this will be within Form
    // Form will keep track of required input names
    didChange(e) {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        console.log(`${name} : ${value}`);
        if (this.isRequired(name)) {
            if (value.length > 0) {
                this.setState({ [name]: value, [`${name}_error`]: null });
            } else {
                this.setState({ [name]: value, [`${name}_error`]: `${name} is required` });
            }
        } else {
            this.setState({ [name]: value });
        }
    }


    removeJwtAndRedirect() {
        localStorage.removeItem('jwt');
        this.props.router.push('/login');
    }

    realmProtected(jwt, data) {
        Axios.post('/realm', data, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            // console.log(res.data);
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
                //console.log(res);
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
        console.log(this.state.file);
        // let image = { uid: '123', type: 'svg', data: this.state.image || '', name:'new image' };
        // Axios.post('/img', this.state.image, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // });
        //const uid = getUid();
        //console.log('uid:');
        //console.log(uid);
        //const img = { realmType: 'File', uid: uid || '222', filestring:this.state.image };

        var formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('id', 'test');

        Axios.post('/realm_upload', formData, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
            console.log(res);
            let images = this.state.allImages;
            console.log('images:');
            images[Object.keys(images).length++] = res.data;
            this.setState({ allImages: images });
        });
    }

    postSubmit(e) {
        e.preventDefault();
        //console.log('submitted');
        let jwt = localStorage.getItem('jwt');
        if (jwt) {
            this.doTest(jwt);
        }
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

    }

    handleEditorChange(content, delta, source, editor) {
        console.log(content);
        console.log(delta);

        console.log(source);

        console.log(editor);
        console.log(editor.getContents());
        //e.preventDefault();
        //console.log('editor changed');
    }

    processAllImages() {
        const imgData = this.state.allImages;
        if (isDef(imgData)) {
            return Object.keys(imgData).map(key => {
                return imgData[key].filestring;
            });
        }
        return [];
    }

    getAllImages() {
        const data = { realmType: 'File' };
        Axios.post('/api/get', data).then(res => {
            if (res.status == 200 && isDef(res.data)) {
                this.setState({ allImages: res.data });
            }
        }).catch(e => {
            console.log(e);
        });
    }

    componentDidMount() {
        //this.getAllImages();
    }

    imageChange(e) {
        console.log(e);
        // e.preventDefault();
        // let file = e.target.files[0];
        toBase64(file).then(res => {
            this.setState({
                file: file,
                image: res
            });
            this.getAllImages();
        });
    }

    getModules() {
        return {
            toolbar: [
                [{ 'color': [] }, { 'background': [] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']
            ]
        }
    }
    //
    getFormats() {
        return [
            'color', 'background',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video',
            'clean'
        ];
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }

    render() {
        let { image } = this.state;
        let imagePreview = null;
        if (image) {
            imagePreview = (<img src={image} />);
        }

        let images = this.processAllImages();
        //console.log(images);
        let renderImages = null;
        if (images.length > 0) {
            renderImages = images.map((img, idx) => {
                return (<img key={idx} src={img} />);
            });
        }

        const { editorState } = this.state;




        return (
            <Admin name="dashboard" title={ strings().dashboard.title } >

                <RealmFormWrapper formTitle="Add Post" formSubmit={ this.formSubmit } formErrors={ this.state.inputname_error }>
                    <InputElement
                        inputType="text"
                        inputName="inputname"
                        inputClass="class-name"
                        inputState={ this.state.inputname }
                        inputChange={ this.didChange }
                        inputError={ this.state.inputname_error }
                    />
                </RealmFormWrapper>


                <FormWrap title="Add Post">
                    <form className="post__form" onSubmit={ this.postSubmit } encType="multipart/form-data">
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
                            <span>Editor</span>
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={this.onEditorStateChange}
                            />
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
                {renderImages}

            </Admin>
        );
    }
}

export default withRouter(Dashboard);
