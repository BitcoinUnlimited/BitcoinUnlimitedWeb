'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS0121b =  `
{ 'files': { 'bitcoinUnlimited-0.12.1-linux32.tar.gz': '984111483981bbfa5d33f40014336d74cbb263a51cb42a87e5d1871f88c14a7c',
             'bitcoinUnlimited-0.12.1-linux64.tar.gz': '34de171ac1b48b0780d68f3844c9fd2e8bfe6a7780b55e1f012067c2440ebd8a',
             'bitcoinUnlimited-0.12.1-osx.dmg': 'e40e1586edefd95e47c4db27116dcf0b5e286ea81d4243bd476db3128989bd4d',
             'bitcoinUnlimited-0.12.1-osx.tar.gz': '0b4f7f60a1b439632c31c60d781172d69be0b6bbc2dc5fc58caca77dc90da7fe',
             'bitcoinUnlimited-0.12.1-osx64.tar.gz': 'fceb0fb034e26124cd126954a3f968902d1ebe7758c9869f266aade9e9ff1885',
             'bitcoinUnlimited-0.12.1-win.tar.gz': '68b539df8a6ace5cf9c4ca22bb6b9106127d153b2de01e82356b98f323e313e0',
             'bitcoinUnlimited-0.12.1-win32-setup.exe': '0035006c411498a2c80046f2fb29615b838f045fac4f2c1af0ec0db1220ef8c2',
             'bitcoinUnlimited-0.12.1-win32.zip': 'd2185d4276321bfdc08f1f21a1eee6c51150737b5c69938ddb8cfef065e70d58',
             'bitcoinUnlimited-0.12.1-win64-setup.exe': '58189a3a07949f87998c7c255eda3e313a61b1ac24667d13ba771cff4a6612d4',
             'bitcoinUnlimited-0.12.1-win64.zip': '65a0668f0451b78921275d1a1ec301feb68b29daf603dbbce7da7ece4306bb17'},
  'program': 'Bitcoin Unlimited',
  'version': '0.12.1b'}
`;

class Signatures0121 extends React.Component {
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
                    0.12.1 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS0121b}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().download.signatures.thezerg})
                    <br/>
                    {strings().download.signatures.signature}:<br />G1W1Uq8QagCARx0eK895+5ZBQzwFqpQmRVOP+yPNDkCuAh8yC9BUxp59BtIP0ieHZvZBeHpvdkvepAC4YOkgwu4=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                {strings().download.signatures.signature}:<br />H0YIZtMm92ntSh321FRIG6Js7TYDDTmTsXoRYwh48UilQzh5uadFz9VHsLqoHshr0wpULEWqeE1WyH6ME9FB+Ec=
                </div>
            </div>
        );
    }
};

export default Signatures0121
