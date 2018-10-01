'use strict';

import React from 'react';
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Axios from 'axios';
import { strings } from '../../../lib/i18n';

import { getDBModel, toBase64, isEmptyObj, isDef, getUid } from '../../../../helpers/helpers.js';

import InputElement from './input-element.jsx';

const relativeImgPath = fullPath => fullPath.split('/public').pop();

class RealmFormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splash: '',
            uid: this.props.uid || '',
            realmType: this.props.realmType || '',
            realmModel: null
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
    }

    getError(prop) {
        if (prop.required && prop.type !== 'hidden') {
            if (prop.type === 'checkbox') {
                if (!isDef(prop.value)) {
                    return strings().forms.errors[0];
                }
            } else if (!prop.value) {
                return strings().forms.errors[0];
            }
        }
        return false;
    }

    addFormValue(formData, key, prop) {
        (prop.type !== 'editor') ? formData.append(key, prop.value) : formData.append(key, draftToHtml(convertToRaw(prop.value.getCurrentContent())));
    }

    buildFormData() {
        let model = this.state.realmModel;
        let formData = new FormData();
        formData.append('realmType', this.props.realmType);

        let errors = {};
        Object.keys(model).map(key => {
            let prop = model[key];
            let error = this.getError(prop);
            if (error) {
                errors[key] = error;
            } else {
                if (prop.name === 'uid') {
                    if (prop.value) {
                        this.addFormValue(formData, key, prop);
                    }
                } else {
                    this.addFormValue(formData, key, prop);
                }
            }
        });
        if (!isEmptyObj(errors)) {
            let realmModel = this.state.realmModel;
            Object.keys(errors).map(key => {
                realmModel[key].error = errors[key];
            });
            this.setState({ realmModel });
            return false;
        }
        return formData;
    }

    formSubmit(e) {
        e.preventDefault();
        let data = this.buildFormData();
        if (data) {
            Axios.post('/api/upsert', data, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
                console.log(res);
                // splash success
            }).catch(e => {
                console.log(e);
                // splash failure
            });
        }
    }

    editorChange(name) {
        return this.onEditorChange.bind(name);
    }

    inputChange(e) {
        //console.log(e);
        const { name, type } = e.target;
        const value = (type === 'checkbox') ? e.target.checked : e.target.value;
        let realmModel = this.state.realmModel;
        realmModel[name].value = value;
        this.setState({ realmModel });
    }

    imageChange(e) {
        e.preventDefault();
        const { name, files } = e.target;
        toBase64(files[0]).then(base64img => {
            let realmModel = this.state.realmModel;
            realmModel[name].value = base64img;
            this.setState({ realmModel });
        });
    }

    componentDidMount() {
        // get uid and set all of this.state values where they exist
        let realmModel = getDBModel(this.props.realmType);
        this.setState({ realmModel });
        // fetch uid from database
        //console.log('empty editor state:');
        //console.log(EditorState.createEmpty());
    }

    editorStateChange(e, name) {
        let realmModel = this.state.realmModel;
        realmModel[name].value = e;
        this.setState({ realmModel });
    }

    getChange(name, type) {
        if (type === 'file') return this.imageChange;
        if (type === 'editor') return (e) => this.editorStateChange(e, name);
        return this.inputChange;
    }

    buildInput(prop, idx) {
        let { realmModel } = this.state;
        let input = realmModel[prop];
        return (
            <InputElement
                key={idx}
                inputType={input.type}
                inputLabel={(input.fieldInfo) ? ((input.fieldInfo.label) ? input.fieldInfo.label: null) : null}
                inputName={input.name}
                inputValue={input.value}
                inputChange={this.getChange(input.name, input.type)}
                inputError={(input.error) ? input.error : null}
                inputDescription={(input.fieldInfo) ? ((input.fieldInfo.description) ? input.fieldInfo.description: null) : null}
            />
        );
    }

    removeSplash() {
        this.setState({ splash: null });
    }

    getSplash() {
        let { splash } = this.state;
        if (splash.length > 0) {
            return (
                <div className="splash">{splash} <div className="remove-btn" onClick={this.removeSplash()}>close</div></div>
            );
        }
        return null;
    }

    render() {
        let { realmType, uid } = this.props;
        let { realmModel } = this.state;
        if (!realmModel) {
            return (
                <div>
                Loading...
                </div>
            );
        }
        console.log(realmModel);
        return (
            <div className="form-wrapper">
                {this.getSplash()}
                <h2 className="form-title">Update { realmType }</h2>
                <form className="post__form" onSubmit={ this.formSubmit } encType="multipart/form-data">
                    {Object.keys(realmModel).map((prop, idx) => this.buildInput(prop, idx))}
                    <input type="hidden" value={realmType} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default RealmFormWrapper;
