'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class Technical extends React.Component {
    render() {
        return (
            <div className='p2'>
                <div className='inline-block underline'>On block space</div>
                <ul>
                    <Resource title={
                        <div>
                            Rizun, P. R.  'A Transaction Fee Market Exists Without a Block Size Limit.' <div className='inline-block italic'>Scaling Bitcoin Conference Montreal</div>. 2015
                            <a className='px1 dim black' target='_blank' href="/resources/feemarket.pdf">(Article [PDF])</a>
                            <a className='dim black' target='_blank' href="https://www.youtube.com/watch?v=ad0Pjj_ms2k">(Video)</a>
                        </div>
                        } body={ strings().resources.technical.space[0].body } />

                    <Resource title={
                        <div>
                            Stone, G. A. 'An Examination of Single-Transaction Blocks and Their Effect on Network Throughput and Block Size.' 2015
                            <a className='px1 dim black' target='_blank' href="/resources/1txn.pdf">(Article [PDF])</a>
                        </div>
                        } body={ strings().resources.technical.space[1].body } />
                </ul>

                <div className='inline-block underline'>On block propogation</div>
                <ul>
                    <Resource title={
                        <div>
                            Clifford, A., Rizun, P. R., Suisani, A., Stone, G. A., Tschipper, P. 'Towards Massive On-Chain Scaling: Presenting Our Block Propagation Results With Xthin.' <div className='inline-block italic'>Medium</div>. 2016
                            (<a className='dim black' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-presenting-our-block-propagation-results-with-xthin-da54e55dc0e4#.ul0jjmv4z">part 1</a>,
                             &nbsp;<a className='dim black' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-block-propagation-results-with-xthin-a0f1e3c23919#.wsra89mur">part 2</a>,
                             &nbsp;<a className='dim black' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-block-propagation-results-with-xthin-792a752c14c2#.rfjlafye5">part 3</a>,
                             &nbsp;<a className='dim black' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-block-propagation-results-with-xthin-3512f3382276#.l5g1gamk5">part 4</a>,
                             &nbsp;<a className='dim black' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-block-propagation-results-with-xthin-5145c9648426#.ltqy6g7l0">part 5</a>)
                        </div>
                    } body={ strings().resources.technical.propogation[0].body } />

                <Resource title={
                        <div>
                            Rizun, P. R. 'Subchains: A Technique to Scale Bitcoin and Improve the User Experience.' <div className='inline-block italic'>Ledger</div>, vol. 1, p. 38-52, Dec. 2016. ISSN 2379-5980
                            <a className='px1 dim black' target='_blank' href="http://ledgerjournal.org/ojs/index.php/ledger/article/view/40">(Article)</a>
                            <a className='dim black' target='_blank' href="http://dx.doi.org/10.5195/ledger.2016.40">(DOI)</a>
                        </div>
                    } body={ strings().resources.technical.propogation[1].body } />
                </ul>

                <div className='inline-block underline'>On consensus</div>
                <ul>
                    <Resource title={
                        <div>
                            Zegers, A. 'The Market for Consensus.' <div className='inline-block italic'>Medium</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://medium.com/@Mengerian/the-market-for-consensus-203de92ed844#.5rwqjma0m">(Article)</a>
                        </div>
                        } body={ strings().resources.technical.consensus[0].body } />

                    <Resource title={
                        <div>
                            Swingle, J. 'Bitcoin Etiquette: Choosing the Proper Fork.' <div className='inline-block italic'>Satoshi's Vision Conference San Francisco</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://www.youtube.com/watch?v=GS4gEWp2F10&feature=youtu.be">(Video)</a>
                        </div>
                        } body={ strings().resources.technical.consensus[1].body } />
                </ul>

                <div className='inline-block underline'>On Bitcoin Unlimited</div>
                <ul>
                    <Resource title={
                        <div>
                            Stone, G. A. 'Emergent Consensus Simulations.' <div className='inline-block italic'>Medium</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://medium.com/@g.andrew.stone/emergent-consensus-simulations-99604190fa31#.wrcsja6yy">(Article)</a>
                        </div>
                        } body={ '' } />

                    <Resource title={
                        <div>
                            Rizun, P. R. 'The Excessive Block Gate: How a Bitcoin Unlimited Nodes Deals with 'Large' Blocks.' <div className='inline-block italic'>Medium</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://medium.com/@peter_r/the-excessive-block-gate-how-a-bitcoin-unlimited-node-deals-with-large-blocks-22a4a5c322d4#.riqy7lm36">(Article)</a>
                        </div>
                        } body={ strings().resources.technical.bu[0].body } />
                </ul>

            </div>

        )
    }
}


export default Technical
