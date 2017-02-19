'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS1_0_0_1 =  `
{ 'files': { 'bitcoinUnlimited-1.0.0.1-arm32.tar.gz': '290fbf44536ef371b91bec03edac6cc5062a52ca766651cd24dfe5ee5e6fd8e0',
             'bitcoinUnlimited-1.0.0.1-arm64.tar.gz': 'a1937d01b51c4933abb87c117debb01a3acaf82c3ebfe1f69d2a6e4bc5d6ecde',
             'bitcoinUnlimited-1.0.0.1-linux32.tar.gz': '8d7aa35ae940cb821e062255e7b500f05514b6b8f88123b7217dd833a984fda9',
             'bitcoinUnlimited-1.0.0.1-linux64.tar.gz': 'cfedf1a4701cf05f8e8a9ff4da0f887bcb2b3bbdcd7631e9cfdeebb6dff01c72',
             'bitcoinUnlimited-1.0.0.1-osx.dmg': '9fc67a70ab7f71a03a12e83cd130564c1dc27c7c23bf3fffddc56390d516e0f2',
             'bitcoinUnlimited-1.0.0.1-osx.tar.gz': '7d33380d5ff381a101def1daa8e2963776e9080dd2bd2a0cd0f93d918b581cbf',
             'bitcoinUnlimited-1.0.0.1-osx64.tar.gz': '5e2ffcbd94913c5f361e29810453cbcbf3eb8c75869db6a9a6f39636a88bb3ad',
             'bitcoinUnlimited-1.0.0.1-win32-setup.exe': '26962eba5a63c6922a1f2f6176148264766e21897c9dbf0308e3d05e89e7c49e',
             'bitcoinUnlimited-1.0.0.1-win32.zip': '7e3bb027a80242860903a9f4a1e76f2d8e01ee5044a9fe221787172ae99505e9',
             'bitcoinUnlimited-1.0.0.1-win64-setup.exe': 'd2a097b971a5f0807908646430032513dd7a4bb5c004298eda7524da04b051b8',
             'bitcoinUnlimited-1.0.0.1-win64.zip': '0663097597abf62da115d34be7d0566de1c65c45886efb5ad04eb58c8bdc3e33'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.0.1'}
`;

class Signatures1001 extends React.Component {
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
                 1.0.0.1 {strings().download.signatures.statement}:<br /><br />
                 <pre>{CHECKSUMS1_0_0_1}</pre>
                 <br />
                 {strings().download.signatures.tip}
                 <br/>
                 <br />
                 {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().download.signatures.thezerg})
                 <br/>
                 {strings().download.signatures.signature}:<br />GwsAg+EvOxIYqHZfQfZXW+NLaVeHezl7CuNWIE1HqZr4D1SpvZAqzSNlMl4RFVprpCZqKfmV/y7FCDS93m5mBUM=
                 <br/><br/>
                 {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                {strings().download.signatures.signature}:<br />H4KsTrAhlXbIXnuokxreCbQHy5LpUhQlauE5O8n8tSwCBZt66QIGDlLTy02URgD3ORWXbCFqbrr5HbQPtZbb7UU=
                 <br/><br/>
                 {strings().download.signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                {strings().download.signatures.signature}:<br />H2m8fPV6twB7wjL6umJ9zy8D/wSLolKJwEKzNs1ehcnGJtiTe1071AqPYyQerzTh7vozklr+X8xSZVySRB+DQ5c=
                 <br/>
                </div>
            </div>
        );
    }
};

export default Signatures1001
