'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.2.0.0-arm32.tar.gz': '20803bc257a429eddd8d747a7a78a182675695286a775eff80c68e9cf1cb6bfa',
             'BUcash-1.2.0.0-arm64.tar.gz': '941f7ba087fcbd659983f7b743c07e5fb4d29ebc1e94b2ce115523171fbce760',
             'BUcash-1.2.0.0-linux32.tar.gz': '58cf089447827fe58a28dc81d4611dfae54dcb8c01b1f811e3911a06e6d5c72e',
             'BUcash-1.2.0.0-linux64.tar.gz': 'a2bfce0364371827b8eb56bd184b6e9de221aa07969a91b53da89b9f2952548a',
             'BUcash-1.2.0.0-osx.dmg': '50d9528e30ed6ca1c4b72b8713c632c0b32c0e39d1b913d0aaa7bb827e7973e7',
             'BUcash-1.2.0.0-osx.tar.gz': '07cc319fe3b7fa1e1ba245c0c4dbafb71696c848c1bfa267ce9b5ec4ab7b8d50',
             'BUcash-1.2.0.0-osx64.tar.gz': '36a01853b03fa7b91df6937b0eed3a96d67088a5b263ac92e47e89306c6583ba',
             'BUcash-1.2.0.0-win32-setup.exe': 'adc5944344211d686f5681cb5fde9144c8e80fb2e552993272882bc7c4105c15',
             'BUcash-1.2.0.0-win32.zip': '2c74afdc30e1c21aecefcf89c32b73c42d5c829d63a644533c7c13cd9b505d39',
             'BUcash-1.2.0.0-win64-setup.exe': '910206bb57a06133818154b2f590ac8906cb26e82220e11cea767b811c687b02',
             'BUcash-1.2.0.0-win64.zip': '4058a366e3ee7ba3affdedb737e66070b1482eacc64a7fd36dc018a2a29c7863'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.2.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />HA43ZeLw3JhM/9Obk/QRQgclWMCj8iygcRmY8sZLb2gTR7BIDP7xiQQQGX31AsA3a4whmjOgZTdoKQYWBWBev4c=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />IGTcaaHVfGGtBGNZcdwJRMmD1xAndu0RHSSgOEHIGGJRImAJXed7U/CSiZRXxpwWXvHZc21PtzA7wb7X+jUx9Z4=
                    <br/><br/>
                    {strings().download.signatures.freetrader} (1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4)<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
