'use strict';
import React from 'react';
import ReactLoading from "react-loading";
import Axios from 'axios';
import { isImage, eToStr, markdownToHTML } from '../../../../helpers/helpers.js';
import MdEditor from 'react-markdown-editor-lite';
/**
 * [InputElement Builds individual input elements. Used in /pages/realm-form-wrapper.jsx]
 * @extends React
 */
class InputElement extends React.Component {

    constructor(props) {
        super(props);
        this.wysiwygFileUpload = this.wysiwygFileUpload.bind(this);
    }

    /**
     * [wysiwygFileUpload This handles WYSIWYG image uploads and stores them to the static file directory.]
     * @param  {Object} file [The file object.]
     */
    wysiwygFileUpload(file, callback) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', file);
            Axios.post('/api/upload', formData, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }).then(res => {
                let { message } = res.data;
                if (message) {
                    callback(message);
                    resolve(true);
                } else {
                    throw "No path returned.";
                }
            }).catch(e => {
                reject(eToStr(e));
            });
        }).catch(e => {
            console.log(e);
        });
    }

    getLabel() {
        let label = this.props.inputLabel;
        if (label) {
            return (<legend className="input-label">{ label }</legend>);
        }
        return null;
    }

    getDescription() {
        let description = this.props.inputDescription;
        if (description) {
            return (<div className="description">{ description }</div>);
        }
        return null;
    }

    getError() {
        let error = this.props.inputError;
        if (error) {
            return (<div className="error-msg">{ error }</div>);
        }
        return null;
    }

    getRemoveBtn() {
        let { inputValue } = this.props;
        if (inputValue) {
            let { inputRemove } = this.props;
            return (<button onClick={ inputRemove }>Remove</button>);
        }
        return null;
    }

    getFileType(inputName, inputChange) {
        if (isImage(inputName)) {
            return (<input type="file" accept="image/*" name={ inputName } onChange={ inputChange } />);
        }
        return (<input type="file" accept=".zip,.gz,.pdf,.json" name={ inputName } onChange={ inputChange } />);
    }

    getReactLoading(isFetching) {
        if (isFetching) {
            return (<ReactLoading type="balls" color="#ccc" />);
        }
        return null;
    }

    getFilePreview(inputName, inputValue) {
        if (isImage(inputName)) {
            return (<div className="image-preview"><img src={ inputValue } /></div>);
        }
        return (<div className="clear file-preview"><a className='underline link' href={ inputValue } download>{ inputValue }</a></div>);
    }

    getWrapperClass(inputName) {
        return (inputName) ? inputName + '__wrapper' : '';
    }

    getTypeClass(inputType) {
        return (inputType) ? 'type-' + inputType.toLowerCase() : '';
    }

    getErrorClass() {
        return (this.getError()) ? 'input-error' : '';
    }

    buildOptions(options) {
        return Object.keys(options).map((key, i) => (<option key={ i } value={ key }>{ options[key] }</option>));
    }

    buildSelect(inputType) {
        let { inputName, inputValue, inputChange, inputOptions } = this.props;
        return (
            <select name={ inputName } value={ inputValue } onChange={ inputChange }>
                { this.buildOptions(inputOptions) }
            </select>
        );
    }

    getInputState() {
        let { inputState, inputName, inputType } = this.props;
        if (inputState) {
            return (
                <button onClick={ e => inputState(e, inputName, inputType) }>Debug</button>
            );
        }
        return null;
    }

    /**
     * [render Switches the returned input markup based on the inputType
     * and other optional properties.]
     */
    render() {
        let { inputType, inputName, inputChange, inputValue, inputPlaceholder, inputFetching, inputToolbar, inputOptions } = this.props;
        if (!inputType || !inputName || !inputChange || (inputType === 'select' && !inputOptions)) {
            return null;
        }
        if (inputType === 'hidden') {
            return (
                <input
                    type="hidden"
                    name={ inputName }
                    value={ inputValue }
                />
            );
        }
        if (inputType === 'select' || inputType === 'selectrealm') {
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    { this.buildSelect() }
                    { this.getDescription() }
                    { this.getError() }
                </fieldset>
            );
        }
        if (inputType === 'editor') {
            let options = {
                imageAccept: '.jpg,.jpeg,.png,.tiff'
            }
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <MdEditor
                        value={ inputValue }
                        renderHTML={(text) => markdownToHTML(text) }
                        onChange={ inputChange }
                        onImageUpload={ this.wysiwygFileUpload }
                        config={ options }
                    />
                    { this.getDescription() }
                    { this.getError() }
                    { this.getInputState() }
                </fieldset>
            );
        }
        if (inputType === 'checkbox') {
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <input
                        type="checkbox"
                        name={ inputName }
                        checked={ inputValue }
                        onChange={ inputChange }
                    />
                    { this.getDescription() }
                    { this.getError() }
                </fieldset>
            );
        }
        if (inputType === 'file') {
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <div className="file-upload">
                        { this.getFileType(inputName, inputChange) }
                    </div>
                    { this.getReactLoading(inputFetching) }
                    { this.getFilePreview(inputName, inputValue) }
                    { this.getDescription() }
                    { this.getError() }
                    { this.getRemoveBtn() }
                </fieldset>
            );
        }
        if (inputType === 'text') {
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <input
                        type={ inputType }
                        name={ inputName }
                        value={ inputValue }
                        placeholder={ (inputPlaceholder) ? inputPlaceholder : inputName }
                        onChange={ inputChange }
                    />
                    { this.getDescription() }
                    { this.getError() }
                </fieldset>
            );
        }
        if (inputType === 'date') {
            let formattedDate = (inputValue.indexOf('T') !== -1) ? inputValue.split('T')[0] : inputValue;
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <input
                        type={ inputType }
                        name={ inputName }
                        value={ formattedDate }
                        onChange={ inputChange }
                    />
                    { this.getDescription() }
                    { this.getError() }
                </fieldset>
            );
        }
        if (inputType === 'textarea') {
            return (
                <fieldset className={`input__wrapper ${this.getWrapperClass(inputName)} ${this.getTypeClass(inputType)} ${this.getErrorClass()}`}>
                    { this.getLabel() }
                    <textarea
                        className="textarea"
                        name={ inputName }
                        placeholder={ (inputPlaceholder) ? inputPlaceholder : null }
                        value={ inputValue }
                        onChange={ inputChange }>
                        ></textarea>
                    { this.getDescription() }
                    { this.getError() }
                </fieldset>
            );
        }
        return null;
    }
}

export default InputElement;
