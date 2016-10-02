'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';
import Resource from '../components/resources/resource.jsx';

const RESOURCES = [
    {
        title: 'Articles of Federation',
        html: '/articles',
        pdf: 'resources/BUarticles.pdf'
    },
    {
        title: 'A Transaction Fee Market Exists Without a Block Size Limit',
        pdf: 'resources/feemarket.pdf'
    },
    {
        title: 'Reduce Orphaning Risk and Improve Zero-Confirmation Security With Subchains',
        pdf: 'resources/subchains.pdf'
    },
    {
        title: 'An Examination of Single Transaction Blocks and Their Effect on Network Throughput and Block Size',
        pdf: 'resources/1txn.pdf'
    },
    {
        title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
        pdf: 'resources/bitcoin.pdf'
    }
];

export default React.createClass({

    render: function() {

        let resources = RESOURCES.map(function(resource, i) {
            return (
                <Resource title={resource.title} html={resource.html} pdf={resource.pdf} key={i} />
            );
        });

        return (
            <div id='resources'>
                <Header active='resources' />
                <Title title={strings().resources.title} />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/330px-Knowledge-Reid-Highsmith.jpeg' alt='Knowledge' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <h2 className='green'>{strings().resources.supporting}</h2>
                                <ul>
                                    {resources}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
