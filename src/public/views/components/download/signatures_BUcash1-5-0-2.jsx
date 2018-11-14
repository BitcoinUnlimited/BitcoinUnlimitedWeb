'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.0.2-arm32.tar.gz': '60836b7ed043ea4d5da35a8e3de968487cda29e117b0ef7412dcb587955b5ed1',
             'BUcash-1.5.0.2-arm64.tar.gz': '485a59b11664d20eb91712feae606760981d815d9093108b7428a28e878a7594',
             'BUcash-1.5.0.2-linux32.tar.gz': '28da2e74f4785d3fea2ab8792b207b468d83557807e9a6678fd6a403b14c5441',
             'BUcash-1.5.0.2-linux64.tar.gz': '37000d4f730fd318f23349336d4befc5bc50deb19cede636de25c29f54508371',
             'BUcash-1.5.0.2-osx.dmg': '407519892b27a0d8e36ab6ff58afac5decaae928abeb33b7508f8d2dd988f5cf',
             'BUcash-1.5.0.2-osx.tar.gz': '04dc9bef043533055c4025a5a3091ede5be26924fc12bf474656e257d8122089',
             'BUcash-1.5.0.2-osx64.tar.gz': 'f78d69300a1efffcf801b1c1bba327aa2b2df9661d20d291fff4d293db1efab2',
             'BUcash-1.5.0.2-win32-setup.exe': '744ea14c955a1212ab9ecbeed37ba8fa6b3262fb924006657b2dfe9fd3dc307c',
             'BUcash-1.5.0.2-win32.zip': '04bc64da570baffc67460076c6eebd6e5e51223a097bf3af8dc1bcf4ab38466f',
             'BUcash-1.5.0.2-win64-setup.exe': 'c9fe20ddc4789d96efbd9aae615af4b26d4ccad558895954c19f007f96df3583',
             'BUcash-1.5.0.2-win64.zip': '75a46922f10e757bf005b6a5762a133636536055ef9449ce936ed0d8fea75486'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.5.0.2'}`;

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
                    {strings().download.signatures.signature}:<br /> HP54QUVdg9Cq2FfcmfEHXvd0nGITKiKUBKYpd8aX1l35doCXueE5kT3dqoGpuu24uHWXiT0a/uG9B6tpJOMPn6E=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br /> IMldfG7eaTapBgifxEJ0AAa3yxjD/KDNlctxz9PLcf0hb2WreqaNMl8RXWtgyStAByGibjFlvY/8vGJ3y6CJ+T0=
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}:<br /> H59ofJzgcZAs+xowqEG77ZOXAVNatLNzsc86ITaFX14LD8NkJwBC8CY0GNUMI3pxtFEP1kOxo6v7AJdvCtGYb7Q=
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
