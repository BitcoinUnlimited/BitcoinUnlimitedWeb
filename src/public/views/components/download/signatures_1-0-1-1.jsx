'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS1_0_1_1 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.1-arm32.tar.gz': '1b2c74742fc8fc9c2a80d35a5a3b7c544c845db3f54c283fcb0b75a5483c35bd',
             'bitcoinUnlimited-1.0.1.1-arm64.tar.gz': '7d2e9da7a6850a5de44aa4222613423684afa0a5a177a0fc92e3fba1d0efb517',
             'bitcoinUnlimited-1.0.1.1-linux32.tar.gz': 'dd3b37359600823add87edcd165ec2238e0578904170401b07c7f9b53f0d6bf0',
             'bitcoinUnlimited-1.0.1.1-linux64.tar.gz': '68439e21ff6806af2acb64b3d4b60ef9bb47d82ba68fce98752de6cc9d1f4502',
             'bitcoinUnlimited-1.0.1.1-osx.dmg': '47aa38b237d15112ea41e70341be3d2cbbc0edc431a2ddf2533bb34cbd359db9',
             'bitcoinUnlimited-1.0.1.1-osx.tar.gz': 'c663198315e45e7fca99c4f1a8466df42610c8b264d9136e74bfca8699427ccf',
             'bitcoinUnlimited-1.0.1.1-osx64.tar.gz': 'c4d59bdf596808a6205e8e538c5cf759d59119fe3e1986cdba828e2dc4cb8378',
             'bitcoinUnlimited-1.0.1.1-win32-setup.exe': '06ff0cf3ee73cf17236bc3b295ec92bf824135ebabdae2042778cbe34265d42e',
             'bitcoinUnlimited-1.0.1.1-win32.zip': '5abec76bff8f944f4e17c1f05e06f895ccac1ab968e352756ae8f93749e305b0',
             'bitcoinUnlimited-1.0.1.1-win64-setup.exe': '26ef474ca4dfcdfb547b865db49fe9de381d97be70bb0e7cd90e3915841a14e2',
             'bitcoinUnlimited-1.0.1.1-win64.zip': '0e71a7a0b6aa725cd1ebd9753376803e8e56eca0fa35c1a1fe86ed5e427f7a06'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.1'}
`;

class Signatures1011 extends React.Component {
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
                      1.0.1.1 {strings().download.signatures.statement}:<br /><br />
                      <pre>{CHECKSUMS1_0_1_1}</pre>
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
                    <br/>

                </div>
            </div>
        );
    }
};

export default Signatures1011
