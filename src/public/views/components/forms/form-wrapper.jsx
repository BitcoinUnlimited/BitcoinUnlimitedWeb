'use strict';

import React from 'react';
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Axios from 'axios';

import InputElement from './input-element.jsx';

const relativeImgPath = fullPath => fullPath.split('/public').pop();

class FormWrapper extends React.Component {
    constructor(props) {
        super(props);

        /*
        uid: 'string',
        title: 'string',
        subtitle: 'string',
        body: 'string',
        created: 'date',
        published: 'bool',
        url: 'Redirect?',
        author: 'User?',
        tags: 'string?[]',
        updated: 'date?'
        */

        this.state = {
            editorState: EditorState.createEmpty(),
            allImages:[],
            realmObject: [
                {
                    type: 'hidden',
                    name: 'uid',
                    val: '1234'
                },
                {
                    type: 'text',
                    name: 'Title',
                    val: ''
                },
                {
                    type: 'text',
                    name: 'Subtitle',
                    val: ''
                },
                {
                    type: 'textarea',
                    name: 'Body',
                    description: 'replace with wysiwyg'
                }
            ]
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.onEditorChange = (editorState) => this.setState({editorState});
        this.imageUpload = this.imageUpload.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
    }

    updateRealmObject(idx, value) {
        let state = this.state.realmObject;
        state[idx].val = value;
        return state;
    }

    inputChange(idx) {
        return (e) => {
            const { name, type } = e.target;
            const value = (type === 'checkbox') ? e.target.checked : e.target.value;
            this.setState({ realmObject: this.updateRealmObject(idx, value) });
        }
    }

    inputTypeText(obj, idx) {
        return (
            <InputElement
                key={idx}
                inputType={obj.type}
                inputName={obj.name}
                inputValue={obj.val}
                inputChange={this.inputChange(idx)}
                inputDescription={obj.description}
            />
        );
    }

    inputTypeTextarea(obj, idx) {
        return (
            <div key={idx}></div>
        );
    }

    imageUpload(e) {
        e.preventDefault();
        // let file = e.target.files[0];
        // toBase64(file).then(res => {
        //     this.setState({
        //         file: file,
        //         image: res
        //     });
        //     this.getAllImages();
        // });
        //
        // console.log(this.state.file);
        //
        //
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
        formData.append('file', e.target.files[0]);

        Axios.post('/api/upload', formData, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
            let images = this.state.allImages;
            images[Object.keys(images).length++] = res.data;
            this.setState({ allImages: images });
        });
    }

    buildElement(obj, idx) {
        let textTypes = ['text', 'hidden', 'date', 'file'];
        if (textTypes.indexOf(obj.type) !== -1) {
            return this.inputTypeText(obj, idx);
        } else if (obj.type === 'textarea') {
            return (
                <Editor
                    key={idx}
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorChange}
                />
            );
        }
    }

    getFiles() {
        Axios.get('/api/getFiles', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
            console.log(res);
            // let images = this.state.allImages;
            // images[Object.keys(images).length++] = res.data;
            // this.setState({ allImages: images });
        });
    }

    componentDidMount() {
        this.getFiles();
    }

    render() {
        return (
            <div className="form-wrapper">
                <h2 className="form-title">Update { this.props.realmType }</h2>
                <form className="post__form" onSubmit={ this.formSubmit } encType="multipart/form-data">
                    {this.state.realmObject.map((obj, idx) => this.buildElement(obj, idx))}
                    <input type="file" multiple="multiple" onChange={this.imageUpload} />
                    {this.state.allImages.map((path, index) => <img key={index} src={relativeImgPath(path)} />)}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default FormWrapper;
