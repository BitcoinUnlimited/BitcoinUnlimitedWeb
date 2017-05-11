'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'bitcoinUnlimited-1.0.2.0-arm32.tar.gz': '8db882f356a8fd0fc4b4c443023e9c60d93c67cefcd31eeca70f54850f29d9e5',
             'bitcoinUnlimited-1.0.2.0-arm64.tar.gz': '07c6a0a7a01cf04c69b491f5834bfba6f2f657cd9eb23790c48aab74dcd62ad3',
             'bitcoinUnlimited-1.0.2.0-linux32.tar.gz': '2d1aca11f883b05430640f8a70589a9282ef254680f0e7115224b45b543b1096',
             'bitcoinUnlimited-1.0.2.0-linux64.tar.gz': '3c6dcf8af26def3f204a38340b469448a8ec50de986e2d5934ab3d3eb22ef95f',
             'bitcoinUnlimited-1.0.2.0-osx.dmg': 'e0360d108cb4f3ea996e5d59c41e95065e793c140bc12042e217d037bb587d63',
             'bitcoinUnlimited-1.0.2.0-osx.tar.gz': 'c2200277a54eda1721d5b84179a73f232fae3a648aa91c88db8348996ec79aa0',
             'bitcoinUnlimited-1.0.2.0-osx64.tar.gz': 'dd0da4f7e30fa642dc51ee3c8b6cfb854c3bdb78963bd322eeb5c888807f7677',
             'bitcoinUnlimited-1.0.2.0-win32-setup.exe': '1cf4ea2f491d974613bc07bc4cfa0a1556a89e299c24f1ce2d3f7e4b233442e9',
             'bitcoinUnlimited-1.0.2.0-win32.zip': 'f42b1501171c9250b56fb39d783b28f7711c064b5edbcdd7072d38bdc859b350',
             'bitcoinUnlimited-1.0.2.0-win64-setup.exe': 'e2e280d567ba8f971e94c45ddfc1cbcc56ad5641ff24519e288f1edf772992e7',
             'bitcoinUnlimited-1.0.2.0-win64.zip': '0d002a76f2a310be44b72b423efc5cecc1802f08df8819d648779ef945b433cd'},
  'program': 'BitcoinUnlimited',
  'version': '1.0.2.0'}`;

class SignaturesLatest extends React.Component {
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
                    1.0.2.0 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />G1QtClDd7uqUZqHLz4xZ8fBEyyZl+6LQXw4kSsFL2aG0SKN4TOwzEXnHYGQ63OdY5MsuzFnGdh766ifITIYbw1k=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />H6OWVn853bkc1LQbLbvFCaphlWSz6wFNVu+zicQz+ACKWYHRhzrORMqyrEGR1DEPT9IFccIj4cASQB9kCHvG2E0=
                    <br/><br/>
                    {strings().download.signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                    {strings().download.signatures.signature}:<br />TBD
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesLatest
