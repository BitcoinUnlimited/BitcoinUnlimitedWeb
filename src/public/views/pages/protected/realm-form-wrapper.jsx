'use strict';

import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Axios from 'axios';
import { strings } from '../../../lib/i18n';
import { getDBModel, isEmptyObj, isDef, getUid, isImage64, getLocalstorageKey } from '../../../../helpers/helpers.js';
import { toBase64 } from '../../../../helpers/fileHelpers.js';
import Base from '../../base.jsx';
import InputElement from '../../components/forms/input-element.jsx';

/**
 * [RealmFormWrapper This react component is used as a wrapper for all realmType create and update forms.
 * It builds form elements from the schema properties (and additional info) and handles the current state.]
 * @extends React
 */
class RealmFormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splash: '',
            uid: this.props.params.uid || '',
            realmType: this.props.params.realmType || '',
            realmModel: null,
            fetching: false
        }
        this.removeSplash = this.removeSplash.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.deleteConfirm = this.deleteConfirm.bind(this);
    }

    removeJwtAndRedirect() {
        if ('localStorage' in window) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
        }
        this.props.router.push('/login');
    }

    addFormValue(formData, key, prop) {
        (prop.type !== 'editor') ? formData.append(key, prop.value) : formData.append(key, draftToHtml(convertToRaw(prop.value.getCurrentContent())));
    }

    buildFormData() {
        let { realmModel: model } = this.state;
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

    getLinkForType(realmType, uid) {
        if (realmType && uid) {
            let segment = (realmType === 'Post') ? 'blog' : 'content';
            return (<Link className="link view-link" to={`/${segment}/${uid}`}>View {realmType} »</Link>);
        }
        return null;
    }

    formSubmit(e) {
        e.preventDefault();
        let data = this.buildFormData();
        if (data) {
            Axios.post('/api/upsert', data, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
                if (res && res.data) {
                    window.scrollTo(0, 0);
                    this.setSplash(`Updated ${this.state.realmType}.`);
                    this.postSave(res.data);
                }
            }).catch(e => {
                this.setSplash(`There was an error updating your ${this.state.realmType}. See console for details.`);
                console.log(e);
            });
        }
    }

    /*
     * Optionally make post-save UI changes here from the returned result object
     */
    postSave(result) {
        switch (this.state.realmType) {
            case 'User':
                if ('localStorage' in window) {
                    localStorage.setItem('user', JSON.stringify(result));
                    this.forceUpdate();
                }
            default:
            break;
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
            let { realmModel } = this.state;
            realmModel[name].value = base64img;
            this.setState({ realmModel });
        }).catch(e => {
            this.setSplash(`There was an error updating your ${this.state.realmType}. See console for details.`);
            console.log(e);
        });
    }

    fileUpload(e) {
        e.preventDefault();
        const { name, files } = e.target;
        var formData = new FormData();
        if (!files[0]) return;
        formData.append('file', files[0]);
        let { realmModel } = this.state;
        realmModel[name].fetching = true;
        this.setState({ realmModel });
        Axios.post('/api/upload', formData, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
            let { realmModel } = this.state;
            let { data: { message } } = res;
            if (message) {
                realmModel[name].value = message;
                realmModel[name].fetching = false;
            } else {
                realmModel[name].error = 'There was an error with the upload.';
                realmModel[name].fetching = false;
            }
            this.setState({ realmModel });
        });
    }

    fileRemove(name, type) {
        if (type === 'file') {
            return () => {
                let { realmModel } = this.state;
                realmModel[name].value = '';
                this.setState({ realmModel });
            }
        }
        return null;
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
            let val = values[key];
            if (val) {
                let modelRow = realmModel[key];
                if (modelRow.type === 'editor' && val) {
                    realmModel[key].value = this.convertToEditor(val);
                } else {
                    realmModel[key].value = val;
                }
            }
        });
        this.setState({ realmModel });
    }

    setModelOptions(realmModel, data) {
        let model = realmModel;
        data.map(item => {
            if (item !== false) {
                Object.keys(item).map(key => {
                    model[key].options = item[key];
                });
            }
        });
        return model;
    }

    getOptionDisplayName(item) {
        let { fieldInfo: { optionName } } = item;
        return optionName || 'name';
    }

    optionalizeResult(item, data) {
        let options = {};
        Object.keys(data).map(k => {
            let kRow = data[k];
            let rowKey = kRow[item.typePrimaryKey];
            options[rowKey] = kRow[this.getOptionDisplayName(item)] || rowKey;
        });
        return options;
    }

    fetchOptionsPromise(key, item) {
        return new Promise((resolve, reject) => {
            Axios.get(`/api/get/${ item.realmType }`).then(res => {
                if (!isEmptyObj(res.data)) {
                    resolve({ [key]: this.optionalizeResult(item, res.data) });
                } else {
                    resolve('hidden');
                }
            });
        });
    }

    fetchAllOptions(realmModel) {
        let optionPromises = Object.keys(realmModel).map(key => {
            if (realmModel[key].realmType !== false) {
                let result = this.fetchOptionsPromise(key, realmModel[key]);
                if (result === 'hidden') {
                    realmModel[key].type = 'hidden';
                    return false;
                } else {
                    return result;
                }
            } else {
                return false;
            }
        });
        Promise.all(optionPromises).then(result => {
            let model = this.setModelOptions(realmModel, result);
            this.setState({ realmModel: model, fetching: false });
        });
    }

    hasRealmTypes(model) {
        let shouldFetch = [];
        Object.keys(model).map(key => {
            if (model[key].realmType !== false) {
                shouldFetch = true;
            }
        });
        return shouldFetch;
    }

    getModel(realmType) {
        let realmModel = getDBModel(realmType);
        if (this.hasRealmTypes(realmModel)) {
            this.setState({ fetching: true });
            this.fetchAllOptions(realmModel);
        } else {
            this.setState({ realmModel });
        }
    }

    getUidData(realmType, uid) {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            Axios.get(`/get/secure/${realmType}/${uid}`, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: { status }} = res;
                if (status !== 'error') {
                    this.setValues(res.data);
                } else {
                    this.getModel(realmType);
                }
            });
        } else {
            this.removeJwtAndRedirect();
        }
    }

    componentDidUpdate(previousProps) {
        let { params: { realmType: currentType, uid: currentUid }, route: { path: currentPath } } = this.props;
        let { params: { realmType: previousType, uid: previousUid }, route: { path: previousPath } } = previousProps;
        if (!currentType || !previousType || !currentPath || !previousPath) return;
        if (previousType !== currentType || currentPath !== previousPath) {
            this.getModel(currentType);
        }
        if (currentUid) {
            if (!previousUid) {
                this.getUidData(currentType, currentUid);
            } else {
                if (currentUid !== previousUid) {
                    this.getUidData(currentType, currentUid);
                }
            }
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

    getChangeFn(name, type) {
        if (type === 'file') {
            if (isImage64(name)) {
                return this.imageChange;
            } else {
                return this.fileUpload;
            }
        }
        if (type === 'editor') return (e) => this.editorStateChange(e, name);
        return this.inputChange;
    }

    getInputInfo(input, key) {
        return (input && input.fieldInfo && input.fieldInfo[key]) ? input.fieldInfo[key] : null;
    }

    getInputFetching(input) {
        return (input.type === 'file' || input.type === 'selectrealm') ? input.fetching : false;
    }

    setValueToPrimaryKey(input) {
        let { value: { [input.typePrimaryKey]: optionValue } } = input;
        return optionValue || null;
    }

    buildInput(prop, idx) {
        let { realmModel } = this.state;
        let input = realmModel[prop];
        if (input.type === 'selectrealm' && input.value) {
            input.value = this.setValueToPrimaryKey(input) || input.value;
        }
        return (
            <InputElement
                key={ idx }
                inputType={ this.getInputInfo(input, 'input') || input.type }
                inputOptions={ input.options || this.getInputInfo(input, 'options') }
                inputLabel={ this.getInputInfo(input, 'label') }
                inputName={ input.name}
                inputValue={ input.value}
                inputToolbar={ this.getInputInfo(input, 'toolbar') }
                inputPlaceholder={ this.getInputInfo(input, 'placeholder') }
                inputChange={ this.getChangeFn(input.name, input.type) }
                inputFetching={ this.getInputFetching(input) }
                inputRemove={ this.fileRemove(input.name, input.type) }
                inputError={ (input.error) ? input.error : null }
                inputDescription={ this.getInputInfo(input, 'description') }
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
                <div className="splash">{splash} <div className="remove-btn" onClick={ this.removeSplash }>x</div></div>
            );
        }
        return null;
    }

    deleteConfirm(e) {
        e.preventDefault();
        let { uid, realmType } = this.state;
        let confirmed = confirm(`Delete ${realmType} ${uid}?`);
        if (confirmed) {
            Axios.post('/api/delete', { uid, realmType }, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
                let { data: { status } } = res;
                if (status && status === 'success') {
                    this.props.router.push(`/create/${realmType}`);
                } else {
                    this.setSplash(`There was an error deleting ${realmType} ${uid}. See console for details.`);
                }
            }).catch(e => {
                this.setSplash(`There was an error deleting your ${realmType} ${uid}. See console for details.`);
                console.log(e);
            });
        }
    }

    getTitle() {
        let { route: { path }, params: { realmType } } = this.props;
        if (path && realmType) {
            return path.split('/')[0] + ' ' + realmType;
        }
        return;
    }

    render() {
        let { realmModel, fetching } = this.state;
        let { params: { realmType } } = this.props;
        if (!realmType || !realmModel || fetching) {
            return (
                <Base name="schema-update">
                    <ReactLoading type="balls" color="#ccc" />
                </Base>
            );
        }
        let { uid } = this.state;
        return (
            <Base name={realmType}>
                <div className="form-wrapper">
                    { this.getSplash() }
                    <h2 className="form-title">{ this.getTitle() }</h2>
                    <form className="post__form" onSubmit={ this.formSubmit } encType="multipart/form-data">
                        { this.getLinkForType(realmType, uid) }
                        { Object.keys(realmModel).map((prop, idx) => this.buildInput(prop, idx)) }
                        <input type="hidden" value={ realmType } />
                        <input type="submit" value="Save" />
                        { (uid) ? (<button onClick={ this.deleteConfirm}>Delete</button>) : null }
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
