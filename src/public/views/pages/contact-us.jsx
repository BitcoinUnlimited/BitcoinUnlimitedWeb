'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import { strings } from '../../lib/i18n';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {
        return (
            <div id='contactus'>
                <Header active='contact-us' />
                <Title title='Contact Us' />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/plato-aristotle.jpg' alt='Agora' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <h2 className='green'>Get in contact</h2>
                                <p>
                                  BitcoinUnlimited.info website does not provide general support on the BU projects, to get general support please have a look at these resources:
                                </p>
                                <ul>
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
                                      <a href="mailto:info@bitcoinunlimited.info?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould%20you%20please%20invite%20me%20to%20the%20Bitcoin%20Unlimited%20Slack%20group%3F%20My%20email%20address%20is%20%5BINSERT%20EMAIL%20ADDRESS%20HERE%5D.%0D%0A%0D%0AThank%20you%21">{strings().footer.slack}</a>
                                   </li>
                                   <li>
                                      <a href="https://webchat.freenode.net/?channels=#btc">{strings().footer.irc}</a>
                                   </li>
                                   <li><a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/issues'>Issues Tracker</a></li>
                                </ul>
                                <p>To report about security issues, please use this email <a href="mailto:security@bitcoinunlimited.info">security@bitcoinunlimited.info</a> (don't use it for generic enquires).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
