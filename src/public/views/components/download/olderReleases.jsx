'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Section from '../section.jsx';
import Release from './release.jsx'
import Signatures1012 from './signatures_1-0-1-2.jsx'
import Signatures1011 from './signatures_1-0-1-1.jsx'
import Signatures1001 from './signatures_1-0-0-1.jsx'
import Signatures0121 from './signatures_0-12-1.jsx'
import Signatures0120 from './signatures_0-12-0.jsx'
import Signatures0112 from './signatures_0-11-2.jsx'
import Signatures1013 from './signatures_1-0-1-3.jsx'

class OfficialRelease extends React.Component {
    renderV1013Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-1.0.1.3-osx64.tar.gz'
                osx64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-1.0.1.3-osx.tar.gz'
                osx32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx.tar.gz'
                osxDmg='/downloads/bitcoinUnlimited-1.0.1.3-osx.dmg'
                osxDmgMirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx.dmg'
                windows64Exe='/downloads/bitcoinUnlimited-1.0.1.3-win64-setup.exe'
                windows64Zip='/downloads/bitcoinUnlimited-1.0.1.3-win64.zip'
                windows64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-win64-setup.exe'
                windows32Exe='/downloads/bitcoinUnlimited-1.0.1.3-win32-setup.exe'
                windows32Zip='/downloads/bitcoinUnlimited-1.0.1.3-win32.zip'
                windows32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-win32-setup.exe'
                linux64='/downloads/bitcoinUnlimited-1.0.1.3-linux64.tar.gz'
                linux64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-1.0.1.3-linux32.tar.gz'
                linux32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-linux32.tar.gz'
                arm64='/downloads/bitcoinUnlimited-1.0.1.3-arm64.tar.gz'
                arm64Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-arm64.tar.gz'
                arm32='/downloads/bitcoinUnlimited-1.0.1.3-arm32.tar.gz'
                arm32Mirror='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.3'>

                <Signatures1013 />
            </Release>
        )
    }

    renderV1012Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-1.0.1.2-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-1.0.1.2-osx.tar.gz'
                osxDmg='/downloads/bitcoinUnlimited-1.0.1.2-osx.dmg'
                windows64Exe='/downloads/bitcoinUnlimited-1.0.1.2-win64-setup.exe'
                windows32Exe='/downloads/bitcoinUnlimited-1.0.1.2-win32-setup.exe'
                linux64='/downloads/bitcoinUnlimited-1.0.1.2-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-1.0.1.2-linux32.tar.gz'
                arm64='/downloads/bitcoinUnlimited-1.0.1.2-arm64.tar.gz'
                arm32='/downloads/bitcoinUnlimited-1.0.1.2-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.2'>

                <Signatures1012 />
            </Release>
        )
    }

    renderV1011Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-1.0.1.1-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-1.0.1.1-osx.dmg'
                osxDmg='/downloads/bitcoinUnlimited-1.0.1.1-osx.tar.gz'
                windows64Exe='/downloads/bitcoinUnlimited-1.0.1.1-win64-setup.exe'
                windows64Zip='/downloads/bitcoinUnlimited-1.0.1.1-win64.zip'
                windows32Exe='/downloads/bitcoinUnlimited-1.0.1.1-win32-setup.exe'
                windows32Zip='/downloads/bitcoinUnlimited-1.0.1.1-win32.zip'
                linux64='/downloads/bitcoinUnlimited-1.0.1.1-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-1.0.1.1-linux32.tar.gz'
                arm64='/downloads/bitcoinUnlimited-1.0.1.1-arm64.tar.gz'
                arm32='/downloads/bitcoinUnlimited-1.0.1.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.1'>

                <Signatures1011 />
            </Release>
        )
    }

    renderV1001Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-1.0.0.1-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-1.0.0.1-osx.tar.gz'
                osxDmg='/downloads/bitcoinUnlimited-1.0.0.1-osx.dmg'
                windows64Exe='/downloads/bitcoinUnlimited-1.0.0.1-win64-setup.exe'
                windows64Zip='/downloads/bitcoinUnlimited-1.0.0.1-win64.zip'
                windows32Exe='/downloads/bitcoinUnlimited-1.0.0.1-win32-setup.exe'
                windows32Zip='/downloads/bitcoinUnlimited-1.0.0.1-win32.zip'
                linux64='/downloads/bitcoinUnlimited-1.0.0.1-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-1.0.0.1-linux32.tar.gz'
                arm64='/downloads/bitcoinUnlimited-1.0.0.1-arm64.tar.gz'
                arm32='/downloads/bitcoinUnlimited-1.0.0.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.0.1'>

                <Signatures1001 />
            </Release>
        )
    }

    renderV0121Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-0.12.1-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-0.12.1-osx.tar.gz'
                osxDmg='/downloads/bitcoinUnlimited-0.12.1-osx.dmg'
                windows64Exe='/downloads/bitcoinUnlimited-0.12.1-win64-setup.exe'
                windows64Zip='/downloads/bitcoinUnlimited-0.12.1-win64.zip'
                windows32Exe='/downloads/bitcoinUnlimited-0.12.1-win32-setup.exe'
                windows32Zip='/downloads/bitcoinUnlimited-0.12.1-win32.zip'
                linux64='/downloads/bitcoinUnlimited-0.12.1-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-0.12.1-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/BU0.12.1b'>

                <Signatures0121 />
            </Release>
        )
    }

    renderV0120Body() {
        return (
            <Release
                osx64='/downloads/bitcoinUnlimited-0.12.0-osx64.tar.gz'
                osx32='/downloads/bitcoinUnlimited-0.12.0-osx.tar.gz'
                osxDmg='/downloads/bitcoinUnlimited-0.12.0-osx.dmg'
                windows64Exe='/downloads/bitcoinUnlimited-0.12.0-win64-setup.exe'
                windows64Zip='/downloads/bitcoinUnlimited-0.12.0-win64.zip'
                windows32Exe='/downloads/bitcoinUnlimited-0.12.0-win32-setup.exe'
                windows32Zip='/downloads/bitcoinUnlimited-0.12.0-win32.zip'
                linux64='/downloads/bitcoinUnlimited-0.12.0-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-0.12.0-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v0.12.0'>

                <Signatures0120 />
            </Release>
        )
    }

    renderV0112Body() {
        return (
            <Release
                windows64Exe='/downloads/bitcoinUnlimited-0.11.2-win64-setup.exe'
                windows32Exe='/downloads/bitcoinUnlimited-0.11.2-win32-setup.exe'
                linux64='/downloads/bitcoinUnlimited-0.11.2-linux64.tar.gz'
                linux32='/downloads/bitcoinUnlimited-0.11.2-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v0.11.2'>

                <Signatures0112 />
            </Release>
        )
    }

    render() {
        return (
            <div className="pt2">
                <Section
                    title='v1.0.1.3'
                    body={ this.renderV1013Body() }
                    expanded={ false } />

                <Section
                    title='v1.0.1.2'
                    body={ this.renderV1012Body() }
                    expanded={ false } />

                <Section
                    title='v1.0.1.1'
                    body={ this.renderV1011Body() }
                    expanded={ false } />

                <Section
                    title='v1.0.0.1'
                    body={ this.renderV1001Body() }
                    expanded={ false } />

                <Section
                    title='v0.12.1'
                    body={ this.renderV0121Body() }
                    expanded={ false } />

                <Section
                    title='v0.12.0'
                    body={ this.renderV0120Body() }
                    expanded={ false } />

                <Section
                    title='v0.11.2'
                    body={ this.renderV0112Body() }
                    expanded={ false } />
            </div>
        )
    }
}


export default OfficialRelease
