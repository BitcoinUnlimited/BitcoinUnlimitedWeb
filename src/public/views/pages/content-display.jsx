'use strict';

import React from 'react';
import { withRouter, Link } from 'react-router';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

class ContentDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }

    redirectNotFound() {
        this.props.router.push('/not-found');
    }

    componentDidMount() {

    }

    render() {
        let { realmType, uid } = this.props.params;
        let content = this.state.content;
        if (!content) {
            return (
                <Page>
                    <div className="react-loading">
                        <ReactLoading type="balls" color="#ccc" />
                    </div>
                </Page>
            );
        }
        return (
            <Page name="blog" title={content.title} subtitle={content.subtitle} >
                <div className="body-content"> body area here</div>
            </Page>
        );
    }
}

export default withRouter(ContentDisplay)
