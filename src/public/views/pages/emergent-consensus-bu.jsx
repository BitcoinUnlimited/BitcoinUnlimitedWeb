'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';
import ImageWithLabel from '../components/emergent-consensus/imageWithLabel.jsx'

export default React.createClass({

    render: function() {
        return (
            <div id='emergent-consensus-bu'>
                <Header />
                <div className='section'>
                    <div className='container center'>
                        <div className="inline-block p2 py4">
                            <div className='center'>
                                <div className='inline-block h1 py2 post__title'>
                                    The Excessive-Block Gate:
                                    <br/>
                                    How a Bitcoin Unlimited Node Deals With "Large" Blocks
                                </div>
                            </div>
                            <div className="gray lh-copy left-align py2">
                                Bitcoin Unlimited's consensus layer is concerned with preserving the money property of Bitcoin. Blocks that are potentially problematic to accept for technical reasons are dealt with in a different layer where network consensus is not critical. This article describes how Bitcoin Unlimited's excessive-block logic works from the perspective of a single node. A follow-up article will describe how this "node-scale" behavior facilitates the emergence of a fluid and organic block size limit at the network scale.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                Bitcoin is money. If you agree with that, then you probably also agree that Alice shouldn't be able to create bitcoins out of thin air, that Bob shouldn't be able to spend the same bitcoin twice, and that Carol shouldn't be able to freely spend bitcoins that belong to Alice or Bob.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                These properties — that we all intuitively recognize good money must have — are enforced by each node on the Bitcoin network. As described by Satoshi Nakamoto:
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/1.png'
                                alt='Excerpt from the Satoshi White Paper'
                                label="Fig. 1. Excerpt from the Satoshi White Paper. A block is accepted if it preserves Bitcoin's money property."
                                />
                            <div className='lh-copy py1 left-align'>
                                The enforcement of these rules takes place in each node's consensus layer. We call it the consensus layer in part because there is widespread&nbsp;
                                <div className='inline italic'>human consensus</div>
                                &nbsp;about what these rules are: they are simply the rules needed to make bitcoin function as&nbsp;
                                <div className='inline italic'>money</div>.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                Fig. 2 visualizes the process of a node scanning every transaction in a new block. If all of the transactions are valid and not already spent, then the money property is preserved. This most recent block becomes the new "chain tip," representing the most up-to-date version of the Bitcoin ledger. Mining nodes begin looking for a new block that builds upon this new chain tip. When a miner finds one, the same process repeats, and Bitcoin's blockchain is extended once more.
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/2.gif'
                                alt='Valid blocks'
                                label="Fig. 2. According to the Satoshi white paper, a node accepts a block if all transactions in it are valid and not already spent — that is, if the block preserves Bitcoin's money property."
                                />
                            <div className='lh-copy py1 left-align'>
                                So far so good. Everyone agrees and understands what the rules are.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                But what if there is a&nbsp;
                                <div className='inline italic'>technical</div>
                                &nbsp;reason that it&nbsp;
                                <div className='inline italic'>might</div>
                                &nbsp;be a bad idea to accept a particular block (even though the block would still preserve Bitcoin’s money property)? Remember, the Bitcoin network is made up of computer hardware connected over physical communication channels and subject to physical limitations. A block could contain so many transactions that a miner might be worried that it would never reach miners on the other side of the Great Firewall of China, or a node operator might be worried that it would take up too much of his hard-drive’s space to store or too much of his node’s processor time to validate.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                Bitcoin Core gives a black-and-white answer to the&nbsp;
                                <div className='inline italic'>fuzzy</div>
                                &nbsp;question of what kind of blocks&nbsp;
                                <div className='inline italic'>might</div>
                                &nbsp;be a bad idea to accept. Bitcoin Core says that if the block is larger than 1 MB then it&nbsp;
                                <div className='inline italic'>must</div>
                                &nbsp;be rejected (no differently than how the block would be rejected if it contained a double-spend). This rule thus exists in Core’s&nbsp;
                                <div className='inline italic'>consensus layer</div>
                                . It works fine if all the other nodes give the same black-and-white answer to this fuzzy question (Fig. 3a), but if a sufficient fraction of the network disagree (e.g., because blocks are full) and think that it’s also a good idea to accept 1.5 MB blocks (remember 1 MB was just a ball-park guess made 6 years ago anyways), then Core nodes will be “forked off the network” (Fig. 3b). Core users will no longer see their transactions confirmed (or confirmed only very slowly) and miners using Core will waste their hash power trying to extend the wrong block. This is a negative outcome that can be avoided.
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/3.gif'
                                alt='Consensus layer'
                                label="Fig. 3. Because the block size limit is part of a Core node’s consensus layer, Core nodes will be forked from the Bitcoin network if the network begins to permit blocks greater than 1 MB."
                                />
                            <div className='lh-copy py1 left-align'>
                                Before we describe the way a Bitcoin Unlimited node deals with the same problem, notice that Core’s block size rule is not like the other two rules we considered (i.e., those requiring that all transactions in a block must be valid and not already spent). Instead of enforcing Bitcoin’s money property, this additional rule is a hack that addresses a&nbsp;
                                <div className='inline italic'>temporary</div>
                                &nbsp;technological limitation of the physical Bitcoin network. Indeed, a technical constraint related to transporting blocks around the network has crept into Core’s consensus layer.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                In Bitcoin Unlimited, the consensus layer is only concerned with preserving the money property of Bitcoin. An Unlimited node deals with the&nbsp;
                                <div className='inline italic'>fuzzy</div>
                                &nbsp;question of which blocks&nbsp;
                                <div className='inline italic'>might</div>
                                &nbsp;be difficult to accept for technical reasons outside the consensus layer and in a&nbsp;
                                <div className='inline italic'>fuzzy</div>
                                &nbsp;way: it makes a guess and then changes its mind if it guessed wrong!
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/4.gif'
                                alt='Bitcoin Unlimited node excessive-block gate'
                                label="Fig. 4. Diagram of a Bitcoin Unlimited node’s excessive-block gate. The width of the opening represents the node’s block size limit. Blocks smaller than this limit immediately pass through the gate to the consensus layer. Blocks larger than this are stopped by the gate. The gate only opens if a sufficient number of additional blocks are mined on top of the excessive block. How many additional blocks are required to open the gate is known as the node’s acceptance depth."
                                />
                            <div className='lh-copy py1 left-align'>
                                The node does this by using what might be called an&nbsp;
                                <div className='inline italic'>excessive-block gate</div>
                                . The excessive-block gate first checks the size of each new block (and other properties that might make the block difficult to accept for technical reasons such as the number of sigops and the size of any large transactions [see notes below]). If the block is not excessive, it passes directly through the gate to the node’s consensus layer. However, if the block is excessive, the gate holds the block back, preventing it from becoming the new chain tip. The gate only opens if a sufficient number of additional blocks are stacked above the excessive block. What constitutes an excessive block is set by the user (see notes below).
                            </div>
                            <div className='lh-copy py1 left-align'>
                                If the majority of the network agrees that the block in question was excessive, then eventually a new block will come to orphan the excessive block (i.e., because most miners will still be mining on the prior block), as animated in Fig. 5.
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/5.gif'
                                alt="Bitcoin Unlimited node's excessive-block gate catches the excessive block"
                                label="Fig. 5. A Bitcoin Unlimited node’s excessive-block gate catches the excessive block. Because no blocks are built on top of the red block, the gate never opens and the block is orphaned."
                                />
                            <div className='lh-copy py1 left-align'>
                                However, if the network disagrees, then new blocks will be built upon the block the node thought was excessive (i.e., because most miners would have moved on to this “excessive” block). Once the stack of blocks reaches a certain height defined by the node’s&nbsp;
                                <div className='inline italic'>acceptance depth</div>
                                , the gate opens, allowing the blocks to pass through to the consensus layer and extend the chain. (The node’s acceptance depth is user configurable.) Unlike a Core node, an Unlimited node will not be forked off the network in the event that the network as a whole begins to accept larger blocks.
                            </div>
                            <ImageWithLabel
                                src='../img/emergent-consensusBU/6.gif'
                                alt='Bitcoin Unlimited node excessive-block gate'
                                label="Fig. 6. A Bitcoin Unlimited node’s excessive-block gate catches the excessive block. After a sufficient number of blocks are built on top of it, the gate opens and the block is accepted. This animation corresponds to an acceptance depth of 2. Note that the animation is slightly misleading: as presently programmed, the gate would remain open until the node sees 144 non-excessive blocks in a row."
                                />
                            <div className='lh-copy py1 left-align'>
                                Of course, it is also possible that both chains are built upon— sort of a mixture of Fig. 5 and Fig. 6. Still, the excessive-block gate works unchanged. As soon as a red block has enough blocks built above it, the gate opens, presenting the red block and the blocks above it as&nbsp;
                                <div className='inline italic'>one possible</div>
                                &nbsp;chain tip. If it is longer than the current chain tip, the current chain tip will be replaced. If it is not longer, the current chain tip will be retained.
                            </div>
                            <div className='lh-copy py1 left-align'>
                                Because the excessive-block logic exists outside the consensus layer, it is not critical that nodes deal with excessive blocks in the same way. Each node operator is free to express his opinion about what makes a block “excessive” by configuring his node’s excessive-block gate appropriately. Through the cumulative effect of thousands of node operators and miners expressing their preferences like this, an “effective block size limit” naturally emerges. This will be the subject of our next article.
                            </div>
                            <div className='py2'>
                                <div className="py1 bold">
                                    Acknowledgement
                                </div>
                                <div className='lh-copy py1 left-align'>
                                    The author kindly thanks Roger Murdock, Andrea Suisani (<div className='inline italic'>sickpig</div>), Andrew Stone (<div className='inline italic'>thezerg</div>), HostFat, and Andrew Clifford (<div className='inline italic'>solex</div>) for their feedback on earlier drafts of this article.
                                </div>
                            </div>
                            <div className='py2'>
                                <div className="py1 bold">
                                    Copyright
                                </div>
                                <div className='lh-copy py1 left-align'>
                                    This document and its images are placed in the public domain.
                                </div>
                            </div>

                            <div className='py3'>
                                <div className='h1 py2'>
                                    Notes
                                </div>
                                <div className='py2'>
                                    <div className="py1 bold">
                                        What makes a block excessive?
                                    </div>
                                    <div className='lh-copy py1 left-align'>
                                        A block is considered excessive unless it contains no more than Qmax megabytes and no more than 20,000*ceiling(Qmax) sigops. Qmax is configurable in Bitcoin Unlimited. For compatibility with today’s blockchain, any transaction size is allowed in block ≤ 1MB. In blocks whose size is > 1MB, a block is excessive if it contains a transaction with a size ≥ qmax (which is 1 MB by default). This limitation on the size of a transaction solves the quadratic hashing problem without adding a new rule to the consensus layer. These rules are identical to Core’s for Qmax=1.
                                    </div>
                                </div>
                                <div className='py2'>
                                    <div className="py bold">
                                        How long does the gate stay open?
                                    </div>
                                    <div className='lh-copy py1 left-align'>
                                        By default, once opened, the excessive-block gate doesn’t reset to the closed position until the node sees 144 non-excessive blocks in a row. Without this feature, a node would constantly trail the blockchain tip if a series of excessive blocks is produced.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
