'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class HardForksAndConsensusFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ "Would Bitcoin Unlimited start a hard fork?" }
                    body={ <div>
                        <p>
                            No, Bitcoin Unlimited doesn’t implement a hardfork by itself. Even if 100 percent of the miners use Bitcoin Unlimited. If the economy doesn’t want a hardfork, miners would only waste money trying. This is part of Nakamoto Consensus.
                        </p>
                        <p>
                            All Bitcoin Unlimited does is provide a tool for miners and full nodes to find consensus on the maximum prevailing block size limit. To overcome the 1MB which is in the software a hardfork is required and miners would orchestrate its execution to minimize the chance of  a permanent split in the blockchain.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How can a hard fork be done with Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited has no script to create a hard fork. It just gives the stakeholders this option. How they use it is up to them. A possible way to hard fork to bigger blocks was laid out by the Mining Pool ViaBTC which suggests an activation plan at a certain block height after an agreement of at least 75 percent of the hashrate.
                        </p>
                        <p>
                            It’s important to note that this is just one option. Bitcoin Unlimited gives the whole ecosystem the flexibility to commonly find a reliable and secure way to increase the maximium block size limit from 1MB. Come together, discuss, decide, do.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://medium.com/@ViaBTC/miner-guide-how-to-safely-hard-fork-to-bitcoin-unlimited-8ac1570dc1a8#.x9bpw7eld" target="_blank">Miner Guide: How to Safely Hard Fork to Bitcoin Unlimited</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Can Bitcoin Unlimited have a flag day activation?" }
                    body={ <div>
                        <p>
                            Since Bitcoin Unlimited doesn’t activate a hard fork by itself, it doesn’t need a flag day. But it can easily have one: Anybody - including other Bitcoin development teams - can write a flag day code which determines at which block height the EB-setting is raised above 1MB. In fact this is probably how a hard fork with Bitcoin Unlimited might happen.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How does Bitcoin Unlimited change the consensus mechanism?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited does not change consensus rules. It simply changes the consensus mechanism by taking the block size limit from control of software developers and gives it to all the users. With 1MB-limited software a node follows the longest chain with blocks smaller-than-or-equal-to 1MB. With Bitcoin Unlimited it follows the longest chain, independently of the validity of the block size. Some full-node implementations rely on developers to make decisions for the ecosystem, Bitcoin Unlimited decentralizes the decision process to the ecosystem users and makes it a transparent process.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Does Bitcoin Unlimited always prefer a hard fork over a soft fork?" }
                    body={ <div>
                        <p>
                            Most Bitcoin Unlimited members agree that you should start with the problem and not with the solution. Different cases require different tools. There are cases in which a hard fork is the only viable option, like the block size limit increase from 1MB, while there are also cases in which a soft fork is appropriate. Bitcoin Unlimited takes an agnostic approach on hard vs. soft forks.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What do Bitcoin Unlimited members think about a User-Activated Soft fork (UASF)?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited rejects attempts to intentionally split the network with any minority hash-rate fork. These are contentious forks which break the unity of ecosystem and miners. Bitcoin Unlimited adheres to Nakamoto Consensus which requires > 50% hash-rate to determine the correct chain strongly recommending a higher percentage in any hard fork event.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-March/013714.html" target="_blank">[bitcoin-dev] Flag day activation of segwit</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />
            </div>
        );
    }
};

export default HardForksAndConsensusFaq
