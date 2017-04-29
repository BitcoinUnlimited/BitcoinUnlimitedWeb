'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class WhoIsBuFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ "Who are the founders of Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited is a grassroots project which emerged in a forum where a couple of early adopters disputed the blocksize issue from a more economical perspective and saw themselves banned from the biggest bitcoin forum, which had been their digital home so far.
                        </p>
                        <p>
                            After realizing that Bitcoin itself doesn’t need a hard blocksize limit, but that it has sufficient mechanism to prevent excessively large blocks, like orphans, some developers started to fork the Bitcoin reference client, eliminate the limit and introduce mechanism to strengthen Bitcoins natural balances and incentives. In early 2016 Bitcoin Unlimited was born. Since then it gathers a growing number of followers which share the founder’s vision on how Bitcoin should scale.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Does Bitcoin Unlimited have a constitution?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited is not just a result of the blocksize-problem, but also of the censorship / moderation on the most important communication channels of the Bitcoin community and the insight that Bitcoin’s lack of governance mechanism has resulted in a growing toxicity and a splitted community. Thus the founding members felt the pressure to start Bitcoin Unlimited with a new vision how Bitcoin development can be governed and organized. Their shared beliefs manifested itself in the Articles of Constitution.
                        </p>
                        <p>
                            This Articles outline the organization of Bitcoin Unlimited and the relationships between members of Bitcoin Unlimited and special roles and how decisions about Bitcoin Unlimited Improvement Proposals (BUIP) shall be made.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="/resources/BUarticles.pdf" target="_blank">The Articles of Federation [PDF]</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Who can become member of Bitcoin Unlimited and what do members do?" }
                    body={ <div>
                        <p>
                            Every member of Bitcoin Unlimited can vote on so called "Bitcoin Unlimited Improvement Proposals" (BUIP), release a BUIP for voting and apply for positions in Bitcoin Unlimited like secretary, developer and so on (see <a className='link--underline dim black' target='_blank' href='/resources/BUarticles.pdf'>Articles [PDF]</a>).
                        </p>
                        <p>
                            Membership is free, but requires the approval by other members through a public voting. To reduce the risk to be overrun by trolls, the current members of Bitcoin Unlimited decide on new members based on the information and social media profiles they disclose. There is no basic right to be accepted as a member.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Who are the developers of Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            The developers of Bitcoin Unlimited is a growing team of people disappointed with the lack of progress in on-chain scaling. It consists of members of different parts of the ecosystem around Andrew Stone, Peter Tschipper and Andrea Suisani.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How is Bitcoin Unlimited funded?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited started with no funds as a voluntary project. During 2016 Bitcoin Unlimited received a large donation about 700 Bitcoin. Thanks to the development of the price of Bitcoin the value of this investment grew with time.
                        </p>
                        <p>
                            Bitcoin Unlimited is all in. It has zero funds in fiat money. It uses the Bitcoins to support the development of features of the client and other initiatives the members of Bitcoin Unlimited voted on. The funds are mostly, but not exclusively used to finance the development of the Bitcoin Unlimited client, with a focus on scalability.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Is Bitcoin Unlimited’s use of the funds transparent?" }
                    body={ <div>
                        <p>
                            Yes, please refer to our <a className='link--underline dim black' href="https://bitco.in/forum/threads/bitcoin-unlimited-financial-report-1-june-2016-31-december-2016.1818/" target="_blank">latest financial report</a>.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What are BUIPs?" }
                    body={ <div>
                        <p>
                            BUIP is the abbreviation of “Bitcoin Unlimited Improvement Proposal”. The founders of Bitcoin Unlimited developed this method to propose, discuss and decide improvements. In Bitcoin Unlimited every member is allowed to propose, discuss and vote on BUIPs.
                        </p>
                        <p>
                            One of the ideals of Bitcoin Unlimited is that not just developers, but members of all parts of the ecosystem should be allowed to decide on the course of Bitcoin development, as Bitcoin is not just a technology, but also an ecosystem.
                        </p>
                        <p>
                            If you are not a member but want to propose a BUIP, you can just ask a member to propose it for you. If your proposal is well-intended and reasonable, you’ll most likely find a member to support you happily.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What type of an organization is Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited is a registered not-for-profit organization.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Where do I get in contact with the Bitcoin Unlimited team?" }
                    body={ <div>
                        <p>
                            Talk with us on bitco.in, become member of the Bitcoin Unlimited Slack channel. Here you for sure will find someone from the team to help you out.
                        </p>
                    </div> }
                    expanded={ false } />
            </div>
        );
    }
};

export default WhoIsBuFaq
