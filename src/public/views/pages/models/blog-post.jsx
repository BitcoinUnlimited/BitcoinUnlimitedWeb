'use strict';

import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { strings } from '../../../lib/i18n';
import Post from '../../post.jsx'
import { formatDate, getLocalstorageKey, buildDraftJSMarkup } from '../../../../helpers/helpers.js';

/**
 * [BlogPost This is the main component for displaying blog posts.]
 * @extends React
 */
class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.goTop = this.goTop.bind(this);
        this.state = {
            fetching: false,
            uid: null,
            post: null
        }
    }

    displayBody(body_editor) {
        if (body_editor) {
            let markup = buildDraftJSMarkup(body_editor);
            if (markup) {
                /* HTML stored in the database is created in the secure auth area and is presumed to be safe */
                return (<div className="body-content" dangerouslySetInnerHTML={ { __html: markup } }></div>);
            }
        }
        return null;
    }

    goTop() {
        window.scrollTo(0, 0);
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
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.getSecurePost(uid, jwt);
        } else {
            this.getPublicPost(uid);
        }
    }

    getSecurePost(uid, jwt) {
        if (jwt) {
            this.setState({ fetching: true, post: null, uid: uid });
            Axios.get(`/get/secure/Post/${uid}`, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: { uid, published } } = res;
                if (!uid) this.props.router.push('/login');
                this.setState({ post: res.data, fetching: false });
            }).catch(e => {
                console.log(e);
                this.props.router.push('/login');
            });
        } else {
            this.props.router.push('/login');
        }
    }

    getPublicPost(uid) {
        this.setState({ fetching: true, post: null, uid: uid });
        Axios.get(`/api/get/Post/${uid}`).then(res => {
            let { data: { uid, published } } = res;
            if (!uid) this.redirectToBlog();
            this.setState({ post: res.data, fetching: false });
        }).catch(e => {
            this.redirectToBlog();
        });
    }

    displayVideo(video_embed) {
        if (video_embed) {
            let markup = buildDraftJSMarkup(video_embed);
            if (markup) {
                /* HTML stored in the database is created in the secure auth area and is presumed to be safe */
                return (<div className="video-embed" dangerouslySetInnerHTML={ { __html: markup } }></div>);
            }
        }
        return null;
    }

    displayTitle(title) {
        return (title) ? (<div className="title h1 mt4">{ title }</div>) : null;
    }

    displayCreated(date) {
        return (date) ? (<div className="date my1">{ formatDate(new Date(date)) }</div>) : null;
    }

    showAuthorName(name) {
        return (name) ? `By ${ name }` : '';
    }

    showAuthorTitle(name, org_title) {
        return (name && org_title) ? `, ${ org_title }` : '';
    }

    showAuthorIcon(image_data) {
        return (image_data) ? (<div className="author-icon"><img src={ image_data } /></div>) : null;
    }

    displayAuthor(author) {
        if (author) {
            let { displayname, org_title, icon_img_64 } = author;
            return (
                <div className="author">
                    { this.showAuthorIcon(icon_img_64) }
                    <span>{ this.showAuthorName(displayname) }{ this.showAuthorTitle(displayname, org_title) }</span>
                </div>
            );
        }
        return null;
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
        let { body_editor, header_img, caption_editor, title, video_data, subtitle, created, author } = post;
        return (
            <Post name="blog" banner={ header_img } caption={ caption_editor }>
                { this.displayVideo(video_data) }
                { this.displayTitle(title) }
                { this.displayAuthor(author) }
                { this.displayCreated(created) }
                { this.displaySubtitle(subtitle) }
                { this.displayBody(body_editor) }
                <Link className="link underline" to="/blog" onClick={ this.goTop }>« Back to Blog</Link>
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
