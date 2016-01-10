'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='faq'>
                <Header active='faq' />
                <Title title='Bitcoin Unlimited FAQ' />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='img/faq.jpg' alt='All your Questions About Bitcoin Unlimited Answered' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <h2 className='green'>All Your Questions Answered</h2>
                                <ul>
                                    <div className='faq'>
                                        <ul>
                                            <li>
                                                <p className='faqQ'>Will unlimited size blocks actually result in no fee market?</p>
                                                <p className='faqA'>
                                                    No. Intuitively you can understand this by realizing that it will take a lot longer to propagate a gigantic block across the network than a small one. Therefore a gigantic block has a higher likelihood of being "orphaned" -- that is, a competing block will be found, propagated across the network and supplant the gigantic block. In this case the miner of the gigantic block will lose the block subsidy and transaction fees. Therefore miners are incentivised by limitations in the underlying physical network to produce smaller blocks, and incentivized by transaction fees to produce larger ones. Finding the balance between these forces is what the free market excels at. And as underlying physical networks improve or fees increase, miners will naturally be able to produce larger blocks. The transaction "supply" (space in a block) therefore depends directly on the fundamental capacity, rather than relying on some centralized "steering committee" to properly set maximum block size. Bitcoin is all about disintermediation, and this is another example of it working.                                                    <br /><br />
                                                    For a formal treatment of this subject see <a href='feemarket.html'>A Transaction Fee Market Exists Without a Block Size Limit</a>.
                                                </p>
                                            </li>
                                            <br />
                                            <br />
                                            <li>
                                                <p className='faqQ'>Will unlimited size blocks actually result in gigantic blocks?</p>
                                                <p className='faqA'>
                                                    No.  The effective network throughput is currently limited by the production of single transaction (empty except for the coinbase) blocks.  The larger blocks get, the more of these blocks are generated, resulting in a maximum average block size.  Additionally a rational miner should not accept a gigantic block since it denies him any chance to also produce transaction-containing blocks.  More specifically, if the expected time to find and validate a short block is lower than the time to validate the gigantic block, it maximizes revenue to continue to mine a sibling while simultaneously validating the gigantic block.
                                                    <br /><br />
                                                    For a formal treatment of these subjects see <a href='/1txn'>An Examination of Single-Transaction Blocks and Their Effect on Network Throughput and Block Size</a>.
                                                </p>
                                            </li>
                                            <li>
                                                <p className='faqQ'>Why is a formal <i>Bitcoin Unlimited Articles of Federation</i> necessary?</p>
                                                <p className='faqA'>
                                                    It is completely unknown whether the majority of Bitcoin users support block sizes greater than 1 MB or not. No formal debate or vote has occurred. In contrast, debate is censored on the two most popular Bitcoin community sites. A majority of miners have "voted" for the unimplemented BIP100 proposal (this proposal would then allow miners to vote on block size), yet nothing has been done to implement this proposal. The existence of BIP100, BIP101 and other proposals may be "splitting" the large max-block community -- yet there is no mechanism (AFAIK) to authoritatively retire a proposal so the community can converge on a single proposal. People who have put vast amounts of time and energy into a particular implementation's "brand" find themselves without recourse. The power to add or remove features rests solely with individuals who possess technical skills and were at the right place at the right time.                                                     <br /><br />
                                                    <i>When you switch to the Bitcoin Unlimited client, the Articles of Federation will ensure that your voice is heard, and your vote counted.</i>
                                                    <br /><br />
                                                    Proposals are made, debated, and then resolved (voted on) and the Proposer and BU officers have the power to force this process to occur in a timely fashion.  The Articles also ensure that passed, implemented proposals are committed to the code repository in a timely fashion.
                                                    <br /><br />
                                                    For more information please read the <a href='/articlesOfFederation'>Bitcoin Unlimited Articles of Federation</a>
                                                </p>
                                            </li>
                                            <br />
                                            <br />
                                            <li>
                                                <p className='faqQ'>Is BU going to fork the Blockchain?</p>
                                                <p className='faqA'>
                                                    No.  But if some other entity causes a fork, if for example miners start producing > 1MB blocks, then Bitcoin Unlimited nodes will follow the most-work (generally the longest) fork.  This means that your BU node will track the mining majority rather then a specific choice.
                                                    <br /><br />
                                                    Right now, the only event that will trigger this behavior is a block size fork because we believe that the block size is NOT part of blockchain consensus. If other events that are currently part of "consensus layer" should also trigger this behavior they may be added based on the outcome of a BUIP (Bitcoin Unlimited Implementation Proposal) submission, debate and vote.
                                                </p>
                                            </li>
                                            <br />
                                            <br />
                                            <li>
                                                <p className='faqQ'>Does BU open up a new Sybil attack vector?  Say some entity launches thousands of nodes, 60,000 for example (100x the current network levels). Then sets a super small blocksize. Does this not end up holding the network hostage and thus also the blocksize cap?</p>
                                                <p className='faqA'>
                                                    Nodes have this power and therefore the network is vulnerable to this kind of attack with or without BU.  If you have the resources and desire to launch 60,000 nodes, a few changes to the source code will not put you off -- having access to BU is irrelevant.
                                                </p>
                                            </li>
                                            <br />
                                            <br />
                                            <li>
                                                <p className='faqQ'>Can miners run BU, select a very small block limit and therefore reduce transaction supply below 1MB?</p>
                                                <p className='faqA'>
                                                    If 51% of the miners want smaller blocks they can have them today without BU. They can simply limit the size of their generated blocks -- the max mined block size is a command line option. Also, the max block size to accept is a constant defined in a header file. So 1 simple line of code needs to be changed for miners to ignore blocks bigger than N in all the "Satoshi-derived" clients.
                                                </p>
                                            </li>
                                            <li>
                                                <p className='faqQ'>Does BU affect blockchain consensus?  Is it possible for a network filled with BU nodes to not converge?</p>
                                                <p className='faqA'>
                                                    If you set certain parameters to certain values you can, for example, mimic the behavior of Bitcoin Core.  Bitcoin Core will not converge in a network with miners producing blocks that are both greater than and less than 1 MB (this is called a fork).
                                                    <br /><br />
                                                    Let us imagine a BU-only network with the excessive block size set at 1 MB for many nodes, and blocks being produced at both less than 1MB and greater than 1MB. This network will converge rapidly if there is a large disparity in hash power between the two groups. The larger block nodes "sees" the smaller chain and will switch to it right away if it takes the lead. The smaller block group "sees" the larger chain but will resist switching to it until additional blocks have been built on top of it. So the smaller block group may always be a few blocks behind and small block miners will produce many orphans. The opposite is true in the case where large block miners are the hash power minority, except that they are always at the head of the most-work chain. This orphan production is feedback mechanism the network uses to the miners to change their behavior.
                                                    <br /><br />
                                                    If the two groups have approximately equal hashing power, the situation becomes a <a href='https://en.wikipedia.org/wiki/Random_walk'>random walk</a> due to the fact that block production is a Poisson process.  In this case, the mathematics show that one fork will periodically move far enough ahead of the other to trigger a convergence.
                                                    <br /><br />
                                                    If the network is undergoing a period of block size instability, whether that be due to a struggle between two block-size-is-part-of-consensus clients like XT and Core or due to a struggle between miners of similar hash power, it may make sense for users to wait for additional confirmations or convergence to avoid double spends.  In Bitcoin Unlimited, we hope to eventually track ALL nontrivial forks and visually indicate when transactions have been confirmed on all forks, eliminating the possibility of a double spend.  This will allow users to use the bitcoin network normally during these periods.  However, since we do not believe that these periods will last long because they will cause a dramatic drop in miner revenue, it is not a priority.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
