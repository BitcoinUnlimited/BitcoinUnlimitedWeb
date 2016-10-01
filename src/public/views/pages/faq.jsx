'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='faq'>
                <Header active='faq' />
                <Title title={strings().faq.title} />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/faq.jpg' alt='All your Questions About Bitcoin Unlimited Answered' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <h2 className='green'>{strings().faq.subtitle}</h2>
                                    <div className='papers'>
                                        <h5>{strings().faq.q1}</h5>
                                        <p>{strings().faq.a1a}</p>
                                        <p>{strings().faq.a1b}
                                        </p>
                                        <p>
                                            {strings().faq.a1c}
                                            {' '}
                                            <a href='/resources/feemarket.html'>{strings().faq.a1d}</a>.
                                        </p>
                                        <h5>{strings().faq.q2}</h5>
                                        <p>{strings().faq.a2a}
                                        </p>
                                        <p>
                                            {strings().faq.a2b}
                                            {' '}
                                            <a href='/resources/1txn.pdf'>{strings().faq.a2c}</a>.
                                        </p>
                                        <h5>{strings().faq.q3}</h5>
                                        <p>{strings().faq.a3a}
                                        </p>
                                        <p>{strings().faq.a3b}
                                        </p>
                                        <p>
                                            <i>{strings().faq.a3c}</i>
                                        </p>
                                        <p>{strings().faq.a3d}</p>
                                        <p>
                                            {strings().faq.a3e}
                                            {' '}
                                            <Link to='/articles'>{strings().faq.a3f}</Link></p>
                                        <h5>{strings().faq.q4}</h5>
                                        <p>{strings().faq.a4a}</p>
                                        <p>{strings().faq.a4b}</p>
                                        <h5>{strings().faq.q5}</h5>
                                        <p>{strings().faq.a5a}</p>
                                        <h5>{strings().faq.q6}</h5>
                                        <p>{strings().faq.a6a}</p>
                                        <h5>{strings().faq.q7}</h5>
                                        <p>{strings().faq.a7a}</p>
                                        <p>{strings().faq.a7b}</p>
                                        <p>
                                            {strings().faq.a7c}
                                            {' '}
                                            <a href='https://en.wikipedia.org/wiki/Random_walk'>{strings().faq.a7d}</a>
                                            {' '}
                                            {strings().faq.a7e}
                                        </p>
                                        <p>{strings().faq.a7f}</p>
                                        <p>{strings().faq.a7g}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
