'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bitcoinUnlimited-1.0.3.0-arm32.tar.gz': '4d063832f7384871e6087b492d767418c4b6b695c8702fbfabb72050f03490dc',
             'bitcoinUnlimited-1.0.3.0-arm64.tar.gz': '73fc6d396dfff0184959610f42d42c1d15fac4aa79a8681e24ed8d33cb13e577',
             'bitcoinUnlimited-1.0.3.0-linux32.tar.gz': '0b5717c847f7ce8497c14a9eb32d23e98554722d8e6b32f679f9e6668ca617f0',
             'bitcoinUnlimited-1.0.3.0-linux64.tar.gz': 'a6658bac22f082539969a243943c7d1a865abd40cdfe39465ff82b4eba387b22',
             'bitcoinUnlimited-1.0.3.0-osx.dmg': 'b9f5e275450632fe595c9cd776694ffa2fc049071ee7d0ffe14b899c95255959',
             'bitcoinUnlimited-1.0.3.0-osx.tar.gz': '4686ad008450a0a7d81c0ff6ff92cdda0a9b375aa325bc1637659c24d347762b',
             'bitcoinUnlimited-1.0.3.0-osx64.tar.gz': '6c631dd70eae0e2dc365c95b00485d847837d82c39b01ee2db8ba054321d454d',
             'bitcoinUnlimited-1.0.3.0-win32-setup.exe': '36b0a3b77d2348b9a8a88e5a25c75726dee73fcc3c96fa3bc71fec0f2cdcb640',
             'bitcoinUnlimited-1.0.3.0-win32.zip': '376d5cdf4c2df1c4561a29ba6378ec848e74048e0f4d360d4a2802c4d122fa89',
             'bitcoinUnlimited-1.0.3.0-win64-setup.exe': 'f230cb01f5f25efdc6db2aa16a5c893a6e03455187f2aa79fc91ec2d9237d1f2',
             'bitcoinUnlimited-1.0.3.0-win64.zip': 'b4c176f33787c88c3a398605e1ec55043ab12b0d8f22edda1a15863d096aa424'},
  'program': 'BitcoinUnlimited',
  'version': '1.0.3.0'}`;

class SignaturesLatest extends React.Component {
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
                    1.0.3.0 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />G+h2pbTloDyxZXue1KDBuyjcBXAOj08nqtvvK8j9oC0IY7v7UZns+4IOE74YCxXyci3eWkAaZMuhSYIrb/Xhuhg=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />Hz11wP/CstTSn3ta+ODY6D4mD8QD1r05NHt2hLK1ukyMC3a8DSdYK3V9qyc0DuTqcIMMuTLwlOxxHlrT2r7/wjw=
                    <br/><br/>
                    {strings().download.signatures.freetrader} (1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4)<br/>
                    {strings().download.signatures.signature}:<br />HAuPxIwShFC0AeNvsvYhbEE6xN52pTlmF0UB+QeUjDZSAYP+/9L0qZ+zQhW+30zzDSiQYta7SUsfIz+vFx/OAaY=
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesLatest
