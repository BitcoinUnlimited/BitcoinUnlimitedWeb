'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='donate'>
                <Header active='donate' />
                <Title title={strings().donate.title} />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-3'>
                                <div className='service-image'>
                                    <img src='/img/donation-address-qr.png' alt='Fingerprint' />
                                </div>
                            </div>
                            <div className='col-sm-9'>
                                <h2 className="green">{strings().donate.supportus}</h2>
                                <p>
                                    {strings().donate.intro}
                                </p>
                                <p>
                                    {strings().donate.address}
                                </p>
                                <p><pre>
                                    36XTMVtgJqqNYymsSvRonpUsbZRGkm1jvX
                                </pre></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
