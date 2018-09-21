'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        // store the post
    }
    // a list of blogs
    componentDidMount() {
        // get the post
    }
    render() {
        // display loading and once the post uid loads display the post
        return (
            <Page name="blog" title="" subtitle="the blog" >
            </Page>
        );
    }
}

export default BlogPost
