'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS1_0_1_2 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.2-arm32.tar.gz': '5e7a9e60d4232c386370e14db1351f609fe0e5efb57393433f501ba665453673',
             'bitcoinUnlimited-1.0.1.2-arm64.tar.gz': 'df66bf78edcf743c3245cda5b88d128d82def1f1e24abd7d02d97bcd14ebab9e',
             'bitcoinUnlimited-1.0.1.2-linux32.tar.gz': '20e62907672f6d4622520bebf97b4673219e96390e8c05373eb92dbf2cbedd38',
             'bitcoinUnlimited-1.0.1.2-linux64.tar.gz': '5ea1740325b2ad6bcd2c6985d1716186d2f2da54b9d9ab7a9948afa06f15d030',
             'bitcoinUnlimited-1.0.1.2-osx.dmg': 'cc866bffaad75b2249b18c55554f85313626206b16799ed1a7a6863f7971d60d',
             'bitcoinUnlimited-1.0.1.2-osx.tar.gz': '6b3d3dde0f02567a9cffee457f1b41087de07bad3e9c7533c5cad723a1a9a059',
             'bitcoinUnlimited-1.0.1.2-osx64.tar.gz': '23f728945b031cdc4a3a287f22118be564295229f2cc9f65a59c8988f3667749',
             'bitcoinUnlimited-1.0.1.2-win32-setup.exe': '53537bcf85f08330781c1acb9ba5dfaef01cc4f21c972eb74c77f502afa11f0e',
             'bitcoinUnlimited-1.0.1.2-win32.zip': '5b244002a27b97b52c9b41f08599a2056b735613a28198de54ef2ec701a4695e',
             'bitcoinUnlimited-1.0.1.2-win64-setup.exe': '399f2da16d908855c3e4a1ad6403b975e841e0fe0b86524414f1a2e1a527ba2f',
             'bitcoinUnlimited-1.0.1.2-win64.zip': '736b9aef0b56494172cf0c984cdf81e492ff4e5def72a067da46f2b5a803704e'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.2'}
`;

class Signatures1012 extends React.Component {
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
                    1.0.1.2 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS1_0_1_2}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().download.signatures.thezerg})
                    <br/>
                    {strings().download.signatures.signature}:<br />HDChbyQJwPuT/UR6swXC88e8De34aVSlOqx/KGjqYjveFehDtMMbE7nlh5kYHSJeatckCTG4tVRCLXe+IsduDRk=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                {strings().download.signatures.signature}:<br />IIYVLF5kSeOpo6MI6Xy3d85+rXHskWdts+N9YEfAugGtUSDtoteU4FAseTFpveK1eNmZJhAyfDMCYC1zpJ5P6og=
                    <br/><br/>
                    {strings().download.signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                {strings().download.signatures.signature}:<br />H/Yx99GzjGz2eXpyttFYh5KR4DwbcXWJlVwubBZvhMERYq7DBH+6T3euvZSJ03P+F4G0HrcgjFvVDueGhSSjYe4=
                    <br/>
                    <br />
                </div>
            </div>
        );
    }
};

export default Signatures1012
