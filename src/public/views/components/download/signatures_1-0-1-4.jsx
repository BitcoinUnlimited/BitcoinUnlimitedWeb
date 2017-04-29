'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS1_0_1_4 =  `{ 'files': { 'bitcoinUnlimited-1.0.1.4-arm32.tar.gz': 'ce4983ffd2913ec97c88fd6c6d3ee5257854843b9d89853fc9d74bca80ea53b3',
             'bitcoinUnlimited-1.0.1.4-arm64.tar.gz': 'e2e448b3bcd6699d3df0d13d0ff3132c80b4958f0808d9d8960d497ecfd46425',
             'bitcoinUnlimited-1.0.1.4-linux32.tar.gz': '2cdf676888c15a865f8243503bfcab26a2efcab59cff578b3cc455cd64eff103',
             'bitcoinUnlimited-1.0.1.4-linux64.tar.gz': 'f82b98f552ae49c7bca011325a5d9374425e78d91c1baac02cba64b358beb563',
             'bitcoinUnlimited-1.0.1.4-osx.dmg': 'b1fbbcae9a922a9d3558d55df50bc259aa14720f18dae7b7ed5fac113db1c907',
             'bitcoinUnlimited-1.0.1.4-osx.tar.gz': '908c8e8f4b1ae2ad3d945c523d3a9da08138892ca61788a21eae4d33cb5c7087',
             'bitcoinUnlimited-1.0.1.4-osx64.tar.gz': '4dfd765d3333e781254f1994f70b00a3cb3eef6061f9a8bb823fa97678a81f48',
             'bitcoinUnlimited-1.0.1.4-win32-setup.exe': '89c8b28a1ba61076dfea93a6850c016d9a0de1cde2d972aa1fa961eed863eaea',
             'bitcoinUnlimited-1.0.1.4-win32.zip': 'e8e54d9b97ec95995757c704fa0ed26fafe5f7074a53b0e1b3ab6e812f285675',
             'bitcoinUnlimited-1.0.1.4-win64-setup.exe': 'f7869992c6461bc00aff911b76e5e648b67d67cb7618a1cde4c2cf1b6ccbb06f',
             'bitcoinUnlimited-1.0.1.4-win64.zip': 'b6794eb169ff404583cc491db106e1e22479b415ebfea97eec18bce13c2158fb'},
  'program': 'BitcoinUnlimited',
  'version': '1.0.1.4'}`;

class Signatures1014 extends React.Component {
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
                    1.0.1.4 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS1_0_1_4}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().download.signatures.thezerg})
                    <br/>
                    {strings().download.signatures.signature}:<br />GzneLblfW0nm9VCF1Nh03trgoYFtzhobVwFkAOOaNhWKNr+ip/RZKwKw6ZF0BNYw+pTqt0T9M52xO1TAzjQzmLI=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />IP1wXgv5iNHEzNGa+jzyXvf8DA80L65pspk0s2b7rcu0es+Yyu2ZmJkcheKN8aPMrzr66DsAGs0oOsU/otMWW1c=
                    <br/><br/>
                    {strings().download.signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                    {strings().download.signatures.signature}:<br />IHCIlDiHXm2S7B0Yr2B5u8/GVuj1D9fcDCjZc33rZO1MP+vx+q7155BCXS218i5KAEvSYByLLNNyW8UL4Je3CAk=
                    <br/>
                </div>
            </div>
        );
    }
};

export default Signatures1014
