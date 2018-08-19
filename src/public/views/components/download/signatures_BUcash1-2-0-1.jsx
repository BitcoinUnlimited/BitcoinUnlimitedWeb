'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.2.0.1-arm32.tar.gz': '373926eeed9788b7d619fd792f27b56d192dff68a592052a8e47229900c2f09f',
             'BUcash-1.2.0.1-arm64.tar.gz': 'f071192654a9a6d3dcfe6823827af457469c27e441af7964c19a1c589fd26025',
             'BUcash-1.2.0.1-linux32.tar.gz': '84c419e8375db2793bdc42983caf32b4bdaab9c818cd4ff1d7f9ae4560bb933c',
             'BUcash-1.2.0.1-linux64.tar.gz': '62d8e843576f6bd13fa5bc1f9b939577b63739eb99cbbd8bdec589cfdc774eb0',
             'BUcash-1.2.0.1-osx.dmg': '6369e5c1ca061c80baadd00714d63af367425e7f98fd1ce1f98fa9b599a1faf8',
             'BUcash-1.2.0.1-osx.tar.gz': 'cf86ec45aa2548f9bf47c535fa2d2cd98bf3ca86c1ef42251598fa19a9a8ae5f',
             'BUcash-1.2.0.1-osx64.tar.gz': '3ec92993541d954f229997d63409cd71429cec366f707f07cd2c4cb2e95449e7',
             'BUcash-1.2.0.1-win32-setup.exe': '906a8651bc97fd7730a60906bd814e3afdbe176db40381cf686fec2b37180ea6',
             'BUcash-1.2.0.1-win32.zip': '2c18f92ed286b11575b384565c0d4242eb84d0946a372ae4a0af8bbebe21ac93',
             'BUcash-1.2.0.1-win64-setup.exe': 'ad2b9fdf792692b5a8ff170b4faac895d2dcff3bbbfd97d6ce9edd5db7d35be4',
             'BUcash-1.2.0.1-win64.zip': '23dbadfb9a43772cab46987870ee5501c9df3ab14ff7df79c9877d349bf73739'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.2.0.1'}`;

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
                    1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />HEX71YRm7gcg5XZQdXKc+TCuz+f11wecMoHSixU+yIUpPfDLbujOOhR9R1Xfdo63gek6HknMfS1xOgNrFjFuxUI=
                    <br/><br/>
                    {strings().download.signatures.sickpig}<br/>
                    bitcoincash:qrdvmdluf2s5cf08wcp9h2ja8lqt5peq35y56z4s7s<br/>
                    1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G<br/>
                    {strings().download.signatures.signature}:<br />ILEhpZ0L3baWqAAYj1+o9YVTQR4uGX1LtvcX0FrMZFW1WnrfFGAP9WxKBYo5lYCpnaXNO6W9AGZfVrHrITI4VQ8=
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
