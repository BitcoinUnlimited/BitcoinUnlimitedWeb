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
        // Fetches all blog posts to be displayed
        Axios.get('/api/get/Post').then(res => {
            let { data: blogList } = res;
            if (blogList && !blogList.status) {
                this.setState({ fetching: false, blogList });
            } else if (blogList && blogList.status) {
                this.setState({ fetching: false });
            }
        }).catch(e => {
            this.setState({ fetching: false, blogList: {} });
            console.log(e);
        });
    }

    getAuthorDisplay(post) {
        if (post && post.author) {
            return (<div className="author">{ post.author }</div>);
        }
        return null;
    }

    shouldShowThumbnails(blogList) {
        let results = Object.keys(blogList).filter(key => {
            let post = blogList[key];
            return !post.thumbnail_img;
        });
        return results.length === 0;
    }

    getThumbnailDisplay(show, post) {
        if (show) {
            return (<div className="thumbnail-container"><img className="thumbnail" src={ post.thumbnail_img } /></div>);
        }
        return null;
    }

    buildBlogList() {
        let { blogList } = this.state;
        let results = Object.keys(blogList).map((key, idx) => {
            let post = blogList[key];
            return (
                <Link className="blog-row" key={idx} to={`/blog/${post.uid}`}>
                    <div className="hover-bg-gradient"></div>
                    <h4 className="title">{ post.title }</h4>
                    <div className="date">{ formatDate(new Date(post.created)) }</div>
                    { this.getAuthorDisplay(post) }
                    <div className="subtitle">{ post.subtitle }</div>
                </Link>
            );
        });
        return (<div className="blog-group">{ results }</div>);
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
                { this.buildBlogList() }
            </Page>
        );
    }
}

export default BlogList
