'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.7.0.0-arm32.tar.gz': '1fecb8cf47878a26abf8201ca5cce78e266d8f0097c748c383b5b7fafa665798',
             'BUcash-1.7.0.0-arm64.tar.gz': 'c17cebb1d04d381aba6fa76233a11017cd1a5932d8cb0aefd6a430174045e738',
             'BUcash-1.7.0.0-linux32.tar.gz': '82f4eeae25c8e1b95fc9b3c98af802388f0b28365bace54af0c88ace67a90d55',
             'BUcash-1.7.0.0-linux64.tar.gz': '66345fd4b813f4c5a704ea7fdd60027be467008b10cf32db203146724128d140',
             'BUcash-1.7.0.0-osx.dmg': 'd0e231c6d5305609063c9f978dda62c92e0d6c26dbe0754e364d1ccb2c4d9bbc',
             'BUcash-1.7.0.0-osx.tar.gz': 'a09ff385f2488e66fda38e69c401cfcdfc8db053221f9155855b4b3b9b8edc0b',
             'BUcash-1.7.0.0-osx64.tar.gz': 'd0e3d2d5386e9501819095d0060f48be940c0fc9f84e6bc97eb03674d8986514',
             'BUcash-1.7.0.0-win32-setup.exe': 'f0bc6a5797e2c5fa585af08022e19a52a51945af4e17346089711c0d1304e080',
             'BUcash-1.7.0.0-win32.zip': 'c4609a574ec8978b7512f6551929c55ae4cc2894c5055dfacd08c84023e1200c',
             'BUcash-1.7.0.0-win64-setup.exe': '5664f6c1d13fc4a0194ed66e05072e2b6a46e86f14b84cf23a5497f5732aad53',
             'BUcash-1.7.0.0-win64.zip': 'acb37a4cef821de500d7890dddac57c1b63ec370ba40cd4159ea58609682930b'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.7.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> G0S5rSzbFq2/M+unbdYaKOvaW6UPvXDXjnVWP2kmIa0oYdzvGBE3wVdk5XINxyk0kHsQMEl6NBVQ+r7jS6HdXdU=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> H8eX3ALL1/FC2BfMQIx4sNpZtpihyTXmqJ5/4fjcVtveDx0Iqd97W0CqsT2VdLGmhb4lEHf6rlDWzovPDuYsh3w=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> TBD
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
