'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.5.0.0-arm32.tar.gz': '4123c618f7c68199a5afaace3e3aeb879e607f9dfe2fe5c4ad754bdfc814ffa2',
             'BUcash-1.5.0.0-arm64.tar.gz': 'db9b2d6f1db65fa81234c35efe645950ae2428a7122fdb6b637db88f3efdf198',
             'BUcash-1.5.0.0-linux32.tar.gz': 'de97abbfd108cefa72d25bdae86c9745f6f19102e9845b4ae06457cd2698c61b',
             'BUcash-1.5.0.0-linux64.tar.gz': 'ffca9f54cc35fcf6cc5a8bd96b4b9c9efa3f474528ab29828d4e4b6e84e7e33d',
             'BUcash-1.5.0.0-osx.dmg': 'e0a8bbe8d130bcebfbb68334c1f643a55e4eea9f5b225f8f7f84cfe915ad958a',
             'BUcash-1.5.0.0-osx.tar.gz': 'ebaff06540d569f746b7c5c62b0e249cf89a3f6e05e5bac8fc5d7de0aeeb2285',
             'BUcash-1.5.0.0-osx64.tar.gz': '0d5dd5357592083cfd2351e8bd98d71ed84d814791600980bd10463bc342ae9a',
             'BUcash-1.5.0.0-win32-setup.exe': '2e820308fd0f49a23c1b1ccddef029992351a266ab35a44b30bf9ff5bd1dd751',
             'BUcash-1.5.0.0-win32.zip': '5ad2c155021e6eddcf79c70cc932a32e75f35540bbaed63590c9249e95dda8af',
             'BUcash-1.5.0.0-win64-setup.exe': '3ec5b54d6a9df6c57682751d5b29ff42c4cc0bb298b6e90f43c1c8728397f70d',
             'BUcash-1.5.0.0-win64.zip': '5433f404700b332bcca442de2bf423499b51a5969248e506c1a05d5853202502'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.5.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />HJnMEhcJ4fb8D0JQ4n+cJdsfqxFUKLA5svu9JrkjIDLOIK0qfkSMTWImIS4PQqZ+h5HG84h2NaezohvMw6lszKQ=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />
                    <br/><br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
