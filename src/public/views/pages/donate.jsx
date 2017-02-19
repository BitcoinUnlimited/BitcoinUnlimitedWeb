'use strict';

import React from 'react';
import Header from '../header.jsx';
import Footer from '../footer.jsx';
import { strings } from '../../lib/i18n';

class Donate extends React.Component {

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <div id='donate'>
                <Header active='donate' />
                <div className="p2 py4 center">
                    <div className="py2 h1">{ strings().donate.title }</div>

                    <div className='left-align lh-copy p2 pb4 section__container'>
                        { this.stringsToParagraphs(strings().donate.body) }
                        <div className='pt1 center'>
                            <img src='/img/donation-address-qr.png' alt='Fingerprint' />
                            <div>36XTMVtgJqqNYymsSvRonpUsbZRGkm1jvX</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Donate
