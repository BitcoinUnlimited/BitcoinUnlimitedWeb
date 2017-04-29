'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS1_0_1_3 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.3-arm32.tar.gz': '5faab324ab50e6621b5cc2cf0b82d528e52075a9db401d5b3e4ea10a499ac0bd',
             'bitcoinUnlimited-1.0.1.3-arm64.tar.gz': '3d603431f3685a10eb2e55080e511024d2562be66de7d89092df8df4e52bb279',
             'bitcoinUnlimited-1.0.1.3-linux32.tar.gz': 'bb5088b8dfb2be930534f1b174279299eec090542fa62fd04fe05eb9d43f14ba',
             'bitcoinUnlimited-1.0.1.3-linux64.tar.gz': '864908c88d6b9d08c64e46b12acb5c1f8418b0737dfbeffdb8b1c03907892b02',
             'bitcoinUnlimited-1.0.1.3-osx.dmg': '7e19427a5931278a06cefdea972a674b676bbfeab2816993ab6b530889aeb536',
             'bitcoinUnlimited-1.0.1.3-osx.tar.gz': '94fd5d1bb878ecf3f0f50333e2625f1e6632de7506207f1b5b5dece148c69c73',
             'bitcoinUnlimited-1.0.1.3-osx64.tar.gz': '588224a2558f026b764ee8583fc3b0c359167357805bb350375d011282cff7d2',
             'bitcoinUnlimited-1.0.1.3-win32-setup.exe': 'a8db3159799309439f31e4c60faab0e2ac24819e918f7f3402cec76c0b009d68',
             'bitcoinUnlimited-1.0.1.3-win32.zip': 'e754fdd303cbceb955929e4a1b626d6251a767665c3cea9796426b0f406bdb36',
             'bitcoinUnlimited-1.0.1.3-win64-setup.exe': '2fd35bdb9bf50bc78a7cba2ee4890b07475737b2d6d46d22cc68dccae85b9a6e',
             'bitcoinUnlimited-1.0.1.3-win64.zip': '8e837b44ee71d9c7b6693320e5909cb5cd1f12580e7b828d359828bc8a06d4ee'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.3'}
`;

class Signatures1013 extends React.Component {
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
                    1.0.1.3 {strings().download.signatures.statement}:<br /><br />
                    <pre>{CHECKSUMS1_0_1_3}</pre>
                    <br />
                    {strings().download.signatures.tip}
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().download.signatures.thezerg})
                    <br/>
                    {strings().download.signatures.signature}:<br />HBy+OJ6JfRRw7w6r7VEfn9GiDN+ygZgf9rF/ZZWoY7LZPjeHffnyrlA5XN6FWRAhJ5gMpFz+S6F+icux1/POSMc=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />HyCsg5XRdH5/X5h7TuZNn5oqyhtP03rH1OO/Bb9RAhq6OxqozDGc9RISoHMOboD4LXktEZ6305cJiH81YJf2EzE=
                    <br/><br/>
                    {strings().download.signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                    {strings().download.signatures.signature}:<br />IMiQROapmiXpURSuBzRRXvaKFGl3DDsD+ZqMRp7619X/TmLgejkkcxVQc92CUyLrXpOH6QXDc/SvLIz0GfNunG4=
                    <br/>
                </div>
            </div>
        );
    }
};

export default Signatures1013
