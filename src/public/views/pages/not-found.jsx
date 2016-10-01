'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';

export default React.createClass({

    render: function() {
        return (
            <div id='not-found'>
                <Header active='not-found' />
                <h1>{strings().notfound.error}</h1>
                <p>{strings().notfound.message}</p>
                <Footer />
            </div>
        );
    }

});
