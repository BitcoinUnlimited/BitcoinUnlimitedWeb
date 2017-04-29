'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class AttacksAndRisksFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ 'Does Bitcoin Unlimited inevitably lead to "a centralized future"?' }
                    body={ <div>
                        <p>
                            There is the theory alleging that with Bitcoin Unlimited miners, with or without exchanges and wallet-providers, would inevitably build a cartel and continually increase the blocksize, making blocks finally so large, that nobody except large institutions could run a node.
                        </p>
                        <p>
                            This theory doesn’t explain why and when the ecosystem might do so. Instead it grossly misunderstands the roles and incentives in Bitcoin Unlimited, while completely ignoring the mechanics of open source and the market. If 80 percent of the ecosystem decides to conspire against the rest, they could do so today. Bitcoin Unlimited doesn’t change this. It doesn’t force anybody to use specific settings and it doesn’t prevent anybody from forking Bitcoin. Nakamoto consensus is built on the belief that a majority of economic actors will NOT intentionally destroy Bitcoin.
                        </p>
                        <p>
                            The theory, that Bitcoin Unlimited inevitably leads to a centralized future, is the same theory the states deploy to legitimize regulation of markets. Bitcoin need not, cannot and must not be regulated.
                        </p>
                        <p>
                            Further reading:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://blog.sia.tech/a-future-led-by-bitcoin-unlimited-is-a-centralized-future-e48ab52c817a#.jxd6f1c91" target="_blank">A Future Led by Bitcoin Unlimited is a Centralized Future</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Can a Miner split the chain with a single block?' }
                    body={ <div>
                        <p>
                            Another attack theory alleges that a single miner with a hashrate of less than one percent can split the chain one time each day. The attack goes like this: IF the miners set arbitrarily EB parameters, and IF they don’t observe co-operation, and IF an attackers finds a block, than he can push some miners to mine on the wrong chain for some blocks. This attack is grossly misunderstood and exaggerated.
                        </p>
                        <p>
                            First, because it is not an attack, but a feature: If a miner does something stupid, he risks to be punished by someone else. This is to be expected. The so-called attack is a mechanism to ensure that miners act reasonably and don’t arbitrarily set EB parameters.
                        </p>
                        <p>
                            Secondly, even if this attack did happen, it would mostly cost the attacker far more than the victim, and could be easily preventable from doing any damage by simple software solutions.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Can Bitcoin Unlimited be subject to a Sybill Attack by nodes?' }
                    body={ <div>
                        <p>
                            Non-mining nodes can be sybilled by definition, which is the reason Satoshi implemented mining in Bitcoin. You can set up thousands of nodes signalling something like EB=1000, but you can not fake hashrate voting with the coinbase transaction. Miners have to be careful to find a balance between taking node signals seriously but not falling for sybil attacks.
                        </p>
                        <p>
                            Bitcoin Unlimited is confident that the spirit of open source will create Sybil-sensitive node explorers, just as the competition in clients leads to the creation of great sites like such as coin.dance, nodecount.com or bunodes.com.
                        </p>
                        <p>
                            Node status sites:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://coin.dance/" target="_blank">coin.dance</a></li>
                            <li><a className='link--underline dim black' href="http://nodecounter.com/" target="_blank">nodecounter.com</a></li>
                            <li><a className='link--underline dim black' href="http://bunodes.com/" target="_blank">bunodes.com</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Do I need AD confirmations to be secure that I have been paid?' }
                    body={ <div>
                        <p>
                            This scenario in an EC network will be as rare as today, nevertheless, what if there is a hardfork while you are waiting for a payment to confirm? What if you received $1,000 in Bitcoin in exchange for a product or service, but during confirmation there is a chain split, and the pending transaction has only been confirmed on one chain and is unconfirmed after a reorg?
                        </p>
                        <p>
                            First, the transaction will be in node mempools for a couple of days, and will likely be mined quickly. Secondly, the Bitcoin Unlimited software provides an api call which enables wallets to advise when a payment is received after a fork-point. Then you can delay delivery of the product or service until the fork is resolved.
                        </p>
                        <p>
                            Making an alert part of the standard wallet software is sufficient safeguard.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Does Bitcoin Unlimited keep transaction fees at zero forever and prevent the development of a fee market?' }
                    body={ <div>
                        <p>
                            The "fee-market" is a myth. There is a market for blockspace, and blockspace will always be limited by the miners. For the next one or two decades Bitcoin might be able to pay the security the miners provide with the block reward. In the mid-term future however the income of miners has to be paid more and more with fees instead of the reward. This will inevitably change the economy of Bitcoin in an unpredictable, uncontrollable, emerging way.
                        </p>
                        <p>
                            Bitcoin Unlimited highly rejects the idea, that this future transition should be planned by current developers and enforced by artificially choking the supply of transaction. The theory that an artificial limitation of supply should guarantee income of producers, is a relict of medieval economics.
                        </p>
                        <p>
                            At the same time, a transaction always has a cost. The bigger the block, the higher the risk it is orphaned, especially when Parallel Validation is activated. Transactions will not be included in the blockchain for free.
                        </p>
                        <p>
                            There are thousands of possibilities how a fee market will emerge and how miners make their income. Bitcoin Unlimited is all for letting the fee market organically grow as an ongoing and fluid emerging consensus of the ecosystem.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://www.bitcoinunlimited.info/resources/feemarket.pdf" target="_blank">A Transaction Fee Market Exists Without a Block Size Limit [PDF]</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Does Bitcoin Unlimited break SPV / Lightwallets?' }
                    body={ <div>
                        <p>
                            Unlike upgrades of the transaction format as SegWit, Bitcoin Unlimited does not break Light and SPV-wallets. In fact, most users of Bitcoin would not even notice something happens when the blocksize upgrades with the method implemented by Bitcoin Unlimited. Except that they would no longer need to pay high fees and wait an unpredictable amount of time for confirmations.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ 'Does Bitcoin Unlimited fix malleability?' }
                    body={ <div>
                        <p>
                            Yes, Bitcoin Unlimited has R&D into FlexTrans from Bitcoin Classic, an implementation of Bitcoin.
                        </p>
                    </div> }
                    expanded={ false } />
            </div>
        );
    }
};

export default AttacksAndRisksFaq
