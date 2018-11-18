'use strict';

import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { strings } from '../../../lib/i18n';
import Post from '../../post.jsx'
import { formatDate } from '../../../../helpers/helpers.js';

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
        if (uid !== previousUid) this.getPost(uid);
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
        this.setState({ fetching: true, post: null, uid: uid });
        Axios.get(`/api/get/Post/${uid}`).then(res => {
            let { data: { uid, published } } = res;
            if (!uid) this.redirectToBlog();
            this.setState({ post: res.data, fetching: false });
        }).catch(e => {
            console.log(e);
            this.redirectToBlog();
        });
    }

    displayTitle(title) {
        return (title) ? (<div className="title h1 mt4">{ title }</div>) : null;
    }

    displayCreated(date) {
        return (date) ? (<div className="date my1">{ formatDate(new Date(date)) }</div>) : null;
    }

    displayAuthor(author) {
        return (author && author.displayname) ? (<div className="author mb1 italics">By { author.displayname }</div>) : null;
    }

    displaySubtitle(subtitle) {
        return (subtitle) ? (<div className="subtitle h3 mt2 mb3">{ subtitle }</div>) : null;
    }

    render() {
        let { post, fetching, uid } = this.state;
        if (!post || !uid || fetching) {
            return (
                <Post name="blog">
                    <div className="react-loading">
                        <ReactLoading type="balls" color="#ccc" />
                    </div>
                </Post>
            );
        }
        console.log(post);
        let { header_img, title, subtitle, created, author } = post;
        return (
            <Post name="blog" banner={ header_img }>
                {this.displayTitle(title)}
                {this.displayAuthor(author)}
                {this.displayCreated(created)}
                {this.displaySubtitle(subtitle)}
                {/* HTML stored in the database is created in the secure auth area and is presumed to be safe */}
                <div className="body-content" dangerouslySetInnerHTML={{ __html: post.body_editor }}>
                </div>
                <Link className="link underline" to={`/update/Post/${uid}`}>Temp Edit Link</Link>
            </Post>
        );
    }
}

export default withRouter(BlogPost);

BlogPost.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}
