'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';


export default React.createClass({

    render: function() {
        return (
            <div id='conferences'>
                <Header active='conferences' />
                <Title title="Satoshi's Vision" />
                <div className='section'>
                    <div className='container'>
                        <h1>Satoshi’s Vision: Bitcoin Development &amp; Scaling Conference</h1>
                        <p><em>Sunday, September 25, 2016 | Westin St. Francis, San Francisco</em></p>
                        <p>It is with great excitement that we announce “Satoshi’s Vision: Bitcoin Development & Scaling Conference.” This single-day event will bring together like-minded developers, researchers and industry leaders committed to the vision of Bitcoin as a peer-to-peer electronic cash system for the world’s seven billion people.</p>
                        <h4>Venue</h4>
                        <p>The event will be held at the <a href='http://westinstfrancis.com/' target='_blank' rel='nofollow'>St. Francis Hotel</a>, overlooking Union Square in the heart of San Francisco.</p>
                        <h4>Agenda</h4>
                        <p>The morning session will explore the scaling solutions developed over the past year, ready and waiting to meet an order-of-magnitude increase in transactional demand. The afternoon session will focus on longer-term scaling initiatives to on-board Bitcoin’s first billion users.</p>
                        <p>The agenda is designed to maximize discussion among conference attendees. Talks will be short (two 20-min talks and approximately eight 10-min “mini talks”) and each will be followed by a Q&amp;A period. The panel sessions will be interactive with the audience, and the breakout sessions will give all attendees a chance to further develop ideas related to the topics introduced in the talks and panel sessions.</p>
                        <p>The day will conclude with a dinner reception at a <a href='http://www.bartartine.com/' target='_blank' rel='nofollow'>popular eatery</a>.</p>
                        <img src='https://cdn-images-1.medium.com/max/800/1*zHL1XksSG4GnOrSXqvmImQ.png' />
                        <h4>Tickets</h4>
                        <p>Although the conference is intended to be a small and intimate event, a very limited number of tickets can be purchased via <a href='https://docs.google.com/forms/d/e/1FAIpQLSfy1C4_RLs_T6CxRGXA92N7jXOamucFKjXrCLNb6YXt9iBGaA/viewform?entry.1898126628=1&amp;entry.597557985&amp;entry.195460802&amp;entry.967622631=No&amp;entry.1600438880=No&amp;entry.389789878' target='_blank' rel='nofollow'>this webform</a>.</p>
                        <h4>Acknowledgement</h4>
                        <p>We gratefully acknowledge the extremely generous donations made anonymously to the <a href='https://www.bitcoinunlimited.info/' target='_blank' rel='nofollow'>Bitcoin Unlimited Community Organization</a> that make this event possible.</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
