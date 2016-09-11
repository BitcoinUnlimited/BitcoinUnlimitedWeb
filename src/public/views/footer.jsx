'use strict';

import React from 'react';

import { Link } from 'react-router';

export default React.createClass({

    render: function () {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-footer col-md-3 col-xs-6">
                            <h3>Our Latest Work</h3>
                            <div>
                                <div className="portfolio-image">
                                    <ul className="no-list-style footer-navigate-section">
                                        <li>
                                            <Link to='/articles'>Articles of Federation</Link>
                                        </li>
                                        <li>
                                            <a href="/resources/feemarket.pdf">Fee Market</a>
                                        </li>
                                        <li>
                                            <a href="/resources/subchains.pdf">Subchains</a>
                                        </li>
                                        <li>
                                            <a href="/resources/1txn.pdf">Bitcoin Unlimited Analysis (1-txn)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-footer col-md-3 col-xs-6">
                            <h3>Navigate</h3>
                            <ul className="no-list-style footer-navigate-section">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/download'>Download</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>FAQ</Link>
                                </li>
                                <li>
                                    <Link to='/buip'>Proposals</Link>
                                </li>
                                <li>
                                    <Link to='/members'>Members</Link>
                                </li>
                                <li>
                                    <Link to='/resources'>Resources</Link>
                                </li>
                                <li>
                                    <Link to='/conference'>Conferences</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-footer col-md-4 col-xs-6">
                            <h3>Join Us</h3>
                            <p className="contact-us-details">
                                <li>
                                    <a href="https://www.bitco.in/forum">The Bitcoin Forum</a>
                                </li>
                                <li>
                                    <a href="https://reddit.com/r/btc">Reddit /r/btc</a>
                                </li>
                                <li>
                                    <a href="https://reddit.com/r/bitcoin_unlimited">Reddit /r/bitcoin_unlimited</a>
                                </li>
                                <li>
                                    <a href="https://webchat.freenode.net/?channels=##btc">##btc on IRC</a>
                                </li>
                            </p>
                        </div>
                        <div className="col-footer col-md-2 col-xs-6">
                            <h3>News</h3>
                            <ul className="no-list-style footer-navigate-section">
                                <li>
                                    <a href="http://gavinandresen.ninja/time-to-roll-out-bigger-blocks">Time to roll out bigger blocks</a>
                                </li>
                                <li>
                                    <a href="https://medium.com/faith-and-future/why-is-bitcoin-forking-d647312d22c1">Why is Bitcoin forking?</a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@octskyward/on-consensus-and-forks-c6a050c792e7#.s7d93q1a9">On consensus and forks</a>
                                </li>
                                <li>
                                    <a href="http://gavinandresen.ninja/designing-for-success">Designing for success</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-copyright">&copy; MIT License. No Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
