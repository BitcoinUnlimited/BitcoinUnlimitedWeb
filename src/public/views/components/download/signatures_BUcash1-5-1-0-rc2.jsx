'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.1.0rc2-arm32.tar.gz': '60ca19f6a54e8b38f461d377e6b7b423256b97ffb1611c7509bf5221d2dc9d20',
             'BUcash-1.5.1.0rc2-arm64.tar.gz': '5fb54257d34eea6d87d37c8ad22822d4ea73341257d6e8c6e82898f3b9f7a233',
             'BUcash-1.5.1.0rc2-linux32.tar.gz': '15b45d081d82c357cda02e3bbf1c546a347a18f7ac8bb8f368989b90f5ba0ab2',
             'BUcash-1.5.1.0rc2-linux64.tar.gz': 'e22f284b1dc066376cc727a34f22809ec926e2e80e7ea02658c7a6aaf3a78714',
             'BUcash-1.5.1.0rc2-osx.dmg': 'ec405696e25ef904d7aaf07c032dd6a3c52b04aef8f6b2742be5c0ff4dd20a88',
             'BUcash-1.5.1.0rc2-osx.tar.gz': '6d7ecbf7e140f8144b159a85bd6b7e17a84b7aca376b1428867d5ef085cbdf4a',
             'BUcash-1.5.1.0rc2-osx64.tar.gz': 'efb88b1b167e6e8bd5fe28ef3f5919b7443db4614722134c047ee20c0583686a',
             'BUcash-1.5.1.0rc2-win32-setup.exe': '405792994ea8b8fe50a6e2f21bec2ebe12220b5c0efec73f509d1868f57cfda8',
             'BUcash-1.5.1.0rc2-win32.zip': '7d8707f92424cf56f1e05701524746cd49bcf25897303286ef934427503383e7',
             'BUcash-1.5.1.0rc2-win64-setup.exe': '1b6807116856bccae6b3c8c3179a036455ebf4d52ff4026b57285a3cda271109',
             'BUcash-1.5.1.0rc2-win64.zip': '049772150461190f60aee0b1da0a397ee05fa68e4b1e305f3de483b71cb317dc'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.5.1.0rc2'}`;

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
                    {strings().download.signatures.signature}:<br /> TBD
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br /> IH+KCnDc8GUtXpljEm2Q+AsL06wLSD3Nk1G6EzSox1LbfF7wdWAWwPbk18WJtw+NELkyCLsO39wp8+3zmCddupI=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}:<br /> TBD
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
