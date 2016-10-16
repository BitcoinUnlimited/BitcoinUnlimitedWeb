'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                        <img src='/img/fingerprint.svg' alt='Fingerprint' />
                    </div>
                </div>
                <div className='col-sm-8'>
                    <p>
                        {strings().official.satoshi}
                        {' '}
                        {strings().official.supporting}
                    </p>
                    <br />
                    <div className='red'>
                        {strings().official.verify}
                        {' '}
                        {strings().official.signatures}
                    </div>
                    <h2 className='green'>{strings().official.release}</h2>
                    <h3>{strings().official.binary}</h3>
                    <br />
                    <h4>{strings().official.windows}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 0.12.1, {strings().official.august14}: <a href='/downloads/bitcoinUnlimited-0.12.1-win64-setup.exe'> bitcoinUnlimited-0.12.1-win64-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.1-win64.zip'> (zip)</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 0.12.1, {strings().official.august14}: <a href='/downloads/bitcoinUnlimited-0.12.1-win32-setup.exe'> bitcoinUnlimited-0.12.1-win32-setup.exe</a> <a href='/downloads/bitcoinUnlimited-0.12.1-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>{strings().official.linux}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 0.12.1, {strings().official.august14}:<a href='/downloads/bitcoinUnlimited-0.12.1-linux64.tar.gz'> bitcoinUnlimited-0.12.1-linux64.tar.gz</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 0.12.1, {strings().official.august14}: <a href='/downloads/bitcoinUnlimited-0.12.1-linux32.tar.gz'> bitcoinUnlimited-0.12.1-linux32.tar.gz</a></p>
                    <br />
                    <h4>{strings().official.osx}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 0.12.1, {strings().official.august14}:<a href='/downloads/bitcoinUnlimited-0.12.1-osx64.tar.gz'> bitcoinUnlimited-0.12.1-osx64.tar.gz</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 0.12.1, {strings().official.august14}:<a href='/downloads/bitcoinUnlimited-0.12.1-osx.tar.gz'> bitcoinUnlimited-0.12.1-osx.tar.gz</a></p>
                    <p>DMG: {strings().official.version}: 0.12.0, {strings().official.august14}:<a href='/downloads/bitcoinUnlimited-0.12.1-osx.dmg'> bitcoinUnlimited-0.12.1-osx.dmg</a></p>
                    <br />

                    <h4>{strings().official.installation}</h4>
                    <p>{strings().official.terminal}</p>
                    <pre>$ tar xvf ~/Downloads/bitcoinUnlimited-0.12.1-linux64.tar.gz<br />
                    $ cd bitcoinUnlimited-0.12.1/bin/<br />
                    $ nohup ./bitcoin-qt &amp;<br /></pre>
                    <br />
                    <h4>{strings().official.source}</h4>
                    <p>{strings().official.branch} 0.12.1bu <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/0.12.1bu'>{strings().official.here}</a></p>
                </div>
            </div>
        );
    }

});
