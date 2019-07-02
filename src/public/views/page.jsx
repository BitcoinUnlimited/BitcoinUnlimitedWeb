'use strict';

import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Page extends React.Component {

    displayTitle() {
        let { title } = this.props;
        return (title) ? (<div className="py2 h1 page-title">{ title }</div>) : null;
    }

    displaySubtitle() {
        let { subtitle } = this.props;
        return (subtitle) ? (<div className="py2 h3 page-subtitle">{ subtitle }</div>) : null;
    }

    displayIntro() {
        let { intro } = this.props;
        return (intro) ? (<div className='pb2 pt1 lh-copy page-intro'>{ intro }</div>) : null;
    }

    render() {
        return (
            <div id={ this.props.name }>
                <Header active={ this.props.name } />
                <div className="p2 py3rem center page-wrapper">
                    <div className={`section__container container-${this.props.name}`}>
                        { this.displayTitle() }
                        { this.displaySubtitle() }
                        { this.displayIntro() }
                        <div className='left-align p2 pb4'>
                            { this.props.children }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page
