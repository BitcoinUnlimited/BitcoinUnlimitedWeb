'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.9.0.1-arm32.tar.gz': 'f4643639286f1b6bd620afa5294430b0965f4a3ebe68ffc5c2697f9bc2632000',
             'bch-unlimited-1.9.0.1-arm64.tar.gz': '8a38f00cf7af6255a8c59998932678c43f3ca6ef70f05bb9e9b011961dbbbeba',
             'bch-unlimited-1.9.0.1-linux32.tar.gz': 'fa6c30073069747338bb1ef5f264ea59540d4895f59b6fddb721c8c423c3ea5f',
             'bch-unlimited-1.9.0.1-linux64.tar.gz': 'a331f983cda2441be0f485ad656c206860dfe770db881e7216a790784d87454e',
             'bch-unlimited-1.9.0.1-osx.dmg': '1f42fd36c2231a3e84b0f5e82212c28ed52c69e78dee192114094227361eeded',
             'bch-unlimited-1.9.0.1-osx.tar.gz': '5c676ded740f68feed2bb87f5f5d39d4ab3b9f6041ca645bc8ec140d626da468',
             'bch-unlimited-1.9.0.1-osx64.tar.gz': '9217cd0c2eb2900b9355e1eacbd2b6737019111ddc27687d7e381fb898dcb8a8',
             'bch-unlimited-1.9.0.1-win32-setup.exe': 'aff3c305f65688d67866e70d7c6f9d967061537ab69cbda0233d679f564943ad',
             'bch-unlimited-1.9.0.1-win32.zip': 'dfaf13725e7f7ca0edc3e5527005be1f3174b626fa4f4a0517e0dd415f0a9a34',
             'bch-unlimited-1.9.0.1-win64-setup.exe': 'c7aaf81a28b4b0688667d6a6cbb90d1fcddd83d88080ba921788fb36c2bb95e0',
             'bch-unlimited-1.9.0.1-win64.zip': 'c76c7a46d9c2211a429037611ed077d82f74bfdc8b383c867c5a6db25245a58b'},
  'program': 'BCH unlimited',
  'version': '1.9.0.1'}`;

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
                    {strings().download.signatures.signature}: <br/> HChxPIQGSkguh0X5C7CexUDN0FRLLAdrrOwQb27Tjq75J1UYClagtceaF0nDIVESfC7gxh16XIeGMDnluuQZyrA=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> IKQRl481vlg9mwl86t0ovxNHmWcZwQE5n8PvsccUECLyK/qP5MzK/1c/ED9biIZDprdIUjxO/Xr5MtD0zzxti0o=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> IC6qFANoKp9EprUjeXurfCbXeINP0wtwxKNcYGtdft7gCwfJT4ZTcT6mhnqB2hxPWPPWKR13sQiawnt7Xh/3F8U=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
