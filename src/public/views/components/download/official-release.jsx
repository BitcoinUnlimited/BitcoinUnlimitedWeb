'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Release from './release.jsx'
import SignaturesLatest from './signatures_1-0-3-0.jsx'

class OfficialRelease extends React.Component {
    render() {
        var latestVersion = "1.0.3.0";
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.latest.download } ({latestVersion}, {strings().download.latest.date})<br /> <i>({ strings().download.latest.notes }</i>):</p>

                <Release
                    osx64={'/downloads/bitcoinUnlimited-' + latestVersion + '-osx64.tar.gz'}
                    osx64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-osx64.tar.gz'}
                    osx32={'/downloads/bitcoinUnlimited-' + latestVersion + '-osx.tar.gz'}
                    osx32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-osx.tar.gz'}
                    osxDmg={'/downloads/bitcoinUnlimited-' + latestVersion + '-osx.dmg'}
                    osxDmgMirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-osx.dmg'}
                    windows64Exe={'/downloads/bitcoinUnlimited-' + latestVersion + '-win64-setup.exe'}
                    windows64Zip={'/downloads/bitcoinUnlimited-' + latestVersion + '-win64.zip'}
                    windows64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-win64-setup.exe'}
                    windows32Exe={'/downloads/bitcoinUnlimited-' + latestVersion + '-win32-setup.exe'}
                    windows32Zip={'/downloads/bitcoinUnlimited-' + latestVersion + '-win32.zip'}
                    windows32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-win32-setup.exe'}
                    linux64={'/downloads/bitcoinUnlimited-' + latestVersion + '-linux64.tar.gz'}
                    linux64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-linux64.tar.gz'}
                    linux32={'/downloads/bitcoinUnlimited-' + latestVersion + '-linux32.tar.gz'}
                    linux32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-linux32.tar.gz'}
                    arm64={'/downloads/bitcoinUnlimited-' + latestVersion + '-arm64.tar.gz'}
                    arm64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-arm64.tar.gz'}
                    arm32={'/downloads/bitcoinUnlimited-' + latestVersion + '-arm32.tar.gz'}
                    arm32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-' + latestVersion + '-arm32.tar.gz'}
                    source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/BitcoinCore1.0'>

                    <SignaturesLatest />
                </Release>
            </div>
        )
    }
}

export default OfficialRelease
