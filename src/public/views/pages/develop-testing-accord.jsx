'use strict';

import React from 'react';

import { strings } from '../../lib/i18n';
import Header from '../header.jsx';
import Footer from '../footer.jsx';

class DevelopTestingAccord extends React.Component {
    render() {
        return (
            <div id='DevelopTestingAccord'>
                <Header/>
                <div className='center'>
                    <div className="inline-block p2 py4 post__container ">
                        <div className='center'>
                            <div className='inline-block h1 py2 post__title'>
                                BITCOIN CASH DEVELOPMENT AND TESTING ACCORD
                                <br/>
                                Bitcoin Unlimited Statement
                            </div>
                        </div>
                        <div className="lh-copy left-align py2">
                          Development teams for Bitcoin Cash client software -- Bitcoin ABC, Bitcrust, Bitprim, Bitcoin Unlimited, ElectrumX, nChain, and Parity --  met recently in London.  The purpose of the meeting was to discuss our medium-term development priorities.  We were very excited by the vision shared by all attendees for Bitcoin Cash to massively scale to become a fast, low-fee, global peer-to-peer electronic cash system!
                        </div>
                        <div className='lh-copy py1 left-align'>
                          The meeting -- and our deliberations afterwards -- provided the Bitcoin Unlimited team with an opportunity to clarify its own medium-term priorities beyond the common vision of massive on-chain scaling.  The following point-form list summarizes some Bitcoin Unlimited priorities resulting from those deliberations:
                        </div>
                        <div className='lh-copy py1 justify'>
                          <ol>
                            <li className='padded-list'> Support the technical community’s goal of planned protocol upgrades every six months – on the 15ths of May and November.</li>
                            <li className='padded-list'> Increase the network capacity, ideally by decreasing the inter-block time to 1 min, 2 min, or 2.5 min to improve the user experience, focusing on faster and smaller blocks. To clarify, BU nodes and miners already have the ability to configure the block size limit as they see fit, even up to the original 32MB. </li>
                            <li className='padded-list'> Re-enable op-codes. Provide implementations for the proposed new OP_GROUP and OP_DATASIGVERIFY op codes and begin the process of restoring op-codes that were disabled soon after launch in 2009. These will permit representative tokens, binary contracts, and other advanced features. </li>
                            <li className='padded-list'> Implement a new Bitcoin Cash address format, to make it difficult for BTC to accidentally be sent to BCH wallets, and vice versa.</li>
                            <li className='padded-list'> Evaluate the use of Bobtail to reduce inter-block time variance, increase double-spend resistance, improve the DDA, and achieve better mining.  Overall, this change would further improve the user experience.</li>
                            <li className='padded-list'> Improve block relay, potentially by integrating Graphene.  At the same time, evaluate the pros and cons of removing the causality requirement for transaction ordering within a block, to simplify Graphene's implementation.</li>
                          </ol>
                        </div>
                        <div className='lh-copy py1 left-align'>
                          Remember, Bitcoin won't succeed all on its own.  It will take the continued hard work of people like you dedicated to the vision of building better money for mankind.  Antony Zegers (Bitcoin Cash developer) said it best: "Together we will make Bitcoin Cash the best money the world has ever seen."
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default DevelopTestingAccord
