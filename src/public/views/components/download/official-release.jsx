'use strict';

import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                        <img src='img/fingerprint.svg' alt='Fingerprint' />
                    </div>
                </div>
                <div className='col-sm-8'>
                    <p>The Bitcoin Unlimited project maintains an enhanced version of the Bitcoin Core "Satoshi" client.
                        We are currently supporting the 0.12.1 release and have older releases on 0.11.2 and 0.12.0.
                    </p>
                    <br />
                    <h2 className='green'>Official Release </h2>
                    <h3>Binary Downloads</h3>
                    <br />
                    <h4>Windows</h4>
                    <p>64-bit: Version: 0.12.1, Aug 14, 2016: <a href='/downloads/bitcoinUnlimited-0.12.1-win64-setup.exe'> bitcoinUnlimited-0.12.1-win64-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.1-win64.zip'> (zip)</a></p>
                    <p>32-bit: Version: 0.12.1, Aug 14, 2016: <a href='/downloads/bitcoinUnlimited-0.12.1-win32-setup.exe'> bitcoinUnlimited-0.12.1-win32-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.1-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>Linux</h4>
                    <p>64-bit: Version: 0.12.1, Aug 14, 2016:<a href='/downloads/bitcoinUnlimited-0.12.1-linux64.tar.gz'> bitcoinUnlimited-0.12.1-linux64.tar.gz</a></p>
                    <p>32-bit: Version: 0.12.1, Aug 14, 2016: <a href='/downloads/bitcoinUnlimited-0.12.1-linux32.tar.gz'> bitcoinUnlimited-0.12.1-linux32.tar.gz</a></p>
                    <br />
                    <h4>Mac OSX</h4>
                    <p>64-bit: Version: 0.12.1, Aug 14, 2016:<a href='/downloads/bitcoinUnlimited-0.12.1-osx64.tar.gz'> bitcoinUnlimited-0.12.1-osx64.tar.gz</a></p>
                    <p>32-bit: Version: 0.12.1, Aug 14, 2016:<a href='/downloads/bitcoinUnlimited-0.12.1-osx.tar.gz'> bitcoinUnlimited-0.12.1-osx.tar.gz</a></p>
                    <p>DMG: Version: 0.12.0, Aug 14, 2016:<a href='/downloads/bitcoinUnlimited-0.12.1-osx.dmg'> bitcoinUnlimited-0.12.1-osx.dmg</a></p>
                    <br />

                    <h4>Linux Installation Instructions</h4>
                    <p>Download the file and then open a terminal window. Type:</p>
                    <p>tar xvf ~/Downloads/bitcoinUnlimited-0.12.1-linux64.tar.gz</p>
                    <p>cd bitcoinUnlimited-0.12.1/bin/</p>
                    <p>nohup ./bitcoin-qt &amp; </p>
                    <br />
                    <h4>Source Code</h4>
                    <p>Github branch 0.12.1bu <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/0.12.1bu'>here</a></p>
                </div>
            </div>
        );
    }

});
