'use strict';

import React from 'react';
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
            splash: 'Default splash',
            uid: this.props.uid || '',
            realmType: this.props.realmType || '',
            realmModel: null
        }
        this.removeSplash = this.removeSplash.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
    }

    addFormValue(formData, key, prop) {
        (prop.type !== 'editor') ? formData.append(key, prop.value) : formData.append(key, draftToHtml(convertToRaw(prop.value.getCurrentContent())));
    }

    buildFormData() {
        let model = this.state.realmModel;
        let formData = new FormData();
        formData.append('realmType', this.props.realmType);
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
                console.log(res);
                if (res && res.data && !isEmptyObj(res.data)) {
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
            if (res.data && res.data[0]) {
                this.setValues(res.data[0]);
            }
        });
    }

    componentDidUpdate(previousProps) {
        let { realmType, uid } = this.props;
        if (previousProps.realmType && previousProps.realmType !== realmType) {
            this.getModel(realmType);
        }
        if (isDef(previousProps.uid) && isDef(uid) && previousProps.uid !== uid) {
            this.getUidData(realmType, uid);
        }
    }

    componentDidMount() {
        let { realmType, uid } = this.props;
        if (isDef(realmType)) {
            this.getModel(realmType);
        }
        if (isDef(uid)) {
            this.getUidData(realmType, uid);
        }
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
        if (splash.length > 0) {
            return (
                <div className="splash">{splash} <div className="remove-btn" onClick={this.removeSplash}>close</div></div>
            );
        }
        return null;
    }

    render() {
        let { realmType, uid } = this.props;
        let { realmModel } = this.state;
        if (!realmModel) {
            return (
                <Base name="schema-update">
                    <ReactLoading type="balls" color="#ccc" />
                </Base>
            );
        }
        return (
            <Base name="schema-update">
                <div className="form-wrapper">
                    {this.getSplash()}
                    <h2 className="form-title">Update { realmType }</h2>
                    <form className="post__form" onSubmit={ this.formSubmit } encType="multipart/form-data">
                        {Object.keys(realmModel).map((prop, idx) => this.buildInput(prop, idx))}
                        <input type="hidden" value={realmType} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </Base>
        );
    }
}

export default withRouter(RealmFormWrapper);
