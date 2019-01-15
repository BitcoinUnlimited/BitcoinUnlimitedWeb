'use strict';

import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema, isEmptyArr, isEmptyObj, formatDate } from '../../../../helpers/helpers.js';

class AdminBlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schema: null,
            fetching: false,
            blogList: {},
            refreshKey: this.props.refreshKey
        }
    }

    getAdminBlogList(key) {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ fetching: true, blogList: {}, refreshKey: key });
            Axios.get('/get/secure/Post', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: blogList } = res;
                if (blogList) {
                    this.setState({ fetching: false, blogList });
                }
            }).catch(e => {
                this.setState({ fetching: false, blogList: {} });
                console.log(e);
            });
        }
    }

    getAuthorDisplay(post) {
        if (post && post.author && post.author.displayname) {
            return (<div className="author">By { post.author.displayname }</div>);
        }
        return null;
    }

    buildBlogList() {
        let { blogList } = this.state;
        let results = Object.keys(blogList).map((key, idx) => {
            let post = blogList[key];
            return (
                <div className="blog-row" key={ idx }>
                    <h4 className="title">
                        <Link to={ `/blog/${post.uid}` }>{ post.title }</Link>
                    </h4>
                    <div className="date">{ formatDate(new Date(post.created)) }</div>
                    { this.getAuthorDisplay(post) }
                    <div className="subtitle">{ post.subtitle }</div>
                    <Link className="link edit-link" to={ `/update/Post/${post.uid}` }>Edit »</Link>
                </div>
            );
        });
        return (<div className="blog-group">{results}</div>);
    }

    componentWillReceiveProps(nextProps) {
        let { refreshKey } = this.props;
        let { refreshKey: nextKey } = nextProps;
        if (refreshKey && nextKey && refreshKey !== nextKey) {
            this.getAdminBlogList(refreshKey);
        }
    }

    componentDidMount() {
        let { refreshKey } = this.props;
        let schema = getSchema('Post');
        this.setState({ schema });
        this.getAdminBlogList(refreshKey);
    }

    render() {
        let { schema, fetching, blogList } = this.state;
        if (!schema || fetching) {
            return (
                <div className="blog-list">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            );
        } else if (isEmptyObj(blogList)) {
            return (
                <div className="blog-list">
                    <h2>Blog List</h2>
                    <div>There are no blog posts yet.</div>
                </div>
            );
        }
        return (
            <div className="blog-list">
                <h2>Blog List</h2>
                { this.buildBlogList() }
            </div>
        );
    }
}

export default AdminBlogList;
