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
                    <p>64-bit: Version: 0.12.0, Feb 24, 2015: <a href='/downloads/bitcoinUnlimited-0.12.0-win64-setup.exe'> bitcoinUnlimited-0.12.0-win64-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.0-win64.zip'> (zip)</a></p>
                    <p>32-bit: Version: 0.12.0, Feb 24, 2015: <a href='/downloads/bitcoinUnlimited-0.12.0-win32-setup.exe'> bitcoinUnlimited-0.12.0-win32-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.0-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>Linux</h4>
                    <p>64-bit: Version: 0.12.0, Feb 24, 2015:<a href='/downloads/bitcoinUnlimited-0.12.0-linux64.tar.gz'> bitcoinUnlimited-0.12.0-linux64.tar.gz</a></p>
                    <p>32-bit: Version: 0.12.0, Feb 24, 2015: <a href='/downloads/bitcoinUnlimited-0.12.0-linux32.tar.gz'> bitcoinUnlimited-0.12.0-linux32.tar.gz</a></p>
                    <br />
                    <h4>Source Code</h4>
                    <p>Github branch 0.12bu <a href='https://github.com/gandrewstone/BitcoinUnlimited'>here</a>.</p>
                </div>
            </div>
        );
    }

});
