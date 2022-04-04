'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.10.0.0-arm32.tar.gz': '40ca01aa122a2f309bec7fb1090325129889a5e5146a2a097fe867e0ca6847e7',
             'bch-unlimited-1.10.0.0-arm64.tar.gz': '8e13af7954450c4419b561f00105a56d26d7197c458ede2fd2d3954eafdbacee',
             'bch-unlimited-1.10.0.0-linux32.tar.gz': '1a2915ef20398ec05c3139626fd502dcf05b7ce8eab5ee62e50670c2bb63680a',
             'bch-unlimited-1.10.0.0-linux64.tar.gz': '45ee6649dfe4fea90b46cbd83dc34ad61129a42d53bc5c1926dac6da52719ddf',
             'bch-unlimited-1.10.0.0-osx.dmg': 'b0a5c7cf2e7a268bc0ce24d9dbe84470517b3ad164055ae147a0ae64d36543b6',
             'bch-unlimited-1.10.0.0-osx.tar.gz': 'bd9bb9ce8873a4fdc82b19806d7de93f48444477f387b9716184b7a458a74441',
             'bch-unlimited-1.10.0.0-osx64.tar.gz': '5caf202325a510ce7d59a4b9f9c6b5eed6b42e00479d444f720220d8e8e546ae',
             'bch-unlimited-1.10.0.0-win32-setup.exe': 'c89d9a1bbca3e5c2dde5a773f613e9280fa6abda5cf68aba3b7e6401dfcbfb1a',
             'bch-unlimited-1.10.0.0-win32.zip': '68875ad0e73919d4956b707720af8b8e583b5eb4122db7ebd389c400e617823e',
             'bch-unlimited-1.10.0.0-win64-setup.exe': '322e8d50b417f6c87b50e34b7a7856dbe966a9556add6e8646cedc8d3919d74b',
             'bch-unlimited-1.10.0.0-win64.zip': 'a3dc38415bb25130f9b5b0b21ad49a5c02b507620d8a9d74e368f164f460525f'},
  'program': 'BCHunlimited',
  'version': '1.10.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> G5aBklAciLMnGRqT52V11qB16adHqSkPthEBx8jsp36bELp5ME+iJnC0Bw7/i5/l+l/M4V1mwT9nf/zIeFR85/k=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> H338fai+WmjQ55IUWynoREcl5TKzvk4UP+GwgFFaRieHchpOKyfPYtSp3VGshiiDT2C9tioPR1Lxo68wDS6bFN0=
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
