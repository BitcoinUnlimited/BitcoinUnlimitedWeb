'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Axios from 'axios';
import { strings } from '../../../lib/i18n';
import Base from '../../base.jsx';

import { getDBModel, toBase64, isEmptyObj, isDef, getUid } from '../../../../helpers/helpers.js';

import InputElement from '../../components/forms/input-element.jsx';

const relativeImgPath = fullPath => fullPath.split('/public').pop();

class RealmFormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splash: '',
            uid: this.props.params.uid || '',
            realmType: this.props.params.realmType || '',
            realmModel: null
        }
        this.removeSplash = this.removeSplash.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.deleteConfirm = this.deleteConfirm.bind(this);
    }

    addFormValue(formData, key, prop) {
        (prop.type !== 'editor') ? formData.append(key, prop.value) : formData.append(key, draftToHtml(convertToRaw(prop.value.getCurrentContent())));
    }

    buildFormData() {
        let model = this.state.realmModel;
        let formData = new FormData();
        formData.append('realmType', this.props.params.realmType);
        Object.keys(model).map(key => {
            let prop = model[key];
            if (prop.name === 'uid') {
                if (prop.value) {
                    this.addFormValue(formData, key, prop);
                }
            } else {
                this.addFormValue(formData, key, prop);
            }
        });
        return formData;
    }

    formSubmit(e) {
        e.preventDefault();
        let data = this.buildFormData();
        if (data) {
            Axios.post('/api/upsert', data, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
                console.log('formSubmitResult:');
                console.log(res);
                if (res && res.data) {
                    this.setSplash(`Updated ${this.state.realmType}`);
                }
            }).catch(e => {
                this.setSplash(`There was an error updating your ${this.state.realmType}. See console for details.`);
                console.log(e);
            });
        }
    }

    editorChange(name) {
        return this.onEditorChange.bind(name);
    }

    inputChange(e) {
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

    convertToEditor(content) {
        const blocksFromHtml = htmlToDraft(content);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        return EditorState.createWithContent(contentState);
    }

    setValues(values) {
        let realmModel = this.state.realmModel;
        Object.keys(realmModel).map(key => {
            if (values[key]) {
                let modelRow = realmModel[key];
                if (modelRow.type === 'editor') {
                    realmModel[key].value = this.convertToEditor(values[key]);
                } else {
                    realmModel[key].value = values[key];
                }
            }
        });
        this.setState({ realmModel });
    }

    getModel(realmType) {
        let realmModel = getDBModel(realmType);
        this.setState({ realmModel });
    }

    getUidData(realmType, uid) {
        Axios.get(`/api/get/${realmType}/${uid}`).then(res => {
            if (res.data) {
                this.setValues(res.data);
            }
        });
    }

    componentDidUpdate(previousProps) {
        let { params: { realmType: currentType, uid }, route: { path } } = this.props;
        let { params: { realmType: previousType, previousUid }, route: { path: previousPath } } = previousProps;
        if ((currentType && previousType && previousType !== currentType) || path !== previousPath) {
            this.getModel(currentType);
        }
        if (currentType && uid && previousUid && previousUid !== uid) {
            this.getUidData(currentType, uid);
        }
    }

    componentDidMount() {
        let { params: { realmType, uid } } = this.props;
        if (realmType) this.getModel(realmType);
        if (realmType && uid) this.getUidData(realmType, uid);
    }

    editorStateChange(e, name) {
        let realmModel = this.state.realmModel;
        realmModel[name].value = e;
        this.setState({ realmModel });
    }

    getChangeFN(name, type) {
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
                inputChange={this.getChangeFN(input.name, input.type)}
                inputError={(input.error) ? input.error : null}
                inputDescription={(input.fieldInfo) ? ((input.fieldInfo.description) ? input.fieldInfo.description: null) : null}
            />
        );
    }

    setSplash(splash) {
        this.setState({ splash })
    }

    removeSplash() {
        this.setState({ splash: '' });
    }

    getSplash() {
        let { splash } = this.state;
        if (splash) {
            return (
                <div className="splash">{splash} <div className="remove-btn" onClick={this.removeSplash}>close</div></div>
            );
        }
        return null;
    }

    deleteConfirm(e) {
        e.preventDefault();
        let { uid, realmType } = this.state;
        //if (uid && realmType) alert(`Delete ${realmType} ${uid}?`);
        // display modal to confirm/deny
        Axios.post('/api/delete', { uid, realmType }, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
            let { data: { status } } = res;
            if (status && status === 'success') {
                this.props.router.push(`/create/${realmType}`);
            } else {
                console.log(res);
            }
        }).catch(e => {
            this.setSplash(`There was an error updating your ${this.state.realmType}. See console for details.`);
            console.log(e);
        });
    }

    render() {
        let { realmType, realmModel } = this.state;
        if (!realmType || !realmModel) {
            return (
                <Base name="schema-update">
                    <ReactLoading type="balls" color="#ccc" />
                </Base>
            );
        }
        let { uid } = this.state;
        return (
            <Base name="schema-update">
                <div className="form-wrapper">
                    {this.getSplash()}
                    <h2 className="form-title">Update { realmType }</h2>
                    <form className="post__form" onSubmit={ this.formSubmit } encType="multipart/form-data">
                        {Object.keys(realmModel).map((prop, idx) => this.buildInput(prop, idx))}
                        <input type="hidden" value={realmType} />
                        <input type="submit" value="Save" />
                        {(uid) ? (<button onClick={this.deleteConfirm}>Delete</button>) : null}
                    </form>
                </div>
            </Base>
        );
    }
}

export default withRouter(RealmFormWrapper);

RealmFormWrapper.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
