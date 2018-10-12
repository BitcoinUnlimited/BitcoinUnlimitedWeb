'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.0.0-arm32.tar.gz': '2abfb1365206f10307b9e3edbc0c35f7e83b0f57c4ce0e6c3e1767c19014bb8b',
             'BUcash-1.5.0.0-arm64.tar.gz': '726eba62d4c43a8746feb8f92816daade1cf7ad4d406f787183274a5013a7a06',
             'BUcash-1.5.0.0-linux32.tar.gz': '8c9c4df8e4e510d8bb3f2d0015cd0fe7fb7d9eef58147644b3e215b40e820585',
             'BUcash-1.5.0.0-linux64.tar.gz': '3ab98af2bb76e80f68a46d16d3db1fb236598dd725c1f464c45240edea4c736d',
             'BUcash-1.5.0.0-osx.dmg': '3efaa7327aad0a570e0566112cfd00c6efe5194b162252dfa60bb7c8b278e132',
             'BUcash-1.5.0.0-osx.tar.gz': '0a0be5d2fcd985a3e9dc66e52b6e71a3a0f34f8e663024dd0a410f60dd5baf1a',
             'BUcash-1.5.0.0-osx64.tar.gz': '94ac8adc89036934458a447e9c196eadd56a2786ffbb8cdd2e666884aada1f05',
             'BUcash-1.5.0.0-win32-setup.exe': '851be36bb9f0cb3d104646e7d130145a57f74f88583997274fc3410e80f2da21',
             'BUcash-1.5.0.0-win32.zip': '11e95fad3ff1809f09a45c609aba6a8b17c160f41dffa54b14f73208c1ac82ec',
             'BUcash-1.5.0.0-win64-setup.exe': '58847abe6b6805c737c0f0f79947080cf6afd686af2af7ca821b8deb8c4839ea',
             'BUcash-1.5.0.0-win64.zip': '054a93750f1a7e3d0fe693bccb1d4fcdb824222831a0f603c32c1971d35ce47f'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.5.0.0'}`;

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
                    (legacy address format: 1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />HGrmd7MNsFqQjmXOXjwc84E5NrB/WWWI+0OhFnbf8zN8WVuU2ortV/zTIUPMdceEDpqySOmzwHDB7cJvA7H9PXo=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
