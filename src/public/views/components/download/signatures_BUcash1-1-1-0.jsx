'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.1.1.0-arm32.tar.gz': '3f7018e3831b40245ca965c093c0ed496f8e9d85512777969f0b5527d0b7f251',
             'BUcash-1.1.1.0-arm64.tar.gz': 'acebd6a8657bb5bba46f01fcbd010443ce93512ee380442b60b317a5b5cce4b7',
             'BUcash-1.1.1.0-linux32.tar.gz': 'd6bb29a612bfdf1900af0f47b263e292f88b2494f50ba35b1bb6136cbb61f4b3',
             'BUcash-1.1.1.0-linux64.tar.gz': '562191a290e23adf24e1a0b6863765e8f2afeb2e61e20c9067fb1a8ef0c2ef92',
             'BUcash-1.1.1.0-osx.dmg': '01df63c932f5072c458ec53707729e3cc49797adf18282d19458b9e56b210a49',
             'BUcash-1.1.1.0-osx.tar.gz': 'd3baa157b9b08e27b375349e622188d03c7511a403c25e55260ef95cd6b9e66b',
             'BUcash-1.1.1.0-osx64.tar.gz': '68f307815bf3dd2ef6adcd9c44045ad463877334e575d539c965937a11438f9c',
             'BUcash-1.1.1.0-win32-setup.exe': '6ec86725972f2d807e76abb32b7cb32aeb18e9c60952be1b1646ba94a72e8429',
             'BUcash-1.1.1.0-win32.zip': '69b49a1377fdb0e259eccabdc3f7a874e8114c8ea8ba7e801ec0432db5b6f5dc',
             'BUcash-1.1.1.0-win64-setup.exe': '631976dc71e4a76d1b96bcda8cb48783fca38a64b60b1fbdc72a3c02064fdcfa',
             'BUcash-1.1.1.0-win64.zip': 'bc46f3926e8398b8a2eed4195c0a16777eba572159c9e2ad80449fc2e64d44cf'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.1.1.0'}`;

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
                    {strings().download.signatures.signature}:<br />HID6gG9a4vGSWvmtqRqWHjwL+9WGoiNVzev+QwU028/zO5bD/sNw6v8OO4i/ABVJng8qa8LBJ7rJI44fMb0B1sg=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />Hz3es9ZL1IZ2WUsLnOZyoCQvy7l6SMq4p8P0wbh4O8nHfUByZbHP/aHWzQ/Iiw92ykDb8hT96hXBtGF3O1Z7ysc=
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
