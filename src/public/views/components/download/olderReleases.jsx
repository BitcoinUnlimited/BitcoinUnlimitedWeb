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
import Signatures1014 from './signatures_1-0-1-4.jsx'
import Signatures1020 from './signatures_1-0-2-0.jsx'
import SignaturesBUcash1100 from './signatures_BUcash1-1-0-0.jsx'
import SignaturesBUcash1110 from './signatures_BUcash1-1-1-0.jsx'
import SignaturesBUcash1111 from './signatures_BUcash1-1-1-1.jsx'
import SignaturesBUcash1120 from './signatures_BUcash1-1-2-0.jsx'
import SignaturesBUcash1200 from './signatures_BUcash1-2-0-0.jsx'
import SignaturesBUcash1201 from './signatures_BUcash1-2-0-1.jsx'
import SignaturesBUcash1300 from './signatures_BUcash1-3-0-0.jsx'
import SignaturesBUcash1301 from './signatures_BUcash1-3-0-1.jsx'
import SignaturesBUcash1400 from './signatures_BUcash1-4-0-0.jsx'


class OfficialRelease extends React.Component {
    renderVBUcash1400Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.4.0.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.4.0.0'>

                <SignaturesBUcash1400 />
            </Release>
        )
    }
    renderVBUcash1301Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.3.0.1'>

                <SignaturesBUcash1301 />
            </Release>
        )
    }
    renderVBUcash1300Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.3.0.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.3.0.0'>

                <SignaturesBUcash1300 />
            </Release>
        )
    }
    renderVBUcash1201Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.2.0.1'>

                <SignaturesBUcash1201 />
            </Release>
        )
    }
    renderVBUcash1200Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.2.0.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.2.0.0'>

                <SignaturesBUcash1200 />
            </Release>
        )
    }

    renderVBUcash1120Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.2.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.1.2.0'>

                <SignaturesBUcash1120 />
            </Release>
        )
    }
    renderVBUcash1111Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.1.1.1'>

                <SignaturesBUcash1111 />
            </Release>
        )
    }
    renderVBUcash1110Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.1.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.1.1.0'>

                <SignaturesBUcash1110 />
            </Release>
        )
    }
    renderVBUcash1100Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/BUcash-1.1.0.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/bucash1.1.0.0'>

                <SignaturesBUcash1100 />
            </Release>
        )
    }
    renderV1020Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.2.0-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v1.0.2.0'>

                <Signatures1020 />
            </Release>
        )
    }
    renderV1014Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.4-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v1.0.1.4'>

                <Signatures1014 />
            </Release>
        )
    }

    renderV1013Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.3-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.3'>

                <Signatures1013 />
            </Release>
        )
    }

    renderV1012Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.2-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.2'>

                <Signatures1012 />
            </Release>
        )
    }

    renderV1011Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-osx.dmg'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-osx.tar.gz'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-win64-setup.exe'
                windows64Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-win64.zip'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-win32-setup.exe'
                windows32Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-win32.zip'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.1.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.1.1'>

                <Signatures1011 />
            </Release>
        )
    }

    renderV1001Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-win64-setup.exe'
                windows64Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-win64.zip'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-win32-setup.exe'
                windows32Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-win32.zip'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-linux32.tar.gz'
                arm64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-arm64.tar.gz'
                arm32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-1.0.0.1-arm32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/1.0.0.1'>

                <Signatures1001 />
            </Release>
        )
    }

    renderV0121Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-win64-setup.exe'
                windows64Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-win64.zip'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-win32-setup.exe'
                windows32Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-win32.zip'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.1-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/BU0.12.1b'>

                <Signatures0121 />
            </Release>
        )
    }

    renderV0120Body() {
        return (
            <Release
                osx64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-osx64.tar.gz'
                osx32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-osx.tar.gz'
                osxDmg='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-osx.dmg'
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-win64-setup.exe'
                windows64Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-win64.zip'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-win32-setup.exe'
                windows32Zip='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-win32.zip'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.12.0-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v0.12.0'>

                <Signatures0120 />
            </Release>
        )
    }

    renderV0112Body() {
        return (
            <Release
                windows64Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.11.2-win64-setup.exe'
                windows32Exe='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.11.2-win32-setup.exe'
                linux64='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.11.2-linux64.tar.gz'
                linux32='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloadHistory/raw/master/bitcoinUnlimited-0.11.2-linux32.tar.gz'
                source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/releases/tag/v0.11.2'>

                <Signatures0112 />
            </Release>
        )
    }

    render() {
        return (
            <div className="pt2">
                <Section
                    title='BUcash-1.4.0.0'
                    body={ this.renderVBUcash1400Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.3.0.1'
                    body={ this.renderVBUcash1301Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.3.0.0'
                    body={ this.renderVBUcash1300Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.2.0.1'
                    body={ this.renderVBUcash1201Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.2.0.0'
                    body={ this.renderVBUcash1200Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.1.2.0'
                    body={ this.renderVBUcash1120Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.1.1.1'
                    body={ this.renderVBUcash1111Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.1.1.0'
                    body={ this.renderVBUcash1110Body() }
                    expanded={ false } />

                <Section
                    title='BUcash-1.1.0.0'
                    body={ this.renderVBUcash1100Body() }
                    expanded={ false } />

                <Section
                    title='v1.0.2.0'
                    body={ this.renderV1020Body() }
                    expanded={ false } />

                <Section
                    title='v1.0.1.4'
                    body={ this.renderV1014Body() }
                    expanded={ false } />

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
