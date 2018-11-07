'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.0.1-arm32.tar.gz': '94f1b8258d9d8252e977f113a0153b0b0d1f51874598eca47b844e08d04370f2',
             'BUcash-1.5.0.1-arm64.tar.gz': 'e91fcb26e7dc9e7fe7e00efad4a2e7800463d3a0a352c2a78891e99321aba86d',
             'BUcash-1.5.0.1-linux32.tar.gz': '500bc47142afaef18e64b328bb65273cc7143de87bd04d210b4177e12095d493',
             'BUcash-1.5.0.1-linux64.tar.gz': '48b2a814f8cd53451b416a36fe1c3083cdef0a42e9329c459b39cb7daeb4c025',
             'BUcash-1.5.0.1-osx64.tar.gz': 'dc39e50f3d267a9bb7ba5962109849f7f33807ba51ab6ea064510d27ddf9f5d0',
             'BUcash-1.5.0.1-win32-setup.exe': 'aae640d0714b6a5a0559c21d443747b6e8d2553e446266b452176d9d7d7e6b5c',
             'BUcash-1.5.0.1-win32.zip': '7e7b3c8beb7151ba694caa076ab8d31fb5391d5728b383f8c38897a7a6d7d7f3',
             'BUcash-1.5.0.1-win64-setup.exe': '355c0d381caa6740821ee66ca8022adb7ca51e3d5c4cd66a9e1c6872f3176fa5',
             'BUcash-1.5.0.1-win64.zip': 'f89fbea941072751ba23dc77aa7d01fbbf19d705a1b8fae8743753efed83b383'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.5.0.1'}`;

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
                    {strings().download.signatures.signature}:<br /> GyQVuTTi1kcxvzqIFuNWvsk56kt1b0pFHSrxMgNMm7I0VIUmJga6SoR9byFOXVh0ua5wEov4dzYYm4LZKSkKMJk= 
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br /> H3eypOp8q8BDRCsXfGw2drofbafxtLjsexX2X2PrFqs5XnQ+ahayA/v9FdOKK+ol/ObKJUZ+XZenP5VJHK7JBE8=
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
