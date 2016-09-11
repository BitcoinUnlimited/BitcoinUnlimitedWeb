'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Title from '../components/title.jsx';


export default React.createClass({

    render: function() {
        return (
            <div id='conference'>
                <Header active='conference' />
                <Title title="Satoshi's Vision" />
                <div className='section'>
                    <div className='container'>
                        <h1 id="5eed" class="graf--h3 graf--leading graf--title">Satoshi’s Vision: Bitcoin Development &amp; Scaling Conference</h1>
                        <p id="7afc" class="graf--p graf-after--h3"><em class="markup--em markup--p-em">Sunday, September 25, 2016 | Westin St. Francis, San Francisco</em></p>
                        <p id="1807" class="graf--p graf-after--p">It is with great excitement that we announce “Satoshi’s Vision: Bitcoin Development &amp; Scaling Conference.” This single-day event will bring together like-minded developers, researchers and industry leaders committed to the vision of Bitcoin as a peer-to-peer electronic cash system for the world’s seven billion people.</p>

                        <h4 id="9440" class="graf--h4 graf-after--p">Venue</h4>
                        <p id="0ff4" class="graf--p graf-after--h4">The event will be held at the <a class="markup--anchor markup--p-anchor" href="http://westinstfrancis.com/" target="_blank" rel="nofollow" data-href="http://westinstfrancis.com/">St. Francis Hotel</a>, overlooking Union Square in the heart of San Francisco.</p>
                        

                        <figure id="7335" class="graf--figure graf-after--p">
                        <div class="aspectRatioPlaceholder is-locked"></div>
                        </figure>
                        <h4 id="0750" class="graf--h4 graf-after--figure">Agenda</h4>
                        <p id="6dc6" class="graf--p graf-after--h4">The morning session will explore the scaling solutions developed over the past year, ready and waiting to meet an order-of-magnitude increase in transactional demand. The afternoon session will focus on longer-term scaling initiatives to on-board Bitcoin’s first billion users.</p>
                        <p id="2645" class="graf--p graf-after--p">The agenda is designed to maximize discussion among conference attendees. Talks will be short (two 20-min talks and approximately eight 10-min “mini talks”) and each will be followed by a Q&amp;A period. The panel sessions will be interactive with the audience, and the breakout sessions will give all attendees a chance to further develop ideas related to the topics introduced in the talks and panel sessions.</p>
                        <p id="c6ea" class="graf--p graf-after--p">The day will conclude with a dinner reception at a <a class="markup--anchor markup--p-anchor" href="http://www.bartartine.com/" target="_blank" rel="nofollow" data-href="http://www.bartartine.com/">popular eatery</a>.</p>
                        <p>
                        <figure id="a6fc" class="graf--figure graf-after--p">
                        <div class="aspectRatioPlaceholder is-locked">
                        <div class="aspectRatioPlaceholder-fill"></div>
                        <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*zHL1XksSG4GnOrSXqvmImQ.png" data-width="886" data-height="1728" data-action="zoom" data-action-value="1*zHL1XksSG4GnOrSXqvmImQ.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="38" height="75"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/800/1*zHL1XksSG4GnOrSXqvmImQ.png" data-src="https://cdn-images-1.medium.com/max/800/1*zHL1XksSG4GnOrSXqvmImQ.png" /></div>
                        </div>
                        </figure>
                        <h4 id="538e" class="graf--h4 graf-after--figure">Tickets</h4>
                        <p id="6f0e" class="graf--p graf-after--h4">Although the conference is intended to be a small and intimate event, a very limited number of tickets can be purchased via <a class="markup--anchor markup--p-anchor" href="https://docs.google.com/forms/d/e/1FAIpQLSfy1C4_RLs_T6CxRGXA92N7jXOamucFKjXrCLNb6YXt9iBGaA/viewform?entry.1898126628=1&amp;entry.597557985&amp;entry.195460802&amp;entry.967622631=No&amp;entry.1600438880=No&amp;entry.389789878" target="_blank" rel="nofollow" data-href="https://docs.google.com/forms/d/e/1FAIpQLSfy1C4_RLs_T6CxRGXA92N7jXOamucFKjXrCLNb6YXt9iBGaA/viewform?entry.1898126628=1&amp;entry.597557985&amp;entry.195460802&amp;entry.967622631=No&amp;entry.1600438880=No&amp;entry.389789878">this webform</a>.</p>

                        <h4 id="17e3" class="graf--h4 graf-after--p">Acknowledgement</h4>
                        <p id="5030" class="graf--p graf-after--h4 graf--last">We gratefully acknowledge the extremely generous donations made anonymously to the <a class="markup--anchor markup--p-anchor" href="http://bitcoinunlimited.info/" target="_blank" rel="nofollow" data-href="http://bitcoinunlimited.info">Bitcoin Unlimited Community Organization</a> that make this event possible.</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

});
