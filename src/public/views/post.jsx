'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';
import { markdownToHTML } from '../../helpers/helpers.js';

class Post extends React.Component {

    displayCaption(caption) {
        /* HTML stored in the database is created in the secure auth area and is presumed to be safe */
        if (caption) {
            let markup = markdownToHTML(caption);
            if (markup) {
                /* HTML stored in the database is created in the secure auth area and is presumed to be safe */
                return (<div className="caption-wrapper" dangerouslySetInnerHTML={ { __html: markup } }></div>);
            }
        }
        return null;
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
