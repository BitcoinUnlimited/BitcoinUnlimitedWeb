'use strict';

import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Base extends React.Component {
    render() {
        return (
            <div id={this.props.name}>
                <Header active={this.props.name} />
                <div className="full-width">
                    { this.props.children }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Base
