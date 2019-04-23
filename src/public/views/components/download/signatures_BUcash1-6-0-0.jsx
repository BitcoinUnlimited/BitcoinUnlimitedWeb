'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.6.0.0-arm32.tar.gz': '141b7b997c666e4a9f5f1e7a2f8f373b0e7249f126f67ab6425e7da5df499916',
             'BUcash-1.6.0.0-arm64.tar.gz': '8f4c031e92e6a1c3793b9b34ee2613b53cfa19de7bfbc3285cf50981929618b8',
             'BUcash-1.6.0.0-linux32.tar.gz': 'b944270128d12c14413a69623c9f6e07edd613b70b84a64c28a0411dd7d3f65b',
             'BUcash-1.6.0.0-linux64.tar.gz': '214abab7e5bc2b4df13aed33d14dd4e7935fa9106a4e92994412ffcb9df8fe98',
             'BUcash-1.6.0.0-osx.dmg': 'd3130ae6a341f1c50efcc2c24f227b2528909b7637c6aceceedb35754f569c90',
             'BUcash-1.6.0.0-osx.tar.gz': '867188ec83102e63ae982d2e9cf4eb8d9c3e3133b64c61a6d1464dde193b4a99',
             'BUcash-1.6.0.0-osx64.tar.gz': 'fc557cc9380ec3f010cca365d7b10a2e1c119ed7d45d18c0a3b4b5e5b95815c3',
             'BUcash-1.6.0.0-win32-setup.exe': 'e723648a99ba9446a8d6a2b4992d3f5f738f2bf516207902b5b88b0fadef66e3',
             'BUcash-1.6.0.0-win32.zip': '06a68ad475c17f893949cd5c7b77b939c3509e78b51d2698f292c0edaa2b1a5a',
             'BUcash-1.6.0.0-win64-setup.exe': 'c2d61d09f3381757f9c51d83400aaab8d91f012a093fdc7cbe9de6565ebf6f39',
             'BUcash-1.6.0.0-win64.zip': '3d315316c656ad5dc3121e9983438c3c83d474c8af90933118f76e59c73d3730'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.6.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />Gz48YtztTZ0N4TaizHi/idfBitVWLkXsP4k4F/q50knEdARaJJEdxuAprzLUyp9IrA/MXFAEq9WiKhIH9eTsaAU=
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
