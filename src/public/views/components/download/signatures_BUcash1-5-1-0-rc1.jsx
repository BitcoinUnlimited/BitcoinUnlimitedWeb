'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.1.0-arm32.tar.gz': '0bd10439ab9a27912232eb8267da1f8aa0319c7c236e6574bbab5816c0822814',
             'BUcash-1.5.1.0-arm64.tar.gz': 'e28d6ae7212c4e829543cede6bc054bc3153e8be8cb05a6932752381856e58a0',
             'BUcash-1.5.1.0-linux32.tar.gz': '79055b4c57d6e644c6f85dceb4399446d38b95c9547225c550422c54376ee5b8',
             'BUcash-1.5.1.0-linux64.tar.gz': '6c86cc2cc2eb11339bb98655ba0512ea97a1a943154c9a565b2ca038e27c1a25',
             'BUcash-1.5.1.0-osx.dmg': '873bb44d24d77797398d9e4a024ee2e7e3398e0272a336c47d17cbb2cfa33005',
             'BUcash-1.5.1.0-osx.tar.gz': '0d785fb8bf414a771d0a07fb5f79ed5058bfab2bc1d1bd07e3bd53c04cbe368c',
             'BUcash-1.5.1.0-osx64.tar.gz': '3f11a37971557f9f18e4dee5b75a275113f9585332357b603c8bd61da5cb3456',
             'BUcash-1.5.1.0-win32-setup.exe': '497efb78985882a859418704663b470e931209f13224c817c41d265b9c4557fc',
             'BUcash-1.5.1.0-win32.zip': 'd6e9136c47c94548b76b4be090cc22abeff5c1b7e75d2e4a05d95c532344646b',
             'BUcash-1.5.1.0-win64-setup.exe': 'f6849518989161667afcf1aedb8c2f30c2b046a74152524286a70f3fe17b9e23',
             'BUcash-1.5.1.0-win64.zip': 'd84226689eca51f59924051fef731909f43157a0b80d4ff4920b8ce3025a2b50'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.5.1.0'}`;

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
                    {strings().download.signatures.signature}:<br /> HMyHmSRc+3hyRP6jmts5VkaCh0JaBKN7qa1FqiM6yQ4hUPN2AA5NxQdw72Uk+GeMMRmvfaV7RAMS9Mt1O1lQLf8=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br /> 
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}:<br /> 
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
