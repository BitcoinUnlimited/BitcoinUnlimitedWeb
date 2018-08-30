'use strict';

import React from 'react';
import Axios from 'axios';
import Post from './post.jsx';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '', postList: undefined }
    }

    buildPostList(posts) {
        let postList = Object.keys(posts).map((key, i) => {
            return <Post key={i.toString()} title={posts[key].title} subtitle={posts[key].subtitle} />;
        });
        if (postList) {
            return <ul>{ postList }</ul>;
        }
        return undefined;
    }

    displayPosts(posts) {
        console.log(posts);
    }

    componentDidMount() {
        // make call for all posts
        // Axios.post('/realm', {
        //     type: 'Post'
        // }).then(response => {
        //     if (response.data && !(response.data.status && response.data.status == 'error')) {
        //         console.log(response.data);
        //     } else {
        //         //this.setState({ error: response.data.status });
        //     }
        // }).catch(error => {
        //     console.log(error);
        //     //this.setState({ error: error });
        // });

        // get posts
        // setTimeout(() => {
        //     let newItems = {
        //         "0":{title:'title one', subtitle: 'subtitle one'},
        //         "1":{title:'title two', subtitle: 'subtitle two'},
        //         "2":{title:'title three', subtitle: 'subtitle three'}
        //     };
        //     let postList = this.buildPostList(newItems);
        //     this.setState({ postList: postList });
        // }, 2000);
    }

    render() {
        return (
            <div>
                { (this.state.error) ? <div className="error">{this.state.error}</div> : '' }
                <div>sidebar</div>
                { this.state.postList }
            </div>
        );
    }
}

export default Posts;
