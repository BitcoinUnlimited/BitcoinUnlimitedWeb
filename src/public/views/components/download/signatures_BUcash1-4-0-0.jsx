'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.4.0.0-arm32.tar.gz': 'b84b798c8b4554252d5f291158be585644870ffc7ad2bdbdf5a248c4bf972735',
             'BUcash-1.4.0.0-arm64.tar.gz': '4d8b82bf4a547a0cd0ef9e02942f6ca9de99005419b4d7674a89814ea9362a35',
             'BUcash-1.4.0.0-linux32.tar.gz': 'd4edd79eb40a32621c084ff5c5bb99e7ace29ab68f19db5482182ea993486e70',
             'BUcash-1.4.0.0-linux64.tar.gz': '1d9ea2e84e197f190a8a62bff615d8a7ead3972783b037920628397106121fa1',
             'BUcash-1.4.0.0-osx.dmg': '3e009418cf1bf80397e49957a77ff4a7ce1edf2d9df8cc5088e93130fa9c9a18',
             'BUcash-1.4.0.0-osx.tar.gz': 'be09d1dd0e66a50ffd2a1a3292a1fe304ee823e80d997312d4e1aab53b5d7330',
             'BUcash-1.4.0.0-osx64.tar.gz': 'e8d457ecd8731f6c8c888a18a6c39eebd07b01e37ff5696c55b2b0983eed8599',
             'BUcash-1.4.0.0-win32-setup.exe': 'cc276f182810f377a602af94fab2ea5681ae9617f83e2caed2fa273517cbfbfc',
             'BUcash-1.4.0.0-win32.zip': '40c22c0784421bab740573caac9887696fa494c5c0d674a38b2886ca317a19c2',
             'BUcash-1.4.0.0-win64-setup.exe': '31a14c92041cf5c084456b5aebdd614677e3db54e7f3e30d04e5d85b55d16927',
             'BUcash-1.4.0.0-win64.zip': 'afe9be56aa0deac7b3b2adace8006ad2fd04003f0fc41e97eb0e81e7169a3029'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.4.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />HMKteRTu/gDYBFIXCZKIfwFXNnWUirt9RM5B7Se8Ao2qPa2TUKqfHjmmcvhJh2K6/Uf9fTjDaRE1je61M8Zlu/M=
                    <br/><br/>                    
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G<br/>
                    {strings().download.signatures.signature}:<br />
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
