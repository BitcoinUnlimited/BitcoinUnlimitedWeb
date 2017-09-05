'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.1.1.1-arm32.tar.gz': '674e82af3e3ab5b04e243adfb3fdb5857ea1decb47eed6e0e2882f5f393d02f9',
             'BUcash-1.1.1.1-arm64.tar.gz': '00f55aebd8250d72f0aa4f85659a2a15d979c11f7ab161a2ea8338360e020551',
             'BUcash-1.1.1.1-linux32.tar.gz': 'e4816a5245dc944830810018f9beab401ae9cc4aa9bffdd7b4f8729ddf26e71e',
             'BUcash-1.1.1.1-linux64.tar.gz': 'bdc3e07ce2cacc42295d7559fbaae5ae60fed82479c5644ab7293bbea6b79a62',
             'BUcash-1.1.1.1-osx.dmg': '2960749a3e48717c9babf557e1a3b777e1d8e0878a25549e443834604212769c',
             'BUcash-1.1.1.1-osx.tar.gz': 'bb704720bc48116394e0da77f19899671bd64b43865e026a71e9ab37d9403ecc',
             'BUcash-1.1.1.1-osx64.tar.gz': '614c8586a083b3d0614f5c6e3fa91e653cc9ae05acbbc602a6028fa56585c9da',
             'BUcash-1.1.1.1-win32-setup.exe': '8bee15c6bf9b3be7c533ee37fb0d1f1049cdcb0a7e4359ecafa0ccd98a3cd081',
             'BUcash-1.1.1.1-win32.zip': '744396a894e0091a602c4c5823d852b2e68b08a1e04987367550cc11abe60ba4',
             'BUcash-1.1.1.1-win64-setup.exe': 'a8f03cc87729842ed95cb90dd099c495cfd7e8298e21574260a9dc0e3e5e30af',
             'BUcash-1.1.1.1-win64.zip': '6bbe5d8f5b9839685f610f36e3bf78fefd8f2deda01efce7920fd439748b5bbb'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.1.1.1'}`;

class SignaturesBitcoinCash extends React.Component {
    render() {
        return (
            <div className='pt2'>
                <div>
                    {strings().download.signatures.signatures}
                    <br /><br />
                <div>
                    {strings().download.signatures.helpOne}
                    {' '}
                    {strings().download.signatures.helpTwo}
                    {' '}
                    {strings().download.signatures.helpThree}
                    {' '}
                    {strings().download.signatures.helpFour}
                    {' '}
                    {strings().download.signatures.helpFive}
                    {' '}
                    <a className='link--underline dim black' href='http://www.bitco.in/forum'>{strings().download.signatures.forum}</a>.<br/>
                </div>

                <br />
                    {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />HB9r7d7y07b7GLjUzHKypf6AimqlsryV5oNfTCeMOqZeBcuPeQ6Shw8gWuIAaVCbRlYJ+wPgrDrq0lzJJfHQAh4=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />H+QKRQ424rdYaAgSrYqNaAz+liCPnVenNopiaQ77gZmMXx2RawfunuHuZaNeJ9k1e9S4Dix2v/WDOEH+clfczzE=
                    <br/><br/>
                    {strings().download.signatures.freetrader} (1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4)<br/>
                    {strings().download.signatures.signature}:<br />HOyMUQ/lflOKiMYvhLahUp0DCnELEihjzm8jZHOZKKdNp4fZs/5aib2KgEKhBiKLz/OxXDZnfWJNrC3e2BrHN3I=
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
