'use strict';

import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div className='section section-breadcrumbs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});