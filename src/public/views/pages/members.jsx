'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='members'>
                <Header active='members' />
                <Title title='Supporting Members' />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='img/vires-in-numeris.png' alt='Strength in Numbers' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <p>
                                    <br />
                                    <center><h2 className='green'>Members</h2></center>
                                    <center><a href='https://bitco.in/forum/threads/bitcoin-unlimited-membership-join-us.208/page-2'>join us</a></center>
                                    <br /><br />
                                    <h3>Andrew Stone (theZerg): 1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3</h3>
                                    The Bitcoin Unlimited client allows Bitcoin to realise the vision presented by Satoshi Nakamoto in his original whitepaper and subsequent writings of a trustless peer-to-peer network -- a vision of individuals worldwide directly transacting without a need for intermediaries.
                                    <h3>awemany</h3>
                                    <h3>solex</h3>
                                    <h3>Inca</h3>
                                    <p>I believe Bitcoin Unlimited is necessary to steer Bitcoin back towards the original ideal envisioned by Satoshi Nakamoto. Network consensus should decide what bitcoin is or will be in the future - not individual developers and that is why I support Bitcoin Unlimited wholeheartedly. </p>
                                    <h3>Melbustus</h3>
                                    I support Bitcoin Unlimited because:
                                    <ol>
                                        <li>It gives control of blocksize back to the free-market and doesn't try to unnecessarily engineer economic outcomes.</li>
                                        <li>It supports one of the core theses of Bitcoin; namely, that the system is defined by the code its users in aggregate run.</li>
                                        <li>It is inherently supportive of larger blocksize, which I think is critical for bitcoin's longterm security and success. Larger blocks will allow a larger volume of on-chain fee-generating transactions, and bitcoin can only be secure and succeed as the dominant cryptocurrency if it can scale to accommodate demand for transactions both large and small.</li>
                                        <li>It provides another outlet for users to voice their opinion, both through running the Bitcoin Unlimited node software, and potentially through participating in or supporting the Bitcoin Unlimited mining pool. There are increasing numbers of bitcoin users who do not participate in running node software nor hashing, and the Bitcoin Unlimited project provides more options for all participants.</li>
                                    </ol>
                                    <br />
                                    <h3>cypherdoc</h3>
                                    [I] think i've already said enough.
                                    <br /> <br />
                                    <h3>Peter R</h3>
                                    I want to be a member because I believe in Bitcoin Unlimited's vision. For Bitcoin to be successful, it must be able to evolve through a bottom-up organic process. Bitcoin Unlimited gives additional power to the user to control its evolution in a fully decentralized fashion.
                                    I can help by developing analytic theory, empirical data analysis, visualizations, and scientific writing.
                                    <br /> <br />
                                    <h3>sickpig</h3>
                                    [T]he protocol has to be decoupled from any particular implementation.
                                    [T]he more choices users have the better.
                                    <br /> <br />
                                    <h3>mintymark</h3>
                                    I feel strongly that this proposal is the right way to go and that eventually this will be clear to everyone.
                                    Consensus does not need to built into the software and may even be a liability if it is, far better to let people express consensus by making it a command line option.
                                    <br /> <br />
                                    <h3>Zangelbert Bingledack</h3>
                                    The paternalistic view of having devs spoonfeed all consensus-related choices to the user seems like it won't be viable at the much higher market caps Bitcoin is destined to reach. Gradually users will have to be given more explicit fine-grained control in order to enable Bitcoin to react nimbly to general threats, as well as specifically to scenarios where developers are compromised.
                                    The addition of XT as an alternative to Core is an improvement over just Core, because it at least lets users choose who spoonfeeds them consensus packages; BU (at least the version with user-selectable blocksize) takes it to the next level and gives users more of a "line-item veto" on these dev-created consensus packages. It doesn't overly baby the user but instead encourages miners and nodes to perform their own profit-loss calculations, expanding the scope of the free market by removing the centrally planned blocksize cap that has been retained for paternalistic reasons. Consensus becomes an emergent phenomenon.
                                    I believe we have in fact always been trusting the free market from the beginning in Bitcoin, so BU just lays bare the underlying reality without entertaining the pretense that blockspace economic knowledge *or even real control* lies with the Core devs.
                                    In short, it's time for Honey Badger to grow up and assume its true form as a creature of the market.
                                    <br /> <br />
                                    <h3>Erdogan</h3>
                                    I campaign for bitcoin as free market money, the market will decide everything. I like the market. Unfortunately, I am lazy...
                                    <br /> <br />
                                    <h3>seweso</h3>
                                    <h3>VeritasSapere</h3>
                                    I support the vision of Bitcoin Unlimited. I support an increased blocksize and multiple implementations of the Bitcoin protocol. If we need to rely on a centralized authority for Bitcoin to survive then we should consider this experiment to have failed to prove its intended theory at least in the form of Bitcoin, trust without centralized authority. So sign me up, there is more I could say on the subject but I will leave it at that for now.
                                    <br /> <br />
                                    <h3>steffen</h3>
                                    I would like to be a member because I am a market anarchist and the block size limit serves no constructive use. I can help financially and can help spread awareness.
                                    <br /> <br />
                                    <h3>lebing</h3>
                                    <h3>bitcartel</h3>
                                    <h3>lunarboy</h3>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
