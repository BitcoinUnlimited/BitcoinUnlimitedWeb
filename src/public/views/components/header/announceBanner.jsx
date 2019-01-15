'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';
import { getLocalstorageKey, setLocalstorageKey } from '../../../../helpers/helpers.js';

class AnnounceBanner extends React.Component {
    constructor(props) {
        super(props);
        this.removeModal = this.removeModal.bind(this);
        this.state = {
            close: false,
            hide: false
        }
    }

    removeModal() {
        this.setState({ close: true });
        setTimeout(_ => {
            this.setState({ hide: true });
            setLocalstorageKey('announce','close');
        }, 150);
    }

    render() {
        let { close, hide } = this.state;
        let isClosed = getLocalstorageKey('announce') || false;
        if (!this.props.message || hide || isClosed) {
            return null;
        } else {
            return (
                <div className={ `alert__banner center absolute ${(close) ? 'close' : ''}` }>
                    <div className="relative p3">
                        <div className='section__container center'>
                            <div className='inline bold underline m1'>Announcement:</div>
                            { this.props.message }
                        </div>
                        <div className="alert-close" onClick={ this.removeModal }>X</div>
                    </div>
                </div>
            )
        }
    }
}

export default AnnounceBanner
