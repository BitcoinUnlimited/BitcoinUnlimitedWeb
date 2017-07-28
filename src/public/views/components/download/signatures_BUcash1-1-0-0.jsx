'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.1.0.0-arm32.tar.gz': '850be78650f0ddeeb64e4c56d34940c5fe3e90d7939031510e766ce8ced0c543',
             'BUcash-1.1.0.0-arm64.tar.gz': '426ed2aba52f6e9ff73786e0bdee8bae139a7b7e402b04576ccec5ffc160aa4a',
             'BUcash-1.1.0.0-linux32.tar.gz': '5b2ee6d21ca0254724964e4c7fc69143395cc745838c8e7e7fa61e1fc9f3b65f',
             'BUcash-1.1.0.0-linux64.tar.gz': '0f0375d4e1fc4c66fdd7c5b0fc5c233454ab7c7f9ef2d65236af3975a8ae6189',
             'BUcash-1.1.0.0-osx.dmg': 'a60520bf3baf35af06062fd96e4e19d86580f5a12a816dedacd1aab26931f862',
             'BUcash-1.1.0.0-osx.tar.gz': '7c9d4f6421d2288ce6556976102542bda94cd44bf346c3076e8cffd00134f958',
             'BUcash-1.1.0.0-osx64.tar.gz': '14eabce649730bf8b15dc19051f5d7d0203fd6763c4cdb55dcfa0d6eeae2bb2b',
             'BUcash-1.1.0.0-win32-setup.exe': '5ba57eef72635b0d2e593d0c7e92a4db5ab2b95c76ece9589545717fe56a53a6',
             'BUcash-1.1.0.0-win32.zip': 'a9ed34624236c1c75b67e5bba7646a2f7afe36ce0a7984c0787d04a91a4da334',
             'BUcash-1.1.0.0-win64-setup.exe': 'a5be35e24b32ba5ae943ebb188f04356dd59416492c05399ff801a8550702b79',
             'BUcash-1.1.0.0-win64.zip': 'faae8c5839eefe048d9d3e9fc8dd227ed235428e965fe68b4b9b691bbda058a6'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.1.0.0'}`;

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
                    1.0.3.0 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />HIkrIDsmHW+sor8PRDTUYBwMCdqR0zGtcoiDDuoVY5GaK91PzuXQ2+jxUlzEabP5vo1I3yDj6B/fEGraPkrkTMY=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/><br/>
                    {strings().download.signatures.freetrader} (1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4)<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
