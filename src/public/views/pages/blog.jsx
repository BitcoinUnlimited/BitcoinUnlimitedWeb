'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    // a list of blogs
    render() {
        return (
            <Page name="blog" title="blog" subtitle="the blog" >
            show all blog posts, make it look good
            </Page>
        );
    }
}

export default Blog
