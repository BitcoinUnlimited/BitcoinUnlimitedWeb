'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class ScalingFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ "Why does Bitcoin Unlimited want to scale on-chain?" }
                    body={ <div>
                        <p>
                            The defining property of Bitcoin is that transactions are confirmed by the network of miners and stored permanently in the blockchain. This is not fast, not anonymous and consumes a lot of resources. However, this is what defines Bitcoin. Bitcoin Unlimited rejects that the capacity of Bitcoin is permanently choked at a certain block size limit, be it 1, 2 or 8MB. It also rejects the goal to make the Bitcoin blockchain a settlement layer instead of P2P electronic cash. A settlement system with high fees will simply drive most usage to alternative cryptocurrencies, because of the network effect existing usage is very sticky, but it can be pushed away, and the settlement layer will prove to be a mirage.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://www.bitcoinunlimited.info/resources/bitcoin.pdf" target="_blank">Bitcoin: A Peer-to-Peer Electronic Cash System [PDF]</a></li>
                            <li><a className='link--underline dim black' href="http://www.mail-archive.com/cryptography@metzdowd.com/msg09964.html" target="_blank">Satoshi: Bitcoin P2P e-cash paper</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Is Bitcoin Unlimited unaware that a Visa-level scale is a major challenge on-chain?" }
                    body={ <div>
                        <p>
                            Most Bitcoin Unlimited developers agree that the Bitcoin blockchain is not able to process tens of thousands of transactions - today. However, they consider that the network can handle many times more transactions than it is allowed to do currently.
                        </p>
                        <p>
                            After all, Bitcoin is not comparable to Visa, which is an already established, centralized solution. It is a good general principle that Bitcoin’s should be able to handle any transaction for which fiat can be used in existing commerce. This includes coffee or other small payments. It simply cannot do micro-payments, and that is appropriately handled by a proposed Lightning Network.
                        </p>
                        <p>
                            Bitcoin has its own special benefits as a means of payments and hence its own unique demand-structures. Nobody has the right to dictate whether someone else’s transaction is spam if it carries a fee sufficient for miners to include it. Nobody knows how large the demand for Bitcoin transactions will become. According to the past growth however it is reasonable to assume that blocks of a size of 20MB, in the next decade is likely. If there is enough demand to fill 100MB blocks then the BTC price will be many thousands of dollars.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="http://fc16.ifca.ai/bitcoin/papers/CDE+16.pdf" target="_blank">On Scaling Decentralized Blockchains [PDF]</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How does Bitcoin Unlimited support on-chain-scaling?" }
                    body={ <div>
                        <p>
                            With the growth of the Bitcoin network, the Bitcoin software attracts developers to continually improve it, including optimizations of usage in types of resources – bandwidth, CPU, memory, disk space.
                        </p>
                        <p>
                            Bitcoin Unlimited is aware of certain areas in which the scalability of the Bitcoin software can be further and significantly improved and a draft road-map has been collated. The Bitcoin Unlimited developers have contributed several solutions to help Bitcoin’s capability to scale, such as Xthin, Xpedited and Parallel Validation. Also it is becoming a center of on-chain-scaling, and it supports scientific projects and conferences about on-chain scaling.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Does Bitcoin Unlimited support off-chain scaling like the Lightning Network?" }
                    body={ <div>
                        <p>
                            Yes, Bitcoin Unlimited supports off-chain-scaling solutions like Lightning Network or Sidechains and co-operates with their developers. Since these solutions have their own unique advantages regarding spread, cost, privacy and contracts, they surely will succeed in the market place on their own merits, once they have solved the many challenges still ahead. The principle here is that off-chain solutions should not be subsidized by preventing the growth of on-chain transactions.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Does Bitcoin Unlimited support SegWit?" }
                    body={ <div>
                        <p>
                            In its current form as a Soft Fork, Bitcoin Unlimited is not currently implementing SegWit. There has not yet been a vote by the membership on this change There are many reasons which have been explained extensively in social media over the past year. To summarize: While certain features of SegWit are useful and desirable, it combines too many changes in one upgrade and introduces new magic numbers, while failing in solving many of the issues it aims to solve and even being an obstacle when it comes to further on-chain-scaling.
                        </p>
                        <p>
                            Bitcoin Unlimited however is open for implementing a version of SegWit as a hard fork, while it also considers other options to solve malleability of transactions, like Classic’s Flexible Transactions. The short term priority is to create on-chain-capacity, because Bitcoin’s network effect has been arrested since mid-2016.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://medium.com/the-publius-letters/segregated-witness-a-fork-too-far-87d6e57a4179#.w9ww7bxoe" target="_blank">A Fork Too Far</a></li>
                            <li><a className='link--underline dim black' href="http://www.deadalnix.me/2017/02/27/segwit-and-technologies-built-on-it-are-grossly-oversold/" target="_blank">SegWit and technologies built on it are grossly oversold</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is a good overview of the Bitcoin network capacity considerations?" }
                    body={ <div>
                        <p>
                            The actual transaction limit is not within anyone's control, the actual limit is a technical limit which is governed by the network’s capacity. The limit you can imagine sits on a bell curve with very slow CPU's and internet connections on the left and very fast CPUs and internet connections on the right, and the vast majority somewhere in the middle.
                        </p>
                        <p>
                            While someone can do some research and actually quantify that data, whatever it is the Pareto principle probably holds true that 20% of relay nodes will do 80% of the work. Bitcoins network Channel capacity is then determined not by the slowest connection on the network but by the the relay nodes doing 80% of the work.
                        </p>
                        <p>
                            This limit is the technical bound transaction limit, whenever miners approach this limit they will begin to experiences a negative return on energy input and draw back or go broke, the result is not centralization as is often simplistically described.
                        </p>
                        <p>
                            There are inherent market mechanisms that limit growth to the technical limits of the network before nodes drop off. There is no cost to pay, no centralization of control risk when increasing the block size limit. The ultimate limit is not block size, it is the size of the UTXO (the sum of all unspent transactions) the cost and time it takes to confirm and of validating them is what determines the cost of a node. I still believe we will need LN to scale above this limit. The UTXO is a result of growth and the number of users - LN does not shrink this. Here are 6 inherent market mechanisms I can think of that restrain block size.
                        </p>
                        <p>
                            These reasons need to be debunked or understood. BU allows the network to come to terms and understand them in time.
                        </p>
                        <p>
                            Compact blocks and Xthin blocks need to relay an increasing number of missing transactions with growth - the closer the block size gets to network capacity the greater the number of transactions that will have not fully propagated the network at the time a block in mined. Missing transactions need to propagate before they can be validated in a block. When transactions are missing, orphan risk increases as the number of missing transactions increases validation time increase as does orphan risk. - there is a very real cost that deters including more transactions than the network can handle.
                        </p>
                        <p>
                            There is headers first mining and it can be abused to mine higher capacity than the network can handle - it comes with significantly orphan risk, - the optimization here being all headers are the same size, in this case validation times increase orphan risk making this practice is very risky, - there is a very real cost that deters this practice in time miners become less profitable.
                        </p>
                        <p>
                            Compact blocks and Xthin have to communicate information in the bloom filter that increases with the quantity of transactions in the block - bloom filters describing more transaction are larger, and larger amounts of information the longer it takes to propagate and validate. Larger blocks increase orphan risk. - there is a very real cost that deters including more transactions than the network can handle.
                        </p>
                        <p>
                            Another optimization is parallel validation, here too smaller blocks are advantaged by propagating early increasing the risk of orphaning larger blocks when two block are found at a similar time, the smaller one is validated propagated and built on. - there is a very real cost that deters including more transactions than the network can handle.
                        </p>
                        <p>
                            There is an inherent mechanism to processing very large blocks that may take over 10 minus to validate, - firstly they can be orphaned by any previously mentions method, or can be built on and secured by mining empty blocks. in the later case fewer transactions are processed creating a backlog and a technical limit and a demand for block space. - there is a very real demand for block space that builds to encourage miners to include transactions, and an incentive to cost optimize available network capacity.
                        </p>
                        <p>
                            Like the majority network today miners will not deviate from the 1MB as the majority of users would reject that block, the same is true of use adjustable limits, BS/Core and BU depend on relay nodes to enforce a network limit. Although with a user set limit when transaction volume increases above capacity miners can be fooled with a Sybil attack into making bigger block, miners have a very big intensive to avoid orphan blocks, however if the network can handle the capacity the network will grow not reject those blocks.
                        </p>
                        <p>
                            Point 6 being the BU proposal, the other 5 being inherent to bitcoin, In all of these cases there exist counterarguments - however if you are allowed to explore them honestly you will see the counterarguments are superficial.
                        </p>
                    </div> }
                    expanded={ false } />
            </div>
        );
    }
};

export default ScalingFaq
