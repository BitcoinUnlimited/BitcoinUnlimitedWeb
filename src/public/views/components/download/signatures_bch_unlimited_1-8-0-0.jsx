'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.8.0.0-arm32.tar.gz': '59500d03a9dafd6b220ea341aad2c43e840eb3a0f5b9d53f04de0395ef8e8b4b',
             'bch-unlimited-1.8.0.0-arm64.tar.gz': '48e8a9e70dd7fcee652ba8a988f34721eccd5b553aba6070c4efd8403f50ac89',
             'bch-unlimited-1.8.0.0-linux32.tar.gz': '74608dd2d9771af75d9cfd9aa9fb5a7fca15ff5970b80cd951f2480b24adace3',
             'bch-unlimited-1.8.0.0-linux64.tar.gz': 'd36da1380e2b5c5412c52be958a7583bcab6d7a7bbb8057417eb892851e8bdd4',
             'bch-unlimited-1.8.0.0-osx.dmg': '91633cb354ae41cf2ab4dd26060da9b69f00bfabc0c822f846ac9dfd9f9e05f8',
             'bch-unlimited-1.8.0.0-osx.tar.gz': '2ed65b6febd606d9c9cba4bd18ff0e1327871f484c5be0c16bfa0089d68bb19c',
             'bch-unlimited-1.8.0.0-osx64.tar.gz': '2286f4cad1186ffb06254bc0622e37c1f0f51c16edfdf85b8dd91fea83a4ee12',
             'bch-unlimited-1.8.0.0-win32-setup.exe': 'f8ce7041d2c2fde73d4e1df80ef98f27b1122534cc0a2c5acd6565a870434610',
             'bch-unlimited-1.8.0.0-win32.zip': 'c6ee7e17d03c5ffddcc9186fcc970500d0b6e5a8a3b8fe0ef73b716fd6216c9a',
             'bch-unlimited-1.8.0.0-win64-setup.exe': '79ca7d3b4bb4c1b8a0f2512e563508cec4e255453d5fae90f5acd66ec03c6055',
             'bch-unlimited-1.8.0.0-win64.zip': 'f3313c901ca4aa12d74d68599da4b02ce9d35e9a084d6821d68ad4e2151daf26'},
  'program': 'BCH Unlimited',
  'version': '1.8.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> HD8pMr7KeGFPp+EhJu525Z/t5UzFQ7XYS6YrWYVKEY6gI1un5Wx3/tVLGHyz1X3Wh+BknL3P0dw2XffYwRUzElA=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> HzCQcSdXKhKxR6uzwojVc3mBDYt3UBJCkjoLp7FDFMPcOwD+3ADpb4eBXNFT00iKLB7LV8Yq4Lqbs7Z3n6zraOc=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> IEjW/xSV7QlqDlLRRVshyd1bqTnElO7U05v5KrXx6yokRNsIZ3EiBytAnQktOpia6gr0Bow1f47FIeiZy+cNUrY=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
