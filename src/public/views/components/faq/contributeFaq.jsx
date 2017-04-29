'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class ContributeFaq extends React.Component {
    render() {
        return (
            <div className="pt2">

                <Section
                    title={ "Where do I find the source code of Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            Visit our <a className='link--underline dim black' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited' target='_blank'>GitHub repository</a>. If you are used to GitHub and/or other Bitcoin source code repositories you will have no problem to inspect the code and write commits. Everyone with the best interest of Bitcoin in his heart is invited to contribute to the future of Bitcoin at this important stage of its history.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How can I contribute to the development?" }
                    body={ <div>
                        <p>
                            In general, in the same way like you do with other open source projects: You simply do. Comment on PRs of other developers, write your own commits.
                        </p>
                        <p>
                            Bitcoin Unlimited permanently needs developers to review the code and to backport selected changes of Core. There are also a lot of ideas about changes out there, which need work and testing.
                        </p>
                        <p>
                            If you have a good idea you can talk with members of Bitcoin Unlimited (or become one by yourself), write a BUIP and ask Bitcoin Unlimited to fund your work.
                        </p>
                        <p>
                            In the NOLnet Bitcoin Unlimited tests Bitcoin with its consensus model. You can join it to help testing bigger blocks and emerging consensus.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "How can I vote for BUIPs?" }
                    body={ <div>
                        <p>
                            You need to be a member and sign your vote and your comment on the vote with a key responding to a Bitcoin address you verified in your membership application.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Where is the Bitcoin Unlimited Testnet?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited has a dedicated test network which can be accessed using the -chain_nol option.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "What else can I do to help?" }
                    body={ <div>
                        <p>
                            There are several things you can do:
                        </p>
                        <p>
                            Run a Bitcoin Unlimited node and signal your preferred EB/AD settings.
                        </p>
                        <p>
                            Educate other people about Bitcoin Unlimited and fight the ongoing misinformation about it.
                        </p>
                        <p>
                            If you have a Bitcoin company, run Bitcoin Unlimited, in test environment or live. If you use a SPV wallet with connection to a supernode, make sure your supernode is aware of Bitcoin Unlimited.
                        </p>
                        <p>
                            If you are the client of a Bitcoin company, ask the company to implement Bitcoin Unlimited and educate them about myths and Bitcoin Unlimited’s consensus mechanism.
                        </p>
                    </div> }
                    expanded={ false } />

            </div>
        );
    }
};

export default ContributeFaq
