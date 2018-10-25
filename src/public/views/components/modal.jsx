'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            title: '',
            message: '',
            actions: null
        }
        this.close = this.close.bind(this);
    }

    // render buttons actions: [{title, fn}, {title, fn}, {title, fn}];
    close() {
        // set states to null
    }

    render() {

        return (
            <div className='modal'>
                <div className='message'>{this.props.title}</div>
                <div className='message'>{this.props.message}</div>
                <button>Confirm</button>
                <div onClick={this.close}>close</div>
            </div>
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    actions: PropTypes.array
};

export default Modal
//
// .modal-dialog {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     -moz-transform: translate(-50%, -50%);
//     -webkit-transform: translate(-50%, -50%);
//     -o-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
// }
