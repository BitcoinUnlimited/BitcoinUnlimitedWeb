'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.7.0.0-arm32.tar.gz': 'f9c277ca84541a9d2f8c3164298dd5aafbb1f3aa237133b47ec2f58108bda615',
             'BUcash-1.7.0.0-arm64.tar.gz': '28f3eb0b9940ecf9de8f62e44cf648c83e322b3b49f9dc95206aa3a6b567532a',
             'BUcash-1.7.0.0-linux32.tar.gz': 'a8d3dcd8304291b058efbf3ebeca834bd9968e767f8b4245d2074e71b9a1905d',
             'BUcash-1.7.0.0-linux64.tar.gz': '4122a3e25e963e4f63f82c931fbdad42500611533f93c8d89ed3570d6f54eb05',
             'BUcash-1.7.0.0-osx.dmg': '7ebb3d4743a6a68cc489601d5760c867a6c78dc79c688ce61137cede3497cae2',
             'BUcash-1.7.0.0-osx.tar.gz': '060422d95c86231c1cb67bb8bb767b864a1fee76a4e1c18cc0eb67a0d8020e97',
             'BUcash-1.7.0.0-osx64.tar.gz': '5b33975d666fcbd986621eff0bcd75194180252aaab46a62af394aaa2d8302b6',
             'BUcash-1.7.0.0-win32-setup.exe': 'f94ed7fc1252bc15cf538161a03d2a73be45529892e4aeff59e80888f3519a29',
             'BUcash-1.7.0.0-win32.zip': '1ce86d6085738622d362623292ff96cfeb0a34c7d212491ecb66f3f3c40e68cc',
             'BUcash-1.7.0.0-win64-setup.exe': '451be2d3968c5821f89841239b692fe3dac0605217135f0803cee82b40983e0f',
             'BUcash-1.7.0.0-win64.zip': '24344b07faef61f9482fe6b96ccb0c295a6cd2677b94f9bca357ad7a281ac5f6'},
  'program': 'Bitcoin Unlimited Cash',
  'version': '1.7.0.0'}`;

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
                    {strings().download.signatures.signature}:<br />HKFjN/PO5xqG8qma/kVnOkOOO9BotqWRU8xkmWoBDUiXBedfxzsn/k5L4l5MYi/v8srym6BjiAPr0b99wF6+zEg=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />
                    <br/><br/>
                    {strings().download.signatures.griffith}<br/>
                    bitcoincash:qrupj2nuskyg4dmdrpnytjs4p8s6av542cuja2qdzy<br/>
                    (legacy address format: 1Pcpj8sR5adRNMi8rZ1Zi7rg6GPqcmFHAz)<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
