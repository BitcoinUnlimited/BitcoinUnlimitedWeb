'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import jwt from 'jsonwebtoken';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Page name="blog" title="blog" subtitle="the blog" >
            </Page>
        );
    }
}

export default Blog
