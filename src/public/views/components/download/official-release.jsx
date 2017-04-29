'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Release from './release.jsx'
import Signatures1014 from './signatures_1-0-1-4.jsx'

class OfficialRelease extends React.Component {
    render() {
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.latest.download } ({strings().download.latest.version}, {strings().download.latest.date}):</p>

                <Release
                    osx64='/downloads/bitcoinUnlimited-1.0.1.4-osx64.tar.gz'
                    osx64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-osx64.tar.gz'
                    osx32='/downloads/bitcoinUnlimited-1.0.1.4-osx.tar.gz'
                    osx32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-osx.tar.gz'
                    osxDmg='/downloads/bitcoinUnlimited-1.0.1.4-osx.dmg'
                    osxDmgMirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-osx.dmg'
                    windows64Exe='/downloads/bitcoinUnlimited-1.0.1.4-win64-setup.exe'
                    windows64Zip='/downloads/bitcoinUnlimited-1.0.1.4-win64.zip'
                    windows64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-win64-setup.exe'
                    windows32Exe='/downloads/bitcoinUnlimited-1.0.1.4-win32-setup.exe'
                    windows32Zip='/downloads/bitcoinUnlimited-1.0.1.4-win32.zip'
                    windows32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-win32-setup.exe'
                    linux64='/downloads/bitcoinUnlimited-1.0.1.4-linux64.tar.gz'
                    linux64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-linux64.tar.gz'
                    linux32='/downloads/bitcoinUnlimited-1.0.1.4-linux32.tar.gz'
                    linux32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-linux32.tar.gz'
                    arm64='/downloads/bitcoinUnlimited-1.0.1.4-arm64.tar.gz'
                    arm64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-arm64.tar.gz'
                    arm32='/downloads/bitcoinUnlimited-1.0.1.4-arm32.tar.gz'
                    arm32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.4-arm32.tar.gz'
                    source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release'>

                    <Signatures1014 />
                </Release>
            </div>
        )
    }
}

export default OfficialRelease
