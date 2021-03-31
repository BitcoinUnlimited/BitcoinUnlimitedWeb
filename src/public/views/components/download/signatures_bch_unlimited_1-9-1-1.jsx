'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.9.1.1-arm32.tar.gz': '4201259491852d94bb52cb9ad6fdb19536b14b89c130eea9ef639e3cdaa5e5c5',
             'bch-unlimited-1.9.1.1-arm64.tar.gz': '1b1471e4c63f647a170a2ff398862a1548aef930a5a93e3742d494306a34a989',
             'bch-unlimited-1.9.1.1-linux32.tar.gz': '24d10f210cacf11d8d9d39a96fe092003ce267a5c2d63305dcafc450ee6676ac',
             'bch-unlimited-1.9.1.1-linux64.tar.gz': '1f3a784a3422d882cafe862fb1e671cab551b93703ef69b2750e914fc0a60b4b',
             'bch-unlimited-1.9.1.1-osx.dmg': '1616a590df4e3ac84fc566af075022a9a50aff53e4a3ec67acc8b020b6246c71',
             'bch-unlimited-1.9.1.1-osx.tar.gz': '91e7e73f583f5a0e0d00bb8a6e09982c13560e75818742aa4b5ffbd5e4ea6229',
             'bch-unlimited-1.9.1.1-osx64.tar.gz': '4d1712aa5a015bfa971f1ffa3bdb60c358d99221e24d416718f9e8863c38e535',
             'bch-unlimited-1.9.1.1-win32-setup.exe': '1b82ad7f80ec87430ded16c43e60595a17e006e50939c2e3ccfc5e136a39afa4',
             'bch-unlimited-1.9.1.1-win32.zip': '0ddc8e0ea6c0cd1f673c57917dc93765a51cc7fd2c2c43df49a82b8ada54450d',
             'bch-unlimited-1.9.1.1-win64-setup.exe': '5cb2f74103be2da225ebb6aa59606aea99cb0e5041b0f6c68f4102bfb22a6399',
             'bch-unlimited-1.9.1.1-win64.zip': '8e955c093ea8b082beb0f6eaded7b8005dd161b4dd3490f1803f173757797263'},
  'program': 'BCHunlimited',
  'version': '1.9.1.1'}`;

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
                    {strings().download.signatures.signature}: <br/> IJEcxzoH4IF+NAsn0c8t82wunqIG8qh8616r69MAlQLYbW/XtLvxG0o2xV/Qwu1NzA1jkLp+pho6jf70THfjbHk=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> H4iuLMNZTrD7KaRSXUcUVIjN3xJ7Nl2eWbROoNXUnHkeVMVwzhmlnKIMgIBCF/3a53Z9wI+EA34sl1LyXT8yDZE=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
