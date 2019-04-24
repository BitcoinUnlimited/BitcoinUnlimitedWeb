'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.6.0.0-arm32.tar.gz': 'c1407a676750ee11619f624239d007ea85f3bb410c9eaee9370ad015f90be08e',
             'BUcash-1.6.0.0-arm64.tar.gz': 'd52fff6276f08b6ce416a116213105f36aa96a77a810d614921492a63fb57ece',
             'BUcash-1.6.0.0-linux32.tar.gz': '37170693f8fc5b26810bbd03bea06d7065d544f0d92aa40d0e68281481e7da28',
             'BUcash-1.6.0.0-linux64.tar.gz': '8e8b6af109ed73d799aa37db2ac0b4c29fdeea28998693d1d1d7d85d9f7e8930',
             'BUcash-1.6.0.0-osx.dmg': '225c8709bfdac9c5b8fb19f24dc37c2762ee6ff6fc7128bf32199b3d78f72722',
             'BUcash-1.6.0.0-osx.tar.gz': '8d565d7f3481995f6678e0ad0b4494580935feee06d344dddfb18e1776d5bbb3',
             'BUcash-1.6.0.0-osx64.tar.gz': 'ad012b2909c7df37139a58056dfde1e22dc9e4a5304ec15664f509e7d299711d',
             'BUcash-1.6.0.0-win32-setup.exe': 'd86257e37e68bf2f43b8b5fdcaca1616a6f6e0c1c28582b8ed91ee2d6cecf9f4',
             'BUcash-1.6.0.0-win32.zip': '0170ddb294e6cc68f0d53ba0c64fe4b81475b112c395aeea7e8300f0aa954eae',
             'BUcash-1.6.0.0-win64-setup.exe': 'c3a7827634606f62504478c595565b609f4a6811647cb56e87b46f0ed946dc01',
             'BUcash-1.6.0.0-win64.zip': 'a256e755a712f34a627e68245e5118e79e7c0f9c1f4f3e61968d95a8cd9a3b6a'},
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
                    {strings().download.signatures.signature}:<br />HCCIDbhYfviorm9Lv0lw0R88+B0QHCZGHargUeC/0cbBOTkB5bcPYcUn7u/iHGYZ4DaIy968loT4Qx4mEdyF4sY=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    (legacy address format: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />H1ghB8FwuGuK2n46YAzOnpsN4cBjZXvnXHAZ0YthT08EBya/OCu6xCeqKbAyWwXACWBzq6SUPtrFmy9At/lgJrg=
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
