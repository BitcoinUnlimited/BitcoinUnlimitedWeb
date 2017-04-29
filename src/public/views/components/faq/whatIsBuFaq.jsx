'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class WhatIsBuFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ "Why Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            The Bitcoin community has struggled for more than two years to find a solution to the problem of setting the blocksize limit. A hard limit on the size of blocks chokes the growth of Bitcoin transactions at an early point in its history. Changing the limit, however, requires a changes of the consensus rules governing Bitcoin. Part of this problem is that the blocksize limit should never have been a consensus rule in the first place.
                        </p>
                        <p>
                            For more than two years the approach was – and still is – to let developers discuss and decide a new blocksize limit, let one single person merge the code and hope the ecosystem follows. After more than two years of trying, it can safely be said that this approach has failed in every respect: blocks are constantly full, but no solution is implemented. Developers have spent thousands of hours to create an upgrade, which is rejected by miners; the community is split in two hostile camps which both smear each other on every detail. The approach to solve the blocksize limit problem has led Bitcoin into the most fundamental crisis it has faced so far.
                        </p>
                        <p>
                            It is time to try something else. Time to release the developers from the burden of having to determine the blocksize. Time to make it the decision of the ecosystem itself. Time to give Bitcoin Unlimited a try.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is Bitcoin Unlimited? Is it a hard fork?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited by itself is not a hard fork. It is rather a tool to help the ecosystem to find consensus about a blocksize limit increasing hardfork and execute it. It just enables nodes and miners to agree or disagree with a change. When the majority agrees that it is needed, it can be done. Bitcoin Unlimited is not a contradiction to developer-proposed blocksize limits, to public debates or to flag day activation. Bitcoin Unlimited is not a hardfork to an unlimited blocksize. It is a tool to raise the blocksize limit without splitting the network. An instrument to find and execute consensus.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How is Bitcoin Unlimited different from Bitcoin Core?" }
                    body={ <div>
                        <p>
                            Essentially Bitcoin Unlimited is not a restriction to a certain implementation of Bitcoin. It introduces the concept of Emergent Consensus (EC), which can and should be adopted by other clients like bcoin, btcd or Core. Emergent Consensus is decentralized decision-making in action.
                        </p>
                        <p>
                            As software, Bitcoin Unlimited has forked from the C++ codebase of Bitcoin Core v0.12. Bitcoin Unlimited’s developers changed a small part of the consensus system to enable the ecosystem to find Emergent Consensus (EC) on the prevailing blocksize limit:
                        </p>
                        <ol>
                            <li>The blocksize limit is removed from the consensus rules, so that the node follows the longest chain independently from one determined by maximum blocksize.</li>
                            <li>the maximum size of a block is freely adjustable by the miners.</li>
                            <li>Nodes have the option to set the parameters Excessive Blocksize (EB) and Acceptance Depth (AD). This enables them to delay acceptance of extra-large blocks from  miners by orphaning their blocks until they reach a certain depth in the Blockchain.</li>
                        </ol>
                        <p>
                            Further, Bitcoin Unlimited develops its own improvements of the Bitcoin client, mostly focused on helping the system to scale. Examples are Xthin Blocks, Xpedited and Parallel Validation. At the same time Bitcoin Unlimited implements selected improvements made by the Open Source Bitcoin Core Project.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://bitco.in/forum/threads/closed-passed-buip001-unlimited-inspired-extensions-to-the-bitcoin-client.222/" target="_blank">BUIP001</a></li>
                            <li><a className='link--underline dim black' href="https://medium.com/@peter_r/what-were-doing-with-bitcoin-unlimited-simply-6f71072f9b94#.frhc895cf" target="_blank">What we are doing with Bitcoin Unlimited simply</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is Emergent Consensus (EC)?" }
                    body={ <div>
                        <p>
                            Emergent Consensus is a result of the underlying system of incentives ruling Bitcoin. Bitcoin Unlimited believes that the same mechanism that makes Bitcoin resilient against attacks ensures that the ecosystem of miners, users, companies, wallets, holders and so on finds a balance of the blocksize limit that satisfies both the needs for usability and decentralization. Without the need of a hard limit at all.
                        </p>
                        <p>
                            Emergent Consensus does not replace discussions and agreement between different parties of the ecosystem. Instead, it helps them to signal their personal preference, to meet at Schelling-points and to execute a consensus. Schelling points are common values where agreement occurs e.g. 1MB, 2MB. Bitcoin Unlimited gives the nodes the chance to signal and accept bigger blocks, and it gives miners the option to produce bigger blocks.
                        </p>
                        <p>
                            What Bitcoin Unlimited doesn’t do is provide the option for any part of the ecosystem to arbitrarily game the system. Nodes can’t start a sybil attack, as the miners must activate, and miners can’t enforce their will against the resistance of the ecosystem, which has the option to reject and orphan blocks as invalid.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://medium.com/@Mengerian/the-market-for-consensus-203de92ed844#.y05ia7ee2" target="_blank">The Market for Consensus</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is the Excessive Blocksize (EB)?" }
                    body={ <div>
                        <p>
                            Excessive Blocksize (or EB) is the maximum block size that a "relay node" will accept. If you’d prefer a network with a 1MB limit, you would set the EB to 1MB. You can adjust this value to be higher or lower. The default value in BU versions 1.x. is 16MB.
                        </p>
                        <p>
                            Your node will not reject a propagated block larger than your EB since it still wants to stay connected to the network. Instead, your node will deter a miner by not relaying the block. The result being that the further blocks stray from the network average block size the greater the chance of not being relayed and with it the greater the chance the block will be orphaned.
                        </p>
                        <p>
                            The Excessive Blocksize is a parameter set by both mining and non-mining nodes. With EB a node can determine a threshold of deterrence to the miners by orphaning their block.
                        </p>
                        <p>
                            MG is the maximum size block a miner will create. Miners risk having a block orphaned if it is not accepted by the network. They need to regulate the size of the blocks they make for a variety of reasons, most notably to maximize profit.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is Acceptance Depth (AD)?" }
                    body={ <div>
                        <p>
                            Acceptance Depth (AD) is the point at which you will accept the longest bitcoin block chain as valid if it exceeds your EB.
                        </p>
                        <p>
                            Acceptance depth is the second important parameter every node can set by itself. It determines a number of blocks an invalid block of the longest chain has to be buried in the blockchain to be accepted as valid. For example, if you have EB=2MB and AD=12, and the miners release a block with 2.1MB, you will ignore it – until the block is buried in the longest chain with a depth of 12 blocks.
                        </p>
                        <p>
                            This Accepted Depth feature allows nodes to deter miners from building blocks that are too large by orphaning them. At the same time, however, if leaves the option for the node to rejoin the new chain, if it is longer and reaches a certain degree of stability. In this way, an Unlimited node will not be forked off the network in the event that the network as a whole begins to accept larger blocks.
                        </p>
                        <p>
                            The standard value for Acceptance Depth is AD=12. It’s highest value is 99999999, which equals 80,000 years. If you choose EB=1 and AD=99999999, you replicate the consensus rules of Bitcoin with a 1MB limit.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://medium.com/@peter_r/the-excessive-block-gate-how-a-bitcoin-unlimited-node-deals-with-large-blocks-22a4a5c322d4#.9qlo27pfm" target="_blank">The Excessive-Block Gate</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How should I set EB and AD?" }
                    body={ <div>
                        <p>
                            It’s up to you. This is the spirit of Bitcoin Unlimited. We recommend EB16 and AD12. But it’s your decision. You can use several websites to determine the setting of other nodes, and you can estimate how much data your node can process.
                        </p>
                        <p>
                            Bitcoin Unlimited plans to support node performance analysis. This is to create graphics or a tool to help users find appropriate settings. Support for this is welcomed.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="http://nodecounter.com/bu_settings.php" target="_blank">nodecounter.com</a></li>
                            <li><a className='link--underline dim black' href="http://bunodes.com/" target="_blank">bunodes.com</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is Xthin?" }
                    body={ <div>
                        <p>
                            Extreme Thin Blocks (Xthin) was the first major contribution of the Bitcoin Unlimited team to increase Bitcoin’s scalability. It is an implementation of the Thin-Blocks concept Mike Hearn introduced in BitcoinXT. Xthin uses bloom filters to enable the nodes to predict which transactions in a block a receiving peer might be missing in its MemPool of unconfirmed transactions. All others transactions are referenced by 64-bit hashes to reduce bandwidth.
                        </p>
                        <p>
                            Xthin reduces the size of a new block, when it is propagated in the network, to something like 5-10 percent, without any loss in security or change of consensus rules. With this feature Bitcoin Unlimited solved the major bandwidth-issues against bigger blocks. Compact Blocks is a similar improvement which was implemented later in other clients. Once nodes have been running for a few days the rate of missing transactions can often drop to zero in a 24-hour period.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://bitco.in/forum/threads/buip010-passed-xtreme-thinblocks.774/" target="_blank">BUIP010</a></li>
                            <li><a className='link--underline dim black' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-presenting-our-block-propagation-results-with-xthin-da54e55dc0e4#.b6rzo74g0" target="_blank">Analyses of Xthin (part 1)</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is Xpedited?" }
                    body={ <div>
                        <p>
                            Xpedited Forwarding is a decentralized rapid block propagation system. It is an improvement over centralized  alternatives such as the Relay Network. Any BU node owner can participate in or easily setup their own Xpedited Network. It helps to propagate new blocks faster through the network and to reduce block propagation latency.
                        </p>
                        <p>
                            When a node with Xpedited gets a new block, it instantly forwards an Xthin-format block to other nodes requesting expedited forwarding. This enormously reduces the duration  of block propagation.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xpedited-forwarding.md" target="_blank">BU Xpedited Forwarding</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What is the Traffic Shaper?" }
                    body={ <div>
                        <p>
                            One of the most user-visible features of Bitcoin Unlimited is the traffic shaper. You can easily set the amount of bandwidth, both down and up, your node is allowed to consume. This traffic shaper was first introduced by Bitcoin Unlimited lead developer Andrew Stone in Bitcoin XT. The traffic shaper is an easy facility to control the usage of node bandwidth.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Is it possible to decrease the blocksize with Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            Yes. Decreasing the blocksize limit would be at the discretion of the miners, and this is no different from the situation in the 1MB-limited network, where miners could communicate and agree to maintain a smaller limit. There is an existing attack scenario of major miners producing continual empty blocks.
                        </p>
                        <p>
                            In an emergent consensus network and most full nodes are finding the average block size too large then miners can coordinate to stop producing blocks greater than some new lower limit at some point in time in the future. Once the miners follow through on this, nodes can safely lower their limits too, with no risk of being forked from the network. If the miners ignored this situation then negative feedback in the ecosystem is likely to result in a reduced BTC price affecting miner revenues. So it is in the interests of miners to not make blocks too large for most full nodes to comfortably handle.
                        </p>
                    </div> }
                    expanded={ false } />
            </div>
        );
    }
};

export default WhatIsBuFaq
