'use strict';

import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                        <img src='img/download.svg' alt='download' />
                    </div>
                </div>
                <div className='col-sm-8'>
                    <p>The Bitcoin Unlimited project maintains an enhanced version of the Bitcoin Core "Satoshi" client.
                        We are currently supporting the 1.0.0 release and have older releases on 0.11.2, 0.12.0, and 0.12.1.
                    </p>
                    <br />
                    <div className='red'>Please verify binary signatures before installation!  Scroll down to the Signatures section to see the SHA-256 checksums of the binaries and our signatures on that statement.</div>
                    <h2 className='green'>Official Release </h2>
                    <h3>Binary Downloads</h3>
                    <br />
                    <h4>Windows</h4>
                    <p>64-bit: Version: 1.0.0, Jan 25, 2017: <a href='/downloads/bitcoinUnlimited-1.0.0-win64-setup.exe'> bitcoinUnlimited-1.0.0-win64-setup.exe</a> <a href='/downloads/bitcoinUnlimited-1.0.0-win64.zip'> (zip)</a></p>
                    <p>32-bit: Version: 1.0.0, Jan 25, 2017: <a href='/downloads/bitcoinUnlimited-1.0.0-win32-setup.exe'> bitcoinUnlimited-1.0.0-win32-setup.exe</a> <a href='/downloads/bitcoinUnlimited-1.0.0-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>Linux</h4>
                    <p>64-bit: Version: 1.0.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-linux64.tar.gz'> bitcoinUnlimited-1.0.0-linux64.tar.gz</a></p>
                    <p>32-bit: Version: 1.0.0, Jan 25, 2017: <a href='/downloads/bitcoinUnlimited-1.0.0-linux32.tar.gz'> bitcoinUnlimited-1.0.0-linux32.tar.gz</a></p>
                    <br />
                    <h4>Mac OSX</h4>
                    <p>64-bit: Version: 1.0.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-osx64.tar.gz'> bitcoinUnlimited-1.0.0-osx64.tar.gz</a></p>
                    <p>32-bit: Version: 1.0.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-osx.tar.gz'> bitcoinUnlimited-1.0.0-osx.tar.gz</a></p>
                    <p>DMG: Version: 0.12.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-osx.dmg'> bitcoinUnlimited-1.0.0-osx.dmg</a></p>
                    <br />
                    <h4>ARM</h4>
                    <p>64-bit: Version: 1.0.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-arm64.tar.gz'> bitcoinUnlimited-1.0.0-arm64.tar.gz</a></p>
                    <p>32-bit: Version: 1.0.0, Jan 25, 2017:<a href='/downloads/bitcoinUnlimited-1.0.0-arm32.tar.gz'> bitcoinUnlimited-1.0.0-arm32.tar.gz</a></p>
                    <br />

                    <h4>Linux Installation Instructions</h4>
                    <p>Download the file and then open a terminal window. Type:</p>
                    <p>tar xvf ~/Downloads/bitcoinUnlimited-1.0.0-linux64.tar.gz</p>
                    <p>cd bitcoinUnlimited-1.0.0/bin/</p>
                    <p>nohup ./bitcoin-qt &amp; </p>
                    <br />
                    <h4>Source Code</h4>
                    <p>Github tag 1.0.0 branch 'release' <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release'>here</a></p>
                </div>
            </div>
        );
    }

});
