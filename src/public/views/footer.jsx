'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-footer col-md-3 col-xs-6">
                            <h3>{strings().footer.latest}</h3>
                            <div>
                                <div className="portfolio-image">
                                    <ul className="no-list-style footer-navigate-section">
                                        <li>
                                            <Link to='/articles'>{strings().footer.articles}</Link>
                                        </li>
                                        <li>
                                            <a href="/resources/feemarket.pdf">{strings().footer.fee}</a>
                                        </li>
                                        <li>
                                            <a href="/resources/subchains.pdf">{strings().footer.subchains}</a>
                                        </li>
                                        <li>
                                            <a href="/resources/1txn.pdf">{strings().footer.analysis}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-footer col-md-3 col-xs-6">
                            <h3>{strings().footer.navigate}</h3>
                            <ul className="no-list-style footer-navigate-section">
                                <li>
                                    <Link to='/'>{strings().footer.home}</Link>
                                </li>
                                <li>
                                    <Link to='/download'>{strings().footer.download}</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>{strings().footer.faq}</Link>
                                </li>
                                <li>
                                    <Link to='/donate'>{strings().footer.donate}</Link>
                                </li>
                                <li>
                                    <Link to='/buip'>{strings().footer.proposals}</Link>
                                </li>
                                <li>
                                    <Link to='/members'>{strings().footer.members}</Link>
                                </li>
                                <li>
                                    <Link to='/resources'>{strings().footer.resources}</Link>
                                </li>
                                <li>
                                    <Link to='/conferences'>{strings().footer.conferences}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-footer col-md-4 col-xs-6">
                            <h3>{strings().footer.join}</h3>
                            <p className="contact-us-details">
                                <li>
                                    <a href="https://www.bitco.in/forum">{strings().footer.forum}</a>
                                </li>
                                <li>
                                    <a href="https://reddit.com/r/btc">{strings().footer.reddit1}</a>
                                </li>
                                <li>
                                    <a href="https://reddit.com/r/bitcoin_unlimited">{strings().footer.reddit2}</a>
                                </li>
                                <li>
                                    <a href="mailto:trevinhofmann@gmail.com?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould+you+please+invite+me+to+the+Bitcoin+Unlimited+Slack+group%3F+My+email+address+is+%5BINSERT+EMAIL+ADDRESS+HERE%5D.%0D%0A%0D%0AThank+you%21">{strings().footer.slack}</a>
                                </li>
                                <li>
                                    <a href="https://webchat.freenode.net/?channels=##btc">{strings().footer.irc}</a>
                                </li>
                            </p>
                        </div>
                        <div className="col-footer col-md-2 col-xs-6">
                            <h3>{strings().footer.news}</h3>
                            <ul className="no-list-style footer-navigate-section">
                                <li>
                                    <a href="http://gavinandresen.ninja/time-to-roll-out-bigger-blocks">{strings().footer.time}</a>
                                </li>
                                <li>
                                    <a href="https://medium.com/faith-and-future/why-is-bitcoin-forking-d647312d22c1">{strings().footer.why}</a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@octskyward/on-consensus-and-forks-c6a050c792e7#.s7d93q1a9">{strings().footer.consensus}</a>
                                </li>
                                <li>
                                    <a href="http://gavinandresen.ninja/designing-for-success">{strings().footer.designing}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-copyright">&copy; {strings().footer.copy}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
