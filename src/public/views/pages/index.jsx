'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Slider from '../components/index/slider.jsx';
import Quotes from '../components/index/quotes.jsx';
import Services from '../components/index/services.jsx';
import CallToAction from '../components/index/call-to-action.jsx';
import Description from '../components/index/description.jsx';

export default React.createClass({

    render: function() {
        return (
            <div id="index">
                <Header active='index' />
                <Slider />
                <Quotes />
                <Services />
                <CallToAction />
                <Description />
                <Footer />
            </div>
        );
    }

});
