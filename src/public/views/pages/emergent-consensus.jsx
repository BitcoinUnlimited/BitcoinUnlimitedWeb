'use strict';

import React from 'react';
import {Link} from 'react-router';

import { strings } from '../../lib/i18n';
import Header from '../header.jsx';
import Footer from '../footer.jsx';
import ImageWithLabel from '../components/emergent-consensus/imageWithLabel.jsx'

class EmergentConsensus extends React.Component {
    render() {
        return (
            <div id='emergent-consensus'>
                <Header/>
                <div className='center'>
                    <div className="inline-block p2 py4 post__container ">
                        <div className='center'>
                            <div className='inline-block h1 py2 post__title'>
                                Introduction to Emergent Consensus
                            </div>
                        </div>
                        <div className="lh-copy italic left-align py2">
                            The principles of emergence in nature can be applied in the Bitcoin network to enable emergent consensus for <div className='inline italic'>block-size </div>limiting, referred to as "EC"
                        </div>


                        <div className='lh-copy pt3 py1 center bold'>
                            Emergence — Fundamental to Nature
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Emergence is everywhere in nature. From crystals and snowflakes to the spiralling shape of galaxies, macroscopic properties of liquids to weather patterns, ant-hills and living organisms. Yet this is a Cinderella science because the phenomenon of emergence is difficult to predict, except in simple cases. This field is the study of <div className='inline italic'>complexity</div>, and therefore includes complex adaptive systems. Such systems have many individuals interacting according to simple rules and thereby producing 2nd-order or system-wide effects.
                        </div>
                        <ImageWithLabel
                            src='../img/emergent-consensus/1.jpeg'
                            alt='Emergent Phenomena'
                            label="Fig 1. Interaction at peer-to-peer level produces emergent phenomena with top-down feedback"
                            />
                        <div className='lh-copy py1 left-align'>
                            This graphic by the anthropologist Richard Seel breaks down the process of emergence.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            It begins at (A) with discrete entities such as molecules, insects, or humans. At (B) there is interaction. A construct emerges in (C) transcending the entities. It could be a vortex, beehive, or a market price. Finally in (D) there is top-down causation shaping how the individual entities behave. Causation takes varied forms like natural selection or adaptive information control. Emergence drives self-organization, and it can be hierarchical with many layers such as in multicellular biology. Reductionism fails at first base because not even all the layers are known. An emergent property is simultaneously part of a system and also external to it. Emergence depends upon a system to become manifest but also transcends it at the same time.
                        </div>


                        <div className='lh-copy pt3 py1 center bold'>
                            Emergent Consensus — Decentralized Block Size Limiting
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Bitcoin can harness emergence to achieve problem-solving benefits. The reason is that its global network comprises thousands of independent nodes which are usually owned by different people. Bitcoin nodes also communicate to each other via peer-to-peer message interaction. These features mean that the addition of simple rules allows complex network-wide behaviour to develop <div className='inline italic'>outside </div> the messaging layer.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            There is already emergent consensus from the Bitcoin network: the market price of BTC. This is determined on exchanges by buyers and sellers. Although the market price is outside the network it would vanish if the network itself vanished.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Bitcoin nodes which participate in EC simply need to allow flexiblity in determining a block size limit — flexibility where full node owners set the maximum sizes for blocks that they will make and accept, also the delay for acceptance of oversized blocks. This capability for delayed acceptance effectively makes nodes become fork tolerant where forks exist due to block size limit disagreement. Because of this the forks will always be transient.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Bitcoin full nodes interact during block propagation. The differences in EC settings have a holistic effect on participating nodes and once critical mass occurs then emergence results effecting a varying block size limit <div className='inline italic'>on the entire network </div>by top-down feedback. A top-down block size limit is an irrational number that oscillates as node owners change their settings. it can never be known exactly, only approximated.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Security aspects for Bitcoin businesses can be handled in an EC implementation. Consider the case of a peer-to-peer exchange, which treats transactions as final after three confirmations. In this case the addition of software which detects a fork situation can provide an automatic stop on treating transactions as final, until the temporary fork is resolved completely. Such a safety-net would rarely inconvenience users.
                        </div>


                        <div className='lh-copy pt3 py1 center bold'>
                            Bitcoin Implementations — EC enabled
                        </div>
                        <div className='lh-copy py1 left-align'>
                            One of the features of EC is that development teams can choose different methodologies for nodes to converge on an EC-driven block size limit. In this situation the actual prevailing limit becomes a <div className='inline italic'>meta-consensus</div>, or a second layer of consensus which is an optimal synthesis of the lower-layers, weighted by the number of nodes which use the different flavors of EC.
                        </div>
                        <div className='lh-copy py1 left-align'>
                            Links are provided for detailed explanations about how EC is used in different Bitcoin implementations:
                        </div>
                        <ul>
                            <li className='left-align py2'>
                                <a className='black dim link--underline' href="https://bitcoinclassic.com/devel/Blocksize.html" target="_blank">Bitcoin Classic</a>
                            </li>
                            <li className='left-align py2'>
                                <Link className='black dim link--underline' to="/emergent-consensusBU">Bitcoin Unlimited</Link>
                            </li>
                            <li className='left-align py2'>
                                <a className='black dim link--underline' href="https://github.com/jgarzik/bip100/blob/master/bip-0100.mediawiki" target="_blank">Bitcoin XT</a>
                            </li>
                        </ul>

                        <div className='lh-copy pt3 py1 center bold'>
                            Further Reading
                        </div>
                        <ul>
                            <li className='left-align py2'>
                                <a className='black italic dim link--underline' href="http://www.pbs.org/wgbh/nova/nature/emergence.html" target="_blank">Emergence</a> Nova ScienceNOW
                            </li>
                            <li className='left-align py2'>
                                <a className='black italic dim link--underline' href="https://arxiv.org/pdf/nlin/0506028.pdf" target="_blank">Types and Forms of Emergence [PDF]</a> by Jochen Fromm
                            </li>
                        </ul>

                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default EmergentConsensus
