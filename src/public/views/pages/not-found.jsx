'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';

class NotFound extends React.Component {
    render() {
        return (
            <div id='not-found'>
                <Header active='not-found' />
                <div className="p2 py4 center not-found__container">
                    <div className="py2 h1">{ strings().notfound.error }</div>
                    <div className="py3 h3">{ strings().notfound.message }</div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default NotFound
