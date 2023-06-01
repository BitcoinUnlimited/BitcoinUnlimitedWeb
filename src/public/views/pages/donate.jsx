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
                        { this.stringsToParagraphs(strings().donate.body1) }
                        <div className='pt1 center'>
                            <img src='/img/donation-address-qr-bch.svg' alt='Fingerprint' />
                            <div><b>bitcoincash:ppm7a0pex8wp08g8cr37xplknnrg7dlxkcmyf39qqw</b></div>
                        </div>
                        { this.stringsToParagraphs(strings().donate.body2) }
                        <div className='pt1 center'>
                            <img src='/img/donation-address-qr-btc.svg' alt='Fingerprint' />
                            <div><b>36XTMVtgJqqNYymsSvRonpUsbZRGkm1jvX</b></div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Donate
