'use strict';

import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

class InputElement extends React.Component {
    getLabel() {
        let label = this.props.inputLabel;
        if (label) {
            return (<label className="input-label">{label}</label>);
        }
        return null;
    }
    getDescription() {
        let description = this.props.inputDescription;
        if (description) {
            return (<div className="description">{description}</div>);
        }
        return null;
    }
    getError() {
        let error = this.props.inputError;
        if (error) {
            return (<div className="error-msg">{error}</div>);
        }
        return null;
    }
    getRemoveBtn() {
        let { inputValue } = this.props;
        if (inputValue) {
            let { inputRemove } = this.props;
            return (<button onClick={inputRemove}>Remove</button>);
        }
        return null;
    }
    // getModules() {
    //     return {
    //         toolbar: [
    //             [{ 'color': [] }, { 'background': [] }],
    //             ['bold', 'italic', 'underline','strike', 'blockquote'],
    //             [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //             ['link', 'image', 'video'],
    //             ['clean']
    //         ]
    //     }
    // }
    // getFormats() {
    //     return [
    //         'color', 'background',
    //         'bold', 'italic', 'underline', 'strike', 'blockquote',
    //         'list', 'bullet', 'indent',
    //         'link', 'image', 'video',
    //         'clean'
    //     ];
    // }
    render() {
        let { inputType, inputName, inputChange, inputValue } = this.props;
        if (!inputType || !inputName || !inputChange) {
            return null;
        }
        if (inputType === 'hidden' || inputType === 'primaryKey') {
            return (
                <input
                    type="hidden"
                    name={inputName}
                    value={inputValue}
                />
            );
        }
        if (inputType === 'editor') {
            return (
                <div className={`input__wrapper ${(inputName) ? inputName + '__wrapper' : ''} ${(this.getError()) ? 'input-error' : ''}`}>
                    {this.getLabel()}
                    <Editor
                        editorState={inputValue}
                        onEditorStateChange={inputChange}
                    />
                    {this.getDescription()}
                    {this.getError()}
                </div>
            );
        }
        if (inputType === 'checkbox') {
            return (
                <div className={`input__wrapper ${(inputName) ? inputName + '__wrapper' : ''} ${(this.getError()) ? 'input-error' : ''}`}>
                    {this.getLabel()}
                    <input
                        type="checkbox"
                        name={inputName}
                        checked={inputValue}
                        onChange={inputChange}
                    />
                    {this.getDescription()}
                    {this.getError()}
                </div>
            );
        }
        if (inputType === 'file') {
            return (
                <div className={`input__wrapper ${(inputName) ? inputName + '__wrapper' : ''} ${(this.getError()) ? 'input-error' : ''}`}>
                    {this.getLabel()}
                    <div className="file-upload">
                        <input type={inputType} name={inputName} onChange={inputChange} />
                    </div>
                    {this.getDescription()}
                    {this.getError()}
                    <div className="preview"><img src={inputValue} /></div>
                    {this.getRemoveBtn()}
                </div>
            );
        }
        if (inputType === 'text') {
            return (
                <div className={`input__wrapper ${(inputName) ? inputName + '__wrapper' : ''} ${(this.getError()) ? 'input-error' : ''}`}>
                    {this.getLabel()}
                    <input
                        type={inputType}
                        name={inputName}
                        value={inputValue}
                        placeholder={inputName}
                        onChange={inputChange}
                    />
                    {this.getDescription()}
                    {this.getError()}
                </div>
            );
        }
        if (inputType === 'date') {
            let formattedDate = (inputValue.indexOf('T') !== -1) ? inputValue.split('T')[0] : '';
            return (
                <div className={`input__wrapper ${(inputName) ? inputName + '__wrapper' : ''} ${(this.getError()) ? 'input-error' : ''}`}>
                    {this.getLabel()}
                    <input
                        type={inputType}
                        name={inputName}
                        value={formattedDate}
                        onChange={inputChange}
                    />
                    {this.getDescription()}
                    {this.getError()}
                </div>
            );
        }
        return null;
    }
}

export default InputElement;
