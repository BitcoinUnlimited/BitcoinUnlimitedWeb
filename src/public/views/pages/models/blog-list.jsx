'use strict';

import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema, isEmptyArr, isEmptyObj, formatDate } from '../../../../helpers/helpers.js';

import { strings } from '../../../lib/i18n';
import Page from '../../page.jsx'

class BlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schema: null,
            fetching: false,
            blogList: {},
        }
    }

    getBlogList() {
        this.setState({ fetching: true, blogList: {} });
        Axios.get('/api/get/Post').then(res => {
            let { data: blogList } = res;
            console.log(blogList);
            if (blogList && !blogList.status) {
                this.setState({ fetching: false, blogList });
            } else if (blogList && blogList.status) {
                console.log(`Status: ${blogList.status}`);
                this.setState({ fetching: false });
            }
        }).catch(e => {
            this.setState({ fetching: false, blogList: {} });
            console.log(e);
        });
    }

    buildBlogList() {
        let { blogList } = this.state;
        let results = Object.keys(blogList).map((key, idx) => {
            let post = blogList[key];
            console.log(post);
            return (
                <Link className="blog-row" key={idx} to={`/blog/${post.uid}`}>
                    <div className="hover-bg-gradient"></div>
                    <h4 className="title">{ post.title }</h4>
                    <div className="date">{ formatDate(new Date(post.created)) }</div>
                    <div className="subtitle">{ post.subtitle }</div>
                </Link>
            );
        });
        return (<div className="blog-group">{results}</div>);
    }

    componentDidMount() {
        let schema = getSchema('Post');
        this.setState({ schema });
        this.getBlogList();
    }

    render() {
        let { schema, fetching, blogList } = this.state;
        if (!schema || fetching) {
            return (
                <Page name="bloglist" title="The Bitcoin Unlimited Blog" >
                    <ReactLoading type="balls" color="#ccc" />
                </Page>
            );
        } else if (isEmptyObj(blogList)) {
            return (
                <Page name="bloglist" title="The Bitcoin Unlimited Blog" >
                    <div>Coming soon!</div>
                </Page>
            );
        }
        return (
            <Page name="bloglist" title="The Bitcoin Unlimited Blog" >
                {this.buildBlogList()}
            </Page>
        );
    }
}

export default BlogList
