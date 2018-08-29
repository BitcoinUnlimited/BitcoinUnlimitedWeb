'use strict';

import React from 'react';
import Axios from 'axios';
import Post from './post.jsx';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { postList: undefined }
    }

    buildPostList(posts) {
        return <ul> { Object.keys(posts).map((key, i) => {
            return <Post key={i.toString()} title={posts[key].title} subtitle={posts[key].subtitle} />;
        })} </ul>;
    }

    componentDidMount() {
        // get posts
        setTimeout(() => {
            let newItems = {
                "0":{title:'title one', subtitle: 'subtitle one'},
                "1":{title:'title two', subtitle: 'subtitle two'},
                "2":{title:'title three', subtitle: 'subtitle three'}
            };
            let postList = this.buildPostList(newItems);
            this.setState({ postList: postList });
        }, 2000);
    }

    render() {
        return (
            <div>
                <div>sidebar</div>
                { this.state.postList }
            </div>
        );
    }
}

export default Posts;
