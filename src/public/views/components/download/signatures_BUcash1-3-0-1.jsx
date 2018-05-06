'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.3.0.1-arm32.tar.gz': '8110533e110df4c19716b4ebacd73c5cde72d7b041afa0b4b3912c00dbcc43ec',
             'BUcash-1.3.0.1-arm64.tar.gz': '694b9895bbf1b0a2b198ef37d682309ba874d6d9afd30a65295d44466df17652',
             'BUcash-1.3.0.1-linux32.tar.gz': '5bdaa6d0415550e936f6a3b27e80a2d0edce9cd6c697732edc56b615edc89ebb',
             'BUcash-1.3.0.1-linux64.tar.gz': '4ebf0df5755fa2e3194906bfe38eeb797a22d58721beb733e39cb632da763e1a',
             'BUcash-1.3.0.1-osx.dmg': 'acc1bcf8ec280b97603aabe47ac37aaa609f6a4fb9b5a605ef768bb3438fe610',
             'BUcash-1.3.0.1-osx.tar.gz': 'a2b58143eedfb1acc8d853aa64432a6fad47efaa0e9c6a6cbb658fc8944a3983',
             'BUcash-1.3.0.1-osx64.tar.gz': 'c8b26a1780808033432a418a22a257910a65ae50b96f11313d46958a775e4b15',
             'BUcash-1.3.0.1-win32-setup.exe': '296dded0e98669e51905de96545b2d66ffc7888ab12c0ae6dfdcd74c67b63de4',
             'BUcash-1.3.0.1-win32.zip': '4f39e46dfea575414ea944c231610edaed0f250a61962a27cc8d69a446f74bcd',
             'BUcash-1.3.0.1-win64-setup.exe': '9446b944d4abf9684ca73e2625a7a3a052908a4b9774f122041839ab79e70fa4',
             'BUcash-1.3.0.1-win64.zip': '8107d397f245653358dbdb8d3026b7d0bd3c42901a1bee2fda5077bb62b136d3'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.3.0.1'}`;

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
                    <br/> <br/>
                    {strings().download.signatures.andrew}<br/>
                    bitcoincash:qq9wwnuw4eukyh5g34ckg5vk4aaxnvr04vkspyv850<br/>
                    1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />G0hwG5ksmruJIY3z4rFHjBRKbt+B13jUGE88rOT1yJaDMLW5ZfjdpnddOixvtl+U7Gd4bARUh6DEpJu8zsePhlw=
                    <br/><br/>                    
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G<br/>
                    {strings().download.signatures.signature}:<br />H8v7UwhKB1vpV8OWdsMFv7fqjmiNHzgovqTbGuXcmKk8Mistqnxna9sigC46aw0dvkPv6A5SbK563u1YX1qYnaw=
                    <br/><br/>
                    {strings().download.signatures.freetrader}<br/>
                    bitcoincash:qrvy3znq8wuzfkqejp88zwknwdvahy995vf67dw3au<br/>
                    1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/><br/>                   
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
