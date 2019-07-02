'use strict';

import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Admin extends React.Component {

    getTitle(title) {
        return (title) ? (<div className="py2 h1">{ title }</div>) : null;
    }

    getSubtitle(subtitle) {
        return (subtitle) ? (<div className="py2 h3">{ subtitle }</div>): null;
    }

    render() {
        return (
            <div id={ this.props.name }>
                <Header active={ this.props.name } />
                <div className="p2 py3rem center">
                    { this.getTitle(this.props.title) }
                    { this.getSubtitle(this.props.subtitle) }
                    { this.props.intro ? <div className='pb2 pt1 lh-copy'>{this.props.intro}</div> : '' }
                    <div className='left-align p2 pb4'>
                        { this.props.children }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Admin
