'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Release from './release.jsx'
import SignaturesBitcoinCash from './signatures_bch_unlimited_1-9-2-0.jsx'

class BitcoinCashRelease extends React.Component {
    render() {
        var latestVersion = "1.9.2.0";
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.bitcoincash.download } ({latestVersion}, {strings().download.bitcoincash.date})<br /> <i>({ strings().download.bitcoincash.notes })</i></p>
                <p><a href="https://gitlab.com/bitcoinunlimited/BCHUnlimited/-/blob/dev/doc/release-notes/release-notes-1.9.2.md">Release Notes</a></p>
                <p><i>{strings().download.bitcoincash.notes2}</i></p>
                <p><strong>{strings().download.bitcoincash.warning}</strong></p>

                <Release
                    osx64={'/downloads/bch-unlimited-' + latestVersion + '-osx64.tar.gz'}
                    osx64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-osx64.tar.gz'}
                    osxDmg={'/downloads/bch-unlimited-' + latestVersion + '-osx.dmg'}
                    osxDmgMirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-osx.dmg'}
                    windows64Exe={'/downloads/bch-unlimited-' + latestVersion + '-win64-setup.exe'}
                    windows64Zip={'/downloads/bch-unlimited-' + latestVersion + '-win64.zip'}
                    windows64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-win64-setup.exe'}
                    windows32Exe={'/downloads/bch-unlimited-' + latestVersion + '-win32-setup.exe'}
                    windows32Zip={'/downloads/bch-unlimited-' + latestVersion + '-win32.zip'}
                    windows32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-win32-setup.exe'}
                    linux64={'/downloads/bch-unlimited-' + latestVersion + '-linux64.tar.gz'}
                    linux64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-linux64.tar.gz'}
                    linux32={'/downloads/bch-unlimited-' + latestVersion + '-linux32.tar.gz'}
                    linux32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-linux32.tar.gz'}
                    arm64={'/downloads/bch-unlimited-' + latestVersion + '-arm64.tar.gz'}
                    arm64Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-arm64.tar.gz'}
                    arm32={'/downloads/bch-unlimited-' + latestVersion + '-arm32.tar.gz'}
                    arm32Mirror={'https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bch-unlimited-' + latestVersion + '-arm32.tar.gz'}
                    source={'https://gitlab.com/bitcoinunlimited/BCHUnlimited/-/releases/BCHunlimited' + latestVersion} >
                    <SignaturesBitcoinCash />
                </Release>
            </div>
        )
    }
}

export default BitcoinCashRelease
