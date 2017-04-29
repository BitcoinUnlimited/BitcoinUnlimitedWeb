'use strict';

import React from 'react';

class UserIcon extends React.Component {
    render() {
        return (
            <svg width={this.props.width} height={this.props.height} viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0c-9.365 0-17 7.635-17 17s7.635 17 17 17 17-7.635 17-17S41.365 0 32 0zm0 4c7.203 0 13 5.797 13 13s-5.797 13-13 13-13-5.797-13-13S24.797 4 32 4zm0 34c-8.678 0-16.535 2.344-22.344 6.25C3.846 48.156 0 53.76 0 60v18c0 1.047.953 2 2 2h60c1.047 0 2-.953 2-2V60c0-6.24-3.847-11.844-9.656-15.75C48.534 40.344 40.678 38 32 38zm0 4c7.942 0 15.09 2.208 20.125 5.594C57.16 50.98 60 55.406 60 60v16H4V60c0-4.594 2.84-9.02 7.875-12.406C16.91 44.208 24.058 42 32 42z" fillRule="nonzero" fill="#000"/>
            </svg>
        );
    }
}

export default UserIcon
