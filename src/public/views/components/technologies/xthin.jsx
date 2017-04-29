'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Xthin extends React.Component {

    render() {
        return (
            <div>
                <p>{ strings().technologies.xthin.body[0] }</p>
                <p>{ strings().technologies.xthin.body[1] }</p>
                <div className='center'>
                    <img className="section__image" src="../img/xthin.png" alt="Xthin" />
                </div>
                <p>
                    Test results validated that Xthin improved block propagation times by a factor of 5.6x across the normal P2P network, by a factor of 8.7x across the Great Firewall of China, while reducing the number of bytes required by a factor of 24x. For further information, please refer to our <a className='black dim link--underline' target='_blank' href="https://medium.com/@peter_r/towards-massive-on-chain-scaling-presenting-our-block-propagation-results-with-xthin-da54e55dc0e4#.ul0jjmv4z">five-part Xthin article series</a>.
                </p>
            </div>

        );
    }
};

export default Xthin
