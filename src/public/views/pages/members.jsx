'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';
import Member from '../components/members/member.jsx';

import MEMBERS from '../../../data/members.json';

export default React.createClass({

    render: function() {

        let members = MEMBERS.map(function(member, i) {
            return (
                <Member name={member.name} bitcoinKey={member.bitcoinKey} pgpKey={member.pgpKey} application={member.application} statement={member.statement} key={i} />
            );
        });

        return (
            <div id='members'>
                <Header active='members' />
                <Title title='Supporting Members' />
                <div className='section'>
                    <div className='container'>
                        <div className='row service-wrapper-row'>
                            <div className='col-sm-4'>
                                <div className='service-image'>
                                    <img src='/img/vires-in-numeris.png' alt='Strength in Numbers' />
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                {members}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
