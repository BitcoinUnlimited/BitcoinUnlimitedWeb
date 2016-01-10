'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <h2>What is Bitcoin Unlimited?</h2>
                    <div className="vision">
                        <p>The Bitcoin Unlimited (BU) project seeks to provide a voice to all
                            stakeholders in the Bitcoin ecosystem.</p>
                        <p>Every node operator or miner can currently choose their own blocksize limit
                            by modifying their client. Bitcoin Unlimited makes the process easier by
                            providing a configurable option for the accepted and generated blocksize via
                            a GUI menu. Bitcoin Unlimited further provides a user-configurable failsafe
                            setting allowing you to accept a block larger than your maximum accepted
                            blocksize if it reaches a certain number of blocks deep in the chain.</p>
                        <p>By moving the blocksize limit from the protocol layer to the transport layer,
                            Bitcoin Unlimited removes the only point of central control in the Bitcoin
                            economy - the blocksize limit - and returns it to the nodes and the miners.
                            An emergent consensus will thus arise based on free-market economics as the
                            nodes/miners converge on consensus focal points, creating in the process a
                            living, breathing entity that responds to changing real-world conditions in
                            a free and decentralised manner.</p>
                        <p>This approach is supported by the evidence accumulated over the past six
                            years. The miners and node operators have until now been free to choose a
                            soft limit which, as demand grew, has always been increased in a responsive
                            and organic manner to meet the needs of the market. We expect miners to
                            continue in this tested and proven free-market way by, for instance,
                            coordinating to set a new generated blocksize limit of 2MB and reject any
                            blocks larger than 2MB unless they reach 4 blocks deep in the longest chain.
                            As demand increases, the limit can easily be increased to 3MB, 4MB, and so
                            on, thus removing central control over the process of finding the
                            equilibrium blocksize by allowing the free market to arrive at the correct
                            choice in a decentralised fashion.</p>
                        <p>As a foundational principle, we assert that Bitcoin is and should be whatever
                            its users define by the code they run, and the rules they vote for with
                            their hash power.</p>
                        <p>Bitcoin Unlimited seeks to remove existing practical barriers to stakeholders
                            expressing their views in these ways.</p>
                        <p>For more details, read our <Link to='/articles'>Articles of Federation</Link>.</p>
                        <p>The Bitcoin Unlimited client is not a competitive block scaling
                            proposal like BIP-101, BIP-102, etc. Instead it tracks consensus.
                            This means that it tracks the blockchain that the hash power
                            majority follows, irrespective of blocksize, and signals its ability
                            to accept larger blocks via protocol and block versioning
                            fields.</p>
                        <p>If you support an increase in the blocksize limit by any means -- or
                            just support Bitcoin conflict resolution as originally envisioned by
                            its founder -- consider running a <Link to='/download'>Bitcoin
                                Unlimited</Link> client.</p>
                    </div>
                </div>
            </div>
        );
    }

});