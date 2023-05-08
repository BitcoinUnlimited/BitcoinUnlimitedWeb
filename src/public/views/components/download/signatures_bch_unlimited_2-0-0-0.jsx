'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-2.0.0.0-arm32.tar.gz': '8b396b880283abc4398e7172e63dba736e578ffb2c11fe8b0a882182fa60cb8c',
             'bch-unlimited-2.0.0.0-arm64.tar.gz': 'e5a7415add09baec51e9751e042f123e6b6811dffe60bcd652e15ecbe7ce8d1e',
             'bch-unlimited-2.0.0.0-linux32.tar.gz': '5e0ebfa7b0826720954a41699901aae957d12d7258af57ab5a1c3d9c1c962354',
             'bch-unlimited-2.0.0.0-linux64.tar.gz': '78994688dc8149dc69cbde085c068c42fc80d90b38e2e5988c23617581e341f2',
             'bch-unlimited-2.0.0.0-osx.dmg': '5c89c8b4cfaf00d12435eca375c9b36dbff35151a6ec62edd8c111b72e41b546',
             'bch-unlimited-2.0.0.0-osx.tar.gz': '961bf669c79b4b1708196e6e115845ce6c390cb02fe25289cef50055ea0c551c',
             'bch-unlimited-2.0.0.0-osx64.tar.gz': '902c6f6dd4c3d573e40e30f7eec4877271d3f36354f5bdd53bf96f6d5eb4c5d0',
             'bch-unlimited-2.0.0.0-win32-setup.exe': '68e731a4dc78ca2fd7e6d2665c03616cd6ff7ef94ae40ba8c096fd288c247fbf',
             'bch-unlimited-2.0.0.0-win32.zip': '5fafdc8533eb54ee669d0359b1ac821fe55f4b92526093b84479b51afb54d51d',
             'bch-unlimited-2.0.0.0-win64-setup.exe': '9ac4ca8dd67a506f49eb5f47b55a0dd840125ed261f3a7b0e6ce58a418aab1c8',
             'bch-unlimited-2.0.0.0-win64.zip': '962d77f91aa32bb2f331fb4b440181f8cf0329f89e2a3656d80da5f9172a348b'},
  'program': 'BCH Unlimited',
  'version': '2.0.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> HBF0mzPinSnMnOzmXRNBw55GhCjnt9GSGfVUsvqdsHQdRfqw3tCEP0HOTe8UYP0p/cqbI+ws+h/3EezeZ1vmw8c=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> H/RzKAIhAD6SomzfORSo0etW66oMl/kNxG6BuIHNkDJLCypzq0iEjfKCy79kbkfjoBeKyfjISx0XfO6HO6RaskM=
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
