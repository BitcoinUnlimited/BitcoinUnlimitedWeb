'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.1.0-arm32.tar.gz': '1997f0970ff3a6a98921e763393022b98e52f01c96660482a3185167bc397eb6',
             'BUcash-1.5.1.0-arm64.tar.gz': 'ae432379e1ffe9a846d9d3eb4a55c5d9b4942a58040e7270a1da47fc16087b65',
             'BUcash-1.5.1.0-linux32.tar.gz': '31a75bd33661007d093fd16a18f799107b68e477da6dd04440782592c8f5b3e2',
             'BUcash-1.5.1.0-linux64.tar.gz': 'c3a59b79e46a09ea2a3575ac8b1e9f098274084b676fba3e717346916f3e2a8d',
             'BUcash-1.5.1.0-osx.dmg': 'a88e2728bd7da03472d339a3bb6126b5f20fd8bf79efd41870c7914156817c74',
             'BUcash-1.5.1.0-osx.tar.gz': '198904ca2dc4000ec86f3c29e140a97f790f1eafcfdccf6cec6f01aa7b751cc7',
             'BUcash-1.5.1.0-osx64.tar.gz': '8acf96594ffed4c5f8f22aa71ce7f0989776623e6e94429f9cc3983f859a41a8',
             'BUcash-1.5.1.0-win32-setup.exe': 'ece3646a907a799be9de1a08994a191b388f38053f8803dbce9f8c134ffc643a',
             'BUcash-1.5.1.0-win32.zip': 'b2cb2315cf92b39967f7f02fc391b76fe15bbdfe87c2f1b2bcd45d36d38a31b6',
             'BUcash-1.5.1.0-win64-setup.exe': '0733358574804ac680de0df43322b1c6c751eda5afb728252816186f93f2e231',
             'BUcash-1.5.1.0-win64.zip': '2bb074f8609dae5febe612e3d167ab7576ccf4b6bbc428d0fff1b183774bfc7e'},
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
                    {strings().download.signatures.signature}:<br /> G+3z7s5i+FcAROfhHH1Yo1LdVrf2PfczHoFpTh0e1UnrZ5mFAJNOOUHa0tvwc6dqccqKcbjgoU66PLzMIgfImfw=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br /> IP21fWe9I119Bxa9R+N+B0L3t3D6zvwyh8fzFiUER8VPCyhABSJ0KjxhIsfFAFYtS6CUxH3zvfazDfakdfaQj5w=
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
