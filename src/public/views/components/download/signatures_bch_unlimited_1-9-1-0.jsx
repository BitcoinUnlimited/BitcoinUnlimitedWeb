'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-1.9.1.0-arm32.tar.gz': '0d9a3677a9d77cea06a5497285662e8c31f75a88aa222694e09f9411346d5db9',
             'bch-unlimited-1.9.1.0-arm64.tar.gz': '10adfe8e4e69dd9a7564910713cf6b2e52c44f0c1086dcd260be24dc65c52b3e',
             'bch-unlimited-1.9.1.0-linux32.tar.gz': '4c2da46a9740f00adaa79b562e810c950efe8fe1850436d55f2326fc0e5f9edc',
             'bch-unlimited-1.9.1.0-linux64.tar.gz': 'e3f5b3b24f0310d85ca5f5d91880d570cc8639bd6afaea13bdb96482d3369382',
             'bch-unlimited-1.9.1.0-osx.dmg': 'c0c2a77d3620d86e1a266a192fa6f2a3e891f65af7a80c6608433f9d19b8b1e3',
             'bch-unlimited-1.9.1.0-osx.tar.gz': '06879b47ddedee26d7bd50582956aa0ae45d99f4f42a887057ae29ff32880d75',
             'bch-unlimited-1.9.1.0-osx64.tar.gz': 'bc95ad4f37c95f495ea495c00ea6bca43e6df439b15f326c691aa9dcb4b48574',
             'bch-unlimited-1.9.1.0-win32-setup.exe': '1d1ca810a4de9b592b368275a747399e50e5335764012330891e0780542c0245',
             'bch-unlimited-1.9.1.0-win32.zip': '4c95eeb7d300c35307384e39a4cda8814ecfe2e47ee9e25c5f0194a2acb01922',
             'bch-unlimited-1.9.1.0-win64-setup.exe': '5310e02f054977fd605d371bf6f104fbbeeeef701906a04e85f5895542e71bfa',
             'bch-unlimited-1.9.1.0-win64.zip': '5de58a30c53c8da6dc46f1fb442e4ca2027ce9407f15b841cf52a4eb2ce085c1'},
  'program': 'BCH Unlimited',
  'version': '1.9.1.0'}`;

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
                    {strings().download.signatures.signature}: <br/> TBD
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}: <br/> IPtIa6fiqI0wHH2w4VWFpddPVQ7UGbsnMQ51awFiP8EEXU7NORmwCVScWZaCZCuDTJc356KhoFairOviZ0pJI8Y=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> IAL2UmWpA8MUJkuaaXONr/hMFZ8xKJRu7cqp96Y9utkAGoe1S4YL9rCPtDCNODrfR3lV7gaDVIf+53FiZgtRHXE=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
