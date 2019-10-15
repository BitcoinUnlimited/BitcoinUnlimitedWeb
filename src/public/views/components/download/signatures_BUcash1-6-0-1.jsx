'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.6.0.1-arm32.tar.gz': '16163c95e25883708e42cacec6915f9221df7553972ba4d377afdc9bfe7d3a70',
             'BUcash-1.6.0.1-arm64.tar.gz': '82c82d0dffe471583d10a102ec1c29be4b7ae362338701b01382b212f6d43b21',
             'BUcash-1.6.0.1-linux32.tar.gz': '4ab5b976fd11ac4607df19bcb7c21139475cd8548d2b8faa68b17e860ae4b048',
             'BUcash-1.6.0.1-linux64.tar.gz': '68023e6faefe7cfee8eee6cffb6200f52d47aa89c305323d97063664b514c94c',
             'BUcash-1.6.0.1-osx.dmg': '53fbb20d4d06a7c583838d300f6233e2e35667721a2040c9b0464889849d6ad5',
             'BUcash-1.6.0.1-osx64.tar.gz': '0b72760ab02a8c62f4be35e8fcd4c49f44db26c3a23d145249b64fd7237f509d',
             'BUcash-1.6.0.1-win32-setup.exe': 'a32dfc1e28d68c513d3ad5e124599805f6d61bcce9098a1fc93fcdd35deed895',
             'BUcash-1.6.0.1-win32.zip': '9e20b74e73e482388a397530c59ac7ad1fd4c1584efa4b373c3b460497678d96',
             'BUcash-1.6.0.1-win64-setup.exe': '5ee8b3c9177e48e153f4870049a61eb86a6e8537e01409543cbc2de67eb8bab1',
             'BUcash-1.6.0.1-win64.zip': '074cf10d9438a136753abbc004269c216bb495e6df03bef532f2946f03104077'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.6.0.1'}`;

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
                    {strings().download.signatures.signature}:<br />HHr2SmH6NOMaEE5c1lCKVBUyPRiFv/R0HYY7ZowsftlVBwkMpNIYz0OsyJWF7Qe+WXzMbR/MYMANK+mqg1E/N7Y=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />H1Grlp1OyNYNf0L11IClFGPbP9ZvxxhL0DHhs18rT3pkB32YX4Y2Ns8tIbbwNctRoBdc3XxLYyk5nJuo2aioVjs=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}:<br />IJrBWgyXAY1Ch59JU8rfeJJmfIcvTBYJORUD/RxPd3PfKLRzP/K2v7tXL1Vtk8ZLRoynU/I8IqMYxVaURThIgcQ=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
