'use strict';

import React from 'react';

class ImageWithLabel extends React.Component {
    render() {
        return (
            <div className='py3'>
                <img className='post__image' src={this.props.src} alt={this.props.alt}></img>
                <div className='center p2'>
                    <div className='post__image-label inline-block left-align gray'>{this.props.label}</div>
                </div>
            </div>
        )
    }
}

export default ImageWithLabel
