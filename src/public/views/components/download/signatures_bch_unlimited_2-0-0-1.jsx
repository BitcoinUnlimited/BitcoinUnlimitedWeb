'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-2.0.0.1-arm32.tar.gz': 'd7e2fa4f212ee18d00d60692434ec7be1b3006b147db37da79bd57fd359557d3',
             'bch-unlimited-2.0.0.1-arm64.tar.gz': '13127712391e4eca03c77e80c3cd3797b5980b138ac7dc8b80a7490a80c9cc21',
             'bch-unlimited-2.0.0.1-linux32.tar.gz': '9139927cc25ff94cdb4eb820cc8cf66921d49cc83ce54a0de3ba8b78a6e85eb4',
             'bch-unlimited-2.0.0.1-linux64.tar.gz': '243b393dc79134b8595cab21faada21ee9b57461bede948a25823248208bb32e',
             'bch-unlimited-2.0.0.1-osx.dmg': '6bafc83545b3af8955e0f32ec5cc76fa533d7d12f962c51734bff31e74c529b0',
             'bch-unlimited-2.0.0.1-osx.tar.gz': '4fdf3ef9e4eedfa2d57fa52e973ba72d8339999bdd6bdf22dbad7c8fe2264a3a',
             'bch-unlimited-2.0.0.1-osx64.tar.gz': '8f749f126abde2ea135d0762858eeb01d3809e250a8194e13f801ef215b3f5d9',
             'bch-unlimited-2.0.0.1-win32-setup.exe': 'b3632d915f1591337352d0abee14d3ac49eff74b4a3bbff7e7ce47537fe2769f',
             'bch-unlimited-2.0.0.1-win32.zip': '5aa57100b5a5020ace0b9529bea45d35fb4f8c22eeddf0a4931f89c3aa9bc378',
             'bch-unlimited-2.0.0.1-win64-setup.exe': '2838259fb2f26d6860f82a913a46ee7b643f5f0bb7b5a22134c5f77d0a167c8f',
             'bch-unlimited-2.0.0.1-win64.zip': '044e4921af07cbeb3af0d681719f4e020a7a71774122542e64450f337a1171a3'},
  'program': 'BCHunlimited',
  'version': '2.0.0.1'}`;

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
                    {strings().download.signatures.signature}: <br/> H2IhgaNYTcMw4ofShGuHOZ0rY/zF+gGuzMY1dT3E7/BpPWCuRnuO3RRIcrCZKI+16FRjalXyi73pSV8+ptPN0nc=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> IAYtUuvEbvYX4p6f84mV30eSrsg14nUueelPpwtcJ5XkM9x0++YJval9nkryVgt1A6JivJiLO9KjnSIEku+vwP4=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
