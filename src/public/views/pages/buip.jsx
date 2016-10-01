'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='buip'>
                <Header active='buip' />
                <Title title={strings().buip.title} />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/buip.png' alt='Bitcoin Unlimited Proposals' />
                                    </div>
                                </div>
                                <div className='col-sm-8'>
                                    <p>
                                        <br />
                                        <h2 className='green'>{strings().buip.proposals}</h2>
                                        <br />
                                        <a href='https://bitco.in/forum/threads/buip001-unlimited-inspired-extensions-to-the-bitcoin-client.222'>BUIP-001</a>
                                        &nbsp;"Unlimited" inspired extensions to the Bitcoin Client&nbsp;
                                        <u className='green'>PASSED</u>
                                        &nbsp;13/2
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
