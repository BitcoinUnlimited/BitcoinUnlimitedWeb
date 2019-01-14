'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class Slider extends React.Component {
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
    }

    render() {
        return (
            <div className="homepage-slider">
                <div id="sequence">
                    <ul className="sequence-canvas">
                        <li className="bg2">
                            <h2 className="title">{ strings().slider.cryptography }</h2>
                            <h3 className="subtitle">{ strings().slider.cryptographyText }</h3>
                        </li>

                        <li className="bg1">
                            <h2 className="title">{ strings().slider.vires }</h2>
                            <h3 className="subtitle">{ strings().slider.viresText }</h3>
                        </li>

                        <li className="bg3">
                            <h2 className="title">{ strings().slider.free }</h2>
                            <h3 className="subtitle">{ strings().slider.freeText }</h3>
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
};

export default Slider
