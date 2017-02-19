'use strict';

import React from 'react';

class BulletIcon extends React.Component {
    render() {
        return (
            <svg width={this.props.width} height={this.props.height} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.5" cy="11.5" r="4.5" transform="translate(0 -7)" fill="#000" fillRule="evenodd"/>
            </svg>
        );
    }
}

export default BulletIcon
