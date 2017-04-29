'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='articles'>
                <Header active='resources' />
                <Title title={strings().articles.title} />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/release-potential.png' alt='Bitcoin Unlimited - Release the Potential' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <div>
                                    <br />
                                    <h2>Why Bitcoin Unlimited</h2>
                                    <br />
                                    <div className='papers'>
                                        <p>Bitcoin has a problem. It’s consensus mechanism to adjust the limit of the 
                                        blocksize is broken. This has resultat in that parameter, planned as a temporary
                                        protection against spam, holds back the network and splits the community.</p>
                                        <p>Everybody knows for years that the problem exists: A limit restricts the size 
                                        of the blocks to 1 MB, which equals 3-4 transactions each seconds. Nearly everybody 
                                        consents that this is too less and that the limit has to be lifted. Somehow, sometime.</p>
                                        <p>This is when the problems began. Anybody agrees something has to be done, but the
                                        ecosystem is unable to find a consensus, what should be done when and in which way. 
                                        Because <strong>the mechanism to find consensus is deeply flawed.</strong></p>
                                        <p>For more than 2 years the community tried with growing desparation to find a 
                                        solution with the conventional way that burdens the whole responsibility on the 
                                        developers. The leading developers iscuss, examine, decide, release and hope that 
                                        the ecosystem follows. After two years of discussing, examining, studying, holding 
                                        workshops, writing papers and designing the result is a desaster.</p>
                                        <p><strong>A social desaster</strong> because it left back a splitted community, in which censorship, 
                                        character assasination, trolling secretive meetings and broken agreements have become 
                                        the new normals. The flawed consensus process created an ideological ossification of 
                                        narratives in which open, scientific discussion have become rare. This toxic environment
                                        lead to the burnout or rage quit of developers and choked the recruitment of new 
                                        developers.</p>
                                        <p>Maybe more important is that this failed mechanism to achieve consensus resultet
                                        in <strong>a technical desaster</strong>. After it was seen for years that Bitcoin will reach the capacity
                                        limit, after it has been discussed for years, after thousands and ten thousands of 
                                        hours have been invested in development - nothing happened. There is no consensus on
                                        a solution. SegWit is rejected by the miners, while no consensus for any other capacity 
                                        increasing upgrade seems in sight.</p>
                                        <p>Bitcoin reached its capacity limits. Blocks are 90-95 percent full, tens of thousands
                                        of transactions are regularly in queue, fees are raising, more and more use cases are 
                                        outcompeted, and there will be <strong>no growth of the economic activity</strong> in the bitcoin space.</p>
                                        <p>This is not the fault of the developers, which just do their job to develop and 
                                        promote the solution they think is best. It is the fault of a deeply flawed consensus
                                        finding process which places the burden of decision solely on the developers. This 
                                        consensus mechanism will never be able to fullfill the needs of Bitcoin as a P2P 
                                        electronic cash system, as a global and distributed digital cash system that is used 
                                        to pay for things and to transfer value. What urgently needed is a new mechanism for 
                                        the network to agree on a way forward.</p>
                                        <p><strong>Bitcoin Unlimited provides an alternative mechanism to achieve consensus</strong>. In fact 
                                        this is all what Bitcoin Unlimited does. It enables every participant of the ecosystem
                                        - miners and nodes - to signal their preferences for a blocksize limit, to decide by 
                                        itself which limits it enforces and to set a degree how long they entertain a chain that 
                                        rejects the decision of the majority of the miners.</p>
                                        <p><strong>The vision of Bitcoin Unlimited</strong> is to cut out the blocksize limit as a developer set 
                                        consensus rule but enable the ecosystem, as the whole of miners, corporations and users, 
                                        to find an emerging consensus which represents the ideal balance between capacity and 
                                        decentralization according to the participants of the ecosystem.</p>
                                        <p>Bitcoin Unlimited beliefs that letting the market decide is the only option to settle 
                                        the blocksize fight once and for all and to reroute the precious time of developers to 
                                        other important tasks. If you share this vision, we engage you to review the code of 
                                        Bitcoin Unlimited, read our manuals, learn about Excessive Blocksize, Accepted Depth and 
                                        Emerging Consensus, help providing a infrastructure to make these parameters transparent, 
                                        mine with Bitcoin Unlimited or simply run a node. Every participation is welcome.</p>
                                        
<br/>
<br/>
<br/>
<br/>
           </p>                         </div>
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
