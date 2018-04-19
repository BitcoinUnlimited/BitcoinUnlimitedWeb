'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.3.0.0-arm32.tar.gz': 'b8e66606de7a4d183c3d33ad5d7edf52092fec53fdda7320f12d8078be9519f7',
             'BUcash-1.3.0.0-arm64.tar.gz': '964ebcc9555732a2c4334625e81365cda3f0af20c459a93b3f7369e7b3ceba05',
             'BUcash-1.3.0.0-linux32.tar.gz': 'c49f82ff93042db6c6dfb7ec20577faa98656351bfa8ea88e23a84a84aa0ddb5',
             'BUcash-1.3.0.0-linux64.tar.gz': '8bbc0f78842011086acee5a0f2c729e616da7d841ed7028d93e248286a6e889d',
             'BUcash-1.3.0.0-osx.dmg': '2840ed819147737625a5cbcc97c4c1957d4fa72006ee2217afed1d6b6057b97a',
             'BUcash-1.3.0.0-osx.tar.gz': '786c6b5358de2f5d0b647f985a33c2ef58c8a0895a48d527f1930b15a656f5d7',
             'BUcash-1.3.0.0-osx64.tar.gz': 'ede6b05001400f1eead6c1e59bca0cd967f4de6ecaa57dd411657f9ae235956a',
             'BUcash-1.3.0.0-win32-setup.exe': 'f7a09b6cfc1867d7e754d1acdb0fb04100951cbf70b6843111e8582b8b2a643c',
             'BUcash-1.3.0.0-win32.zip': '7078eebb0538c7ffcfcc1e4a51e505b769e37cab69d6670d622ba9ed564a3114',
             'BUcash-1.3.0.0-win64-setup.exe': '777aa174b3b647685c3c19e360288c4e4f99b70b0a8629acce7048cacf6f8efc',
             'BUcash-1.3.0.0-win64.zip': '44e7641432523e8e9d54240085e62d76901a4c3a99dd3fbc9f3aaa7134958a29'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.3.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />G+thT0OfLDakdmX8rvs3pV3YAigSCNV3d2TmUm/6gqYQUkIjBFGcFtwncsAp/KbbXM+Vwm6locQ56eocmlOoz3k=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
