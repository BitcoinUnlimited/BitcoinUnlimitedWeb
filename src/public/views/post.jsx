'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Post extends React.Component {

    displayBanner(banner) {
        return (banner) ? (<img className="banner-img fit" src={ banner } />) : null;
    }

    render() {
        let { name, banner } = this.props;
        return (
            <div id={this.props.name}>
                <Header active={this.props.name} />
                <div className="center blog-body">
                    {this.displayBanner(banner)}
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
