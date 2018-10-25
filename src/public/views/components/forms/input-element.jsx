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
                        type={inputType}
                        name={inputName}
                        value={inputValue}
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
                    <img src={inputValue} />
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
        return null;
    }
}

export default InputElement;
