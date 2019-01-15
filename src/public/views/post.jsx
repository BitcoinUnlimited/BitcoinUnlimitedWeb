'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Post extends React.Component {

    displayCaption(caption) {
        /* HTML stored in the database is created in the secure auth area and is presumed to be safe */
        return (caption) ? (<div className="caption-wrapper" dangerouslySetInnerHTML={ { __html: caption } }></div>) : null;
    }

    displayBanner(banner, caption) {
        return (banner) ? (<div className="banner-bar"><img className="banner-img fit" src={ banner } />{ this.displayCaption(caption) }</div>) : null;
    }

    render() {
        let { name, banner, caption } = this.props;
        return (
            <div id={ this.props.name }>
                <Header active={ this.props.name } />
                <div className="center blog-body">
                    { this.displayBanner(banner, caption) }
                    <div className="container-blog">
                        <div className='pb4'>
                            { this.props.children }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Post
