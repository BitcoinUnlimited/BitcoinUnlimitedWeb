'use strict';

import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';
import Posts from './components/protected/posts.jsx';

class Editor extends React.Component {

    render() {
        return (
            <div id={this.props.name}>
                <Header active={this.props.name} />
                <div className="p2 py4 center">
                    <div className='section__editor'>

                        <div className="section_sidebar">
                            <Posts />
                        </div>

                        <div className="section_mainbar">
                            <div className="inner">
                                <div className="py2 h1">{ this.props.title }</div>
                                <div className="py2 h3">{ this.props.subtitle }</div>
                                { this.props.intro ? <div className='pb2 pt1 lh-copy'>{this.props.intro}</div> : '' }

                                <div className='left-align p2 pb4'>
                                    { this.props.children }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Editor
