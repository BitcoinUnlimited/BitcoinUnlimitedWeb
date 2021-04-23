'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.9.2.0-arm32.tar.gz': '68ad6fba9192dbbd72b4ddc820d803f9ab154c36882f5318fdd28a101bd8ddba',
             'bch-unlimited-1.9.2.0-arm64.tar.gz': '5c1d613ace7352a8f88150e7be8ef6eef48fed0405bde4637168b6227538970d',
             'bch-unlimited-1.9.2.0-linux32.tar.gz': 'c76857663f24230c30e78cc2005d53b8a8375d5bc4e578d0f5787a23d5ce486c',
             'bch-unlimited-1.9.2.0-linux64.tar.gz': 'd3944e7680d7d5a2303bd3a1ecec590904cd180f34cd70504b5e29c7b0fa4586',
             'bch-unlimited-1.9.2.0-osx.dmg': '0dfbe54c5888d4f0f4051b819be0186e6e1e5a84b697e0987cca07486fbe2697',
             'bch-unlimited-1.9.2.0-osx.tar.gz': '44848e5e568fa7bd6768181fc267141641400fd0f24bc4d9d4e6805f02ae7a40',
             'bch-unlimited-1.9.2.0-osx64.tar.gz': '4b7fe03fb86042788e4929a8f9f6af8f8aabf7f8377182e7dadd3b0f6fe96c4c',
             'bch-unlimited-1.9.2.0-win32-setup.exe': '09091bb9d4ab9a75815bf65eb54a238e8b72bc4502fb2b314404d1d032619834',
             'bch-unlimited-1.9.2.0-win32.zip': 'c804e523bf1e85b47cf387ae45009a2a929ec20d66d7594ee02f5607408ba870',
             'bch-unlimited-1.9.2.0-win64-setup.exe': '07dffae41298eab7658ed517c7aece167502d51d53a39d67bf5f5bf1d3066c7a',
             'bch-unlimited-1.9.2.0-win64.zip': 'f6b0c3a9efc2190c080fc7c2bcdaeb91a3448034ecb3524528aaa54ef7695136'},
  'program': 'BCHunlimited',
  'version': '1.9.2.0'}`;

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
                    {strings().download.signatures.signature}: <br/> TBD
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> H2lvO8/0TPBp3FmNnyEQsYdq82qXJCBmWmOboKhWvApnQnR+zSBvG5O4A9QN1XNuj7M8VovFR/AFQQijdtfyjiA=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> IAImdwqN1t62XDSCrE/JCmOQi/eTgJenyp3xvjmAeVoSHQuFJ+DqwGezu/F1lxaj0pWweWXlX1JQi4A/mbBRWHw=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
