'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class BlockSize extends React.Component {
    render() {
        return (
            <div>
                <p>This chart shows the percentage of the network that will reject a block of a given size. The <a className="link--underline black dim" target='_blank' href="/resources/feemarket.pdf">emergent block size [PDF]</a> limit is defined as the greatest block size that no less than half of the hash power will accept.</p>
                <div className='center p1'>
                    <img className='section__image' src="../img/resources/block-size.png" alt="Emergent Block Size Limit" />
                </div>
            </div>
        );
    }
};

export default BlockSize
