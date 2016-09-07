'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';

export default React.createClass({

    render: function() {
        return (
            <div id='not-found'>
                <Header active='not-found' />
                <h1>Error 404: File Not Found</h1>
                <p>The requested file could not be found.</p>
                <Footer />
            </div>
        );
    }

});
