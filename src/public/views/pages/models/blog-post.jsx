'use strict';

import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { strings } from '../../../lib/i18n';
import Page from '../../page.jsx'


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            uid: null,
            post: null
        }
    }

    redirectToBlog() {
        this.props.router.push('/blog');
    }

    componentDidUpdate(previousProps) {
        let { params: { uid } } = this.props;
        let { params: { uid: previousUid } } = previousProps;
        if (!uid) this.redirectToBlog();
        if (uid !== previousUid) {
            this.getPost(uid);
        }
    }

    componentDidMount() {
        let { params: { uid } } = this.props;
        if (uid) {
            this.getPost(uid);
        } else {
            this.redirectToBlog();
        }
    }

    getPost(uid) {
        this.setState({ fetching: true, post: null, uid });
        Axios.get(`/api/get/Post/${uid}`).then(res => {
            let { data: { uid } } = res;
            if (uid) {
                this.setState({ post: res.data, fetching: false });
            } else {
                this.redirectToBlog();
            }
        }).catch(e => {
            console.log(e);
            this.redirectToBlog();
        });
    }

    render() {
        let { post, fetching } = this.state;
        if (!post || fetching) {
            return (
                <Page>
                    <div className="react-loading">
                        <ReactLoading type="balls" color="#ccc" />
                    </div>
                </Page>
            );
        }
        return (
            <Page name="blog" title={post.title} subtitle={post.subtitle} >
                {/* HTML stored in the database is created in the secure auth area and is presumed to be safe */}
                <div className="body-content" dangerouslySetInnerHTML={{ __html: post.body_editor}}>
                </div>
            </Page>
        );
    }
}

export default withRouter(BlogPost);

BlogPost.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}
