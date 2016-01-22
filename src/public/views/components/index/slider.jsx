'use strict';

import React from 'react';

export default React.createClass({

    componentDidMount() {
        let options = {
            nextButton: false,
            prevButton: false,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 10000,
            preloader: true
        };
        $('#sequence').sequence(options).data('sequence');
    },

    render: function () {
        return (
            <div className="homepage-slider">
                <div id="sequence">
                    <ul className="sequence-canvas">
                        <li className="bg2">
                            <h2 className="title">In Cryptography we Trust</h2>
                            <h3 className="subtitle">The whole is truly greater than the sum of its parts.</h3>
                        </li>
                        
                        <li className="bg1">
                            <h2 className="title">Vires in Numeris</h2>
                            <h3 className="subtitle">Bitcoin Unlimited: A Peer-to-Peer Electronic Cash System</h3>
                        </li>

                        <li className="bg3">
                            <h2 className="title">Free and Decentralized</h2>
                            <h3 className="subtitle">Free and decentralised emerging consensus.</h3>
                        </li>

                    </ul>
                    <div className="sequence-pagination-wrapper">
                        <ul className="sequence-pagination">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

});