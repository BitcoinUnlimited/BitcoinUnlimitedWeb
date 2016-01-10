'use strict';

import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                    </div>
                </div>
                <div className='col-sm-8'>
                    <h2 className='red'>Experimental Releases </h2>
                    <h3>Binary Downloads</h3>
                    <br />
                    <h4>Windows</h4>
                    <p>Nothing right now</p>
                    <br />
                    <h4>Linux</h4>
                    <p>Nothing right now</p>
                    <br />
                    <h4>Source Code</h4>
                    <p>Github <a href='https://github.com/gandrewstone/BitcoinUnlimited'> here</a>.</p>
                </div>
            </div>
        );
    }

});