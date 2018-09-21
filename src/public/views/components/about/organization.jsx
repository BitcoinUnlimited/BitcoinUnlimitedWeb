'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Organization extends React.Component {
    render() {
        return (
            <div>
                <p className='lh-copy'>
                  The Bitcoin Unlimited organization maintains the <a className='link--underline dim black' href="https://github.com/BitcoinUnlimited/BitcoinUnlimited" target="_blank">open-source Bitcoin client</a> by the same name. The organization's mandates are:
                </p>

                <ol>
                  <li className='pb1'>To foster competing implementations of the Bitcoin protocol in order to provide more choice to node operators and to add robustness to the network.</li>
                  <li>To support the continued growth and adoption of Bitcoin as a peer-to-peer electronic cash system as described in <a className='link--underline dim black' href="https://bitcoin.com/bitcoin.pdf" target="_blank">Satoshi Nakamoto's white paper [PDF]</a>.</li>
                </ol>

                <p className='lh-copy'>
                  The organization is governed by its <a className='link--underline dim black' href="/resources/BUarticles.pdf" target="_blank">Articles of Federation [PDF]</a> and controversial decisions are settled by members voting. The organization is funded by donations, and it <a className='link--underline dim black' href="https://medium.com/@peter_r/call-for-proposals-making-satoshis-vision-a-reality-with-bitcoin-unlimited-4ff5da246dc7" target="_blank">awards grants</a> to qualified groups and individuals to help fund projects in line with its mandates.
                </p>
                <p className='lh-copy'>
                  Bitcoin Unlimited does not allow overhead when giving to universities or other institutions.
                </p>
            </div>

        );
    }
};

export default Organization
