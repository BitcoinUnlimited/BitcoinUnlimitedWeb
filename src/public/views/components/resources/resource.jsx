'use strict';

import React from 'react';

class Resource extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='py1'>
                <div className='inline-block align-top'>
                    { this.props.title }
                </div>
                <div className='italic lh-copy py1'>
                    { this.props.body }
                </div>
            </li>
        )
    }
}

export default Resource
