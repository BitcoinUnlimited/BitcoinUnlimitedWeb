'use strict';

import React from 'react';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, setLocalstorageKey, isStr, markdownToHTML } from '../../../../helpers/helpers.js';
var sanitizeHtml = require('sanitize-html');

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.removeModal = this.removeModal.bind(this);
        this.state = {
            close: false,
            hide: false,
            fetching: false,
            type: this.props.type || 'Announcement:',
            message: this.props.message || null
        }
    }

    removeModal() {
        this.setState({ close: true });
        setTimeout(_ => {
            this.setState({ hide: true });
            setLocalstorageKey('banner-state','close');
        }, 150);
    }

    getTypeString(type) {
        if (type === 'alert') {
            return 'ALERT:';
        } else if (type === 'security') {
            return 'Security alert:';
        }
        return 'Announcement:';
    }

    getAlertMarkup(message) {
        if (message) {
            let markup = markdownToHTML(message);
            if (markup) {
                return(<span className="message-text" dangerouslySetInnerHTML={ { __html: sanitizeHtml(markup) } }></span>);
            }
        }
        return null;
    }

    getMessage() {
        let { message } = this.state;
        if (message === null) {
            this.setState({ fetching: true });
        }
        Axios.get('/api/get/Alert').then(res => {
            let { "0": alert } = res.data;
            if (alert) {
                let markup = this.getAlertMarkup(alert.message_editor);
                this.setState({ fetching: false, type: this.getTypeString(alert.alert_type), message: markup });
            }
            this.setState({ fetching: false });
        }).catch(e => {
            this.setState({ fetching: false });
            console.log(e);
        });
    }

    componentDidMount() {
        this.getMessage();
    }

    render() {
        let { close, hide, fetching, type, message } = this.state;
        let isClosed = getLocalstorageKey('banner-state') || false;
        if (fetching) {
            <div className={ `alert__banner center ${(close) ? 'close' : ''}` }>
                <div className="relative p3">
                    <div className='section__container center'>
                        <ReactLoading type="balls" color="#ccc" />
                    </div>
                    <div className="alert-close" onClick={ this.removeModal }>X</div>
                </div>
            </div>
        } else if (hide || isClosed || message === null) {
            return null;
        }
        return (
            <div className={ `alert__banner center ${(close) ? 'close' : ''}` }>
                <div className="relative p3">
                    <div className='section__container center'>
                        <div className='inline bold underline m1'>{ type }</div>
                        { message }
                    </div>
                    <div className="alert-close" onClick={ this.removeModal }>X</div>
                </div>
            </div>
        )
    }
}

export default Banner
