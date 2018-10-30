'use strict';

import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <li>
                <div className="title">{ this.props.title }</div>
                <div className="subtitle">{ this.props.subtitle }</div>
            </li>
        );
    }
}

export default Post;
