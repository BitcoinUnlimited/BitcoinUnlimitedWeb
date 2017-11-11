'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

const CHECKSUMS =  `{ 'files': { 'BUcash-1.1.2.0-arm32.tar.gz': '4e059553747445e2cc5fae7482a3517753078fb7cff9b613967a86dfc501b65a',
             'BUcash-1.1.2.0-arm64.tar.gz': 'a46e633f6df6c3e19868eec76f44f376fb0c1229e09ccc26fae91e421fbf6d44',
             'BUcash-1.1.2.0-linux32.tar.gz': '3c9533f18b1b467cb5f74773aea705000c1ce3482888924557f6177adc71e9b9',
             'BUcash-1.1.2.0-linux64.tar.gz': 'cd12e77ba3fb5d744a74d1f3d58fbd60c1f96a35db6ebcfcee21810d49e2e2e9',
             'BUcash-1.1.2.0-osx.dmg': 'c7a6e5de5d36ef2f395a4500b0ee6f8828cc89cfe799083c33f0e5ac5834dae1',
             'BUcash-1.1.2.0-osx.tar.gz': '9234c62bed36d880c0b43d8873de38a8a9724a9fca5ce73bf725dc939bfee817',
             'BUcash-1.1.2.0-osx64.tar.gz': '5d0c551be8e9ec702ebb26e930413f7c9b39be929b893350df8bbcf4c72e7ff5',
             'BUcash-1.1.2.0-win32-setup.exe': 'ebf9c4abffd7e684ccbef964a52962e273668a2f8044fb78bda3ab922f4fe744',
             'BUcash-1.1.2.0-win32.zip': '6f97e4c493d82498801159f4341b339f4bc413fbae68ef59ec2cd3a1ac496974',
             'BUcash-1.1.2.0-win64-setup.exe': '3d8c99e27c4bf465f62cae7e7f25fd76b3c5feb0b047165c558872ec8b19998e',
             'BUcash-1.1.2.0-win64.zip': 'd8018dc23f81302635a24a5e556cb1567f1ef4697ee19f88e6d1d490adae8551'},
  'program': 'BitcoinUnlimitedCash',
  'version': '1.1.2.0'}`;

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
                    <br/>
                    <br />
                    {strings().download.signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                    {strings().download.signatures.signature}:<br />HG+D58EJTZu8k2TngOSKXhVfdoPXN0Zzq+ATnp8l6dcVeLEMti9Qq4mmJJBrrKn3e9BXUKJqk9tnlDE7YuW/l1g=
                    <br/><br/>
                    {strings().download.signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                    {strings().download.signatures.signature}:<br />IA+dHlI4BYre4BJFdTISqHxXYbINwOtNOA+V+fNFi7+7a7BCcIEFIqQAFjlq4ESf2N6MLPeWu4Y5dN/F247pmVc=
                    <br/><br/>
                    {strings().download.signatures.freetrader} (1Libre7MGkCXr7pUAEbwihCR9X4quYAyQ4)<br/>
                    {strings().download.signatures.signature}:<br />G5WwRcGhonzukyIP4qLFlL6bpMnbZ0oUXpplYhFHU2fUlc/jlwaH9dJoPaiBab0WFyr4hcgC/IWR9nnAQws6di4=
                    <br/>
                </div>
            </div>
        );
    }
};

export default SignaturesBitcoinCash
