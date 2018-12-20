'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Release from './release.jsx'
import SignaturesBitcoinCash from './signatures_BUcash1-5-1-0.jsx'

class BitcoinCashRelease extends React.Component {
    render() {
        var latestVersion = "1.5.1.0";
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.bitcoincash.download } ({latestVersion}, {strings().download.bitcoincash.date})<br /> <i>({ strings().download.bitcoincash.notes } 
                <a href="https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/dev/doc/bip135-guide.md">BIP 135 voting guide</a>)</i>: </p>
                <p><a href="https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/dev/doc/release-notes/release-notes-bucash1.5.1.0.md">Release Notes</a></p>
                <p><i>{strings().download.bitcoincash.notes2}</i></p>
                <p><strong>{strings().download.bitcoincash.warning}</strong></p>

                <Release
                    osx64={'/downloads/BUcash-' + latestVersion + '-osx64.tar.gz'}
                    osx64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-osx64.tar.gz'}
                    osxDmg={'/downloads/BUcash-' + latestVersion + '-osx.dmg'}
                    osxDmgMirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-osx.dmg'}
                    windows64Exe={'/downloads/BUcash-' + latestVersion + '-win64-setup.exe'}
                    windows64Zip={'/downloads/BUcash-' + latestVersion + '-win64.zip'}
                    windows64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-win64-setup.exe'}
                    windows32Exe={'/downloads/BUcash-' + latestVersion + '-win32-setup.exe'}
                    windows32Zip={'/downloads/BUcash-' + latestVersion + '-win32.zip'}
                    windows32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-win32-setup.exe'}
                    linux64={'/downloads/BUcash-' + latestVersion + '-linux64.tar.gz'}
                    linux64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-linux64.tar.gz'}
                    linux32={'/downloads/BUcash-' + latestVersion + '-linux32.tar.gz'}
                    linux32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-linux32.tar.gz'}
                    arm64={'/downloads/BUcash-' + latestVersion + '-arm64.tar.gz'}
                    arm64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-arm64.tar.gz'}
                    arm32={'/downloads/BUcash-' + latestVersion + '-arm32.tar.gz'}
                    arm32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/BUcash-' + latestVersion + '-arm32.tar.gz'}
                    source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.5.1.0'>

                    <SignaturesBitcoinCash />
                </Release>
            </div>
        )
    }
}

export default BitcoinCashRelease
