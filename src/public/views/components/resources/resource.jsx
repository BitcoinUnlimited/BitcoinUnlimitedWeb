'use strict';

import React from 'react';

import {Link} from 'react-router';

export default React.createClass({

    render: function () {
        let html = typeof this.props.html === 'undefined' ? false : (<Link to={this.props.html}>[HTML]</Link>);
        let pdf = typeof this.props.pdf === 'undefined' ? false : (<a href={this.props.pdf}>[PDF]</a>);
        return (
            <li>
                {this.props.title} {html} {pdf}
            </li>
        );
    }

});