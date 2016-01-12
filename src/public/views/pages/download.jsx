'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';
import OfficialRelease from '../components/download/official-release.jsx';
import ExperimentalReleases from '../components/download/experimental-releases.jsx';
import Signatures from '../components/download/signatures.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='download'>
                <Header active='download' />
                <Title title='Download Bitcoin Unlimited' />
                <div className='section'>
                    <div className='container'>
                        <OfficialRelease />
                        <ExperimentalReleases />
                        <Signatures />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
