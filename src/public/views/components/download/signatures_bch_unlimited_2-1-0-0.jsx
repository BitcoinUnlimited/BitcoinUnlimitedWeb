'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bch-unlimited-2.1.0.0-arm32.tar.gz': 'aed25c89d5621eb8db77e0053d1d739baa8a9c3442527e05a9289e500943b741',
             'bch-unlimited-2.1.0.0-arm64.tar.gz': 'a602f5111956065939e481e62b41b2442cc8a136e8a1709e36eb8ee762e2b82c',
             'bch-unlimited-2.1.0.0-linux32.tar.gz': 'f855536966dd794a093effcf662a950adb97f048a7641cc9fe1a0ffcdd437cb9',
             'bch-unlimited-2.1.0.0-linux64.tar.gz': '0274e17beeaa94fea2cade28a23c9e47ea4d2eb318a5ff4d883fdaa20750ae7c',
             'bch-unlimited-2.1.0.0-osx.dmg': 'ae0e214ac780be2d8a67f3444e8a5447d175bb0a55870fc69025b03fc2e3a13e',
             'bch-unlimited-2.1.0.0-osx.tar.gz': 'f7cc8bd032c6cf9b592a69a7c236f8e19f3ff86c0f54d8a0e76462740c7cdea5',
             'bch-unlimited-2.1.0.0-osx64.tar.gz': 'e76d87bf217b309c9a81fccb6f670a24f18488935b202d5c47e52521268ac0b5',
             'bch-unlimited-2.1.0.0-win32-setup.exe': '905eb6bc9fba3cc71c872944ac2b565ea361e20679495b1201f37db9a1837758',
             'bch-unlimited-2.1.0.0-win32.zip': '868473631e195a1e1f4dfcc761c0b3f6d84a64cb1b9e43847450bfb7e228da44',
             'bch-unlimited-2.1.0.0-win64-setup.exe': 'd94143894c4ccb5ed01658cb35e68a08b63a400d75bdc8ef10eaa633e3afff4d',
             'bch-unlimited-2.1.0.0-win64.zip': 'df91d6e080b8b1626a9f1cf8d5d36d83393c2361815d7fad74f6d7bd6c6d2842'},
  'program': 'Nexa',
  'version': '2.1.0.0'}`;

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
                    {strings().download.signatures.signature}: <br/> INgQTI0MuxH+vepA+Ot4dpSC7Tc4psvfrryAOkU4fSMvS5TPhY+KqQP5+AJUL1lbMImat4HWqiae5uGcZa0DeE8=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}: <br/> H/gNUI64j+a9+CkZiQY0kQlCv+mUEv6nOPwg6p1Mw3m7df/9IyfgsuzrwM5JtMb0GA53/JggLVLA5ZpJitTcTvc=
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
