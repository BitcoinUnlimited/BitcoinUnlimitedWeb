'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';
import OfficialRelease from '../components/download/official-release.jsx';
import InstallInstructions from '../components/download/install-instructions.jsx';
import ExperimentalReleases from '../components/download/experimental-releases.jsx';
import Signatures from '../components/download/signatures.jsx';

export default React.createClass({

    render: function() {

        return (
            <div id='download'>
                <Header active='download' />
                <Title title={strings().download.title} />
                <div className='section'>
                    <div className='container'>
                        <OfficialRelease />
                        <InstallInstructions />
                        <ExperimentalReleases />
                        <Signatures />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
