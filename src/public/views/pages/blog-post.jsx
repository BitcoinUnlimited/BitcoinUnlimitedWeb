'use strict';

import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }
    // a list of blogs
    componentDidMount() {
        console.log(this.props);
        // let { realmType, uid } = this.props.params;
        // console.log('realmType: ' +realmType);
        // console.log('uid: '+ uid);
        // if (uid) {
        //     Axios.get('/api/get/' + realmType + '/' + uid).then(res => {
        //         console.log(res);
        //         // if (res.data && res.data[0]) {
        //         //     this.setState({ post: res.data[0] });
        //         // }
        //     });
        // }
    }
    render() {
        let { post } = this.state;
        if (!post) {
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
                <div className="body-content"> body area here</div>
            </Page>
        );
    }
}

export default BlogPost
