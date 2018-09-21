'use strict';

import React from 'react';

class InputElement extends React.Component {
    getDescription(description) {
        if (description) {
            return (<div className="description">{description}</div>);
        }
        return null;
    }
    getError(error) {
        if (error) {
            return (<div className="error-msg">{error}</div>);
        }
        return null;
    }
    render() {
        let { inputType, inputName, inputChange, inputValue, inputDescription, inputError } = this.props;
        if (!inputType || !inputName || !inputChange) {
            return null;
        }
        if (inputType === 'hidden') {
            return (
                <input
                    type={inputType}
                    name={inputName}
                    value={inputValue}
                />
            );
        }
        return (
            <label className={`form__label ${inputName}__label ${inputError ? 'input-error' : ''}`}>
                <input
                    type={inputType}
                    name={inputName}
                    value={inputValue}
                    placeholder={inputName}
                    onChange={inputChange}
                />
                {this.getDescription(inputDescription)}
                {this.getError(inputError)}
            </label>
        );
    }
}

export default InputElement;
