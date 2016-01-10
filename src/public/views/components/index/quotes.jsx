'use strict';

import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-wired">
                                <a href="https://www.mail-archive.com/cryptography@metzdowd.com/msg09964.html">If
                                    the network were to get that big, it would take several years, and by then,
                                    sending 2 HD movies over the Internet would probably not seem like a big deal.
                                    <br/><br/>-- Satoshi Nakamoto</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-mashable">
                                <a href="https://bitcointalk.org/index.php?topic=48.msg329#msg329">In a few decades
                                    when the reward gets too small, the transaction fee will become the main
                                    compensation for nodes. I'm sure that in 20 years there will either be very
                                    large transaction volume or no volume.
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-techcrunch">
                                <a href="https://bitcointalk.org/index.php?topic=1347.msg15366#msg15366">
                                    It can be phased in, like:
                                    <p>if (blocknumber > 115000)</p>
                                    <p>maxblocksize = largerlimit</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});