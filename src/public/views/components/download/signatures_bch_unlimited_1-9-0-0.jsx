'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.9.0.0-arm32.tar.gz': '54acab9f497473f557995bfa0575bbd3eaae96cd687bd4607151b7f80ee3b78c',
             'bch-unlimited-1.9.0.0-arm64.tar.gz': '66f885cc6a91a4ed6c85ec9df1424e7ef63638f0fca169a9ed15947c9c0d21be',
             'bch-unlimited-1.9.0.0-linux32.tar.gz': 'e4cfed2c2f1dfd7db865a558cbb016f3bde1813029ebdb215df2e7f94fe4f26d',
             'bch-unlimited-1.9.0.0-linux64.tar.gz': '81fef8b1422a50fd49d64dba9c0dc6420663d436dfcea6c066e0f0561a753c92',
             'bch-unlimited-1.9.0.0-osx.dmg': 'a75c67eac9b09739e1e052fad3da5e9e88ff63413013c0701a7da18b7a382f38',
             'bch-unlimited-1.9.0.0-osx.tar.gz': '8cd102bc558d06ecf5593a85bf771a8b8cd30d417afedaa556ad116899a04730',
             'bch-unlimited-1.9.0.0-osx64.tar.gz': '886e6e0cc098a68be3367a421c024962bed7c644856a42addfe5b417a430a5d5',
             'bch-unlimited-1.9.0.0-win32-setup.exe': 'c23dcc9d9fc64e9f7a8437aec81d893ab661d3a7830c331cad483906d58db94e',
             'bch-unlimited-1.9.0.0-win32.zip': 'c889a4c9ca7da841aa41ae85291b31d12f70b07ee08ca37b446787abb21619cb',
             'bch-unlimited-1.9.0.0-win64-setup.exe': 'ec037825fad13fce036c5ece885782d59d579bbe7f26267b2af5326400a2d61f',
             'bch-unlimited-1.9.0.0-win64.zip': '87b1cf9eb964b0138815b1449019112cc1434cbe1b3fe30eccc90dae21b572c6'},
  'program': 'BCH unlimited',
  'version': '1.9.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> G9I7K7r2LyUL6Jm81kwuq+NIgAlryfmh1/3bYpvZTxX7eI1Zeft9Th2M9i0qep/y33LZkAIauD9A8EJgJayADrE=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> IMimA71CNmuASAUpAT2O2TT0IW0b0gnszJfIN3yCWhTxYOLu6q46DNNhl6x/kKv7YIaAdmIpjtNVMMyz+tTItwY=
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
