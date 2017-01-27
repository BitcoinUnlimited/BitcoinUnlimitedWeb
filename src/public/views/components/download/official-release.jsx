'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                        <img src='/img/download.svg' alt='download' />
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
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.0, {strings().official.date}: <a href='/downloads/bitcoinUnlimited-1.0.0-win64-setup.exe'> bitcoinUnlimited-1.0.0-win64-setup.exe</a> <a href='/downloads/bitcoinUnlimited-1.0.0-win64.zip'> (zip)</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 1.0.0, {strings().official.date}: <a href='/downloads/bitcoinUnlimited-1.0.0-win32-setup.exe'> bitcoinUnlimited-1.0.0-win32-setup.exe</a> <a href='/downloads/bitcoinUnlimited-1.0.0-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>{strings().official.linux}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-linux64.tar.gz'> bitcoinUnlimited-1.0.0-linux64.tar.gz</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 1.0.0, {strings().official.date}: <a href='/downloads/bitcoinUnlimited-1.0.0-linux32.tar.gz'> bitcoinUnlimited-1.0.0-linux32.tar.gz</a></p>
                    <br />
                    <h4>{strings().official.osx}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-osx64.tar.gz'> bitcoinUnlimited-1.0.0-osx64.tar.gz</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-osx.tar.gz'> bitcoinUnlimited-1.0.0-osx.tar.gz</a></p>
                    <p>DMG: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-osx.dmg'> bitcoinUnlimited-1.0.0-osx.dmg</a></p>
                    <br />
                    <h4>{strings().official.ARM}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-arm64.tar.gz'> bitcoinUnlimited-1.0.0-arm64.tar.gz</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 1.0.0, {strings().official.date}:<a href='/downloads/bitcoinUnlimited-1.0.0-arm32.tar.gz'> bitcoinUnlimited-1.0.0-arm32.tar.gz</a></p>
                    <br />

                    <h4>{strings().official.source}</h4>
                    <p>{strings().official.branch} <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release'>{strings().official.here}</a></p>
                </div>
            </div>
        );
    }

});
