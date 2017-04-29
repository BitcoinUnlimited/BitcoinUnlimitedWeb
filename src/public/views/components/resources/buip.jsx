'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Buip extends React.Component {
    render() {
        return (
            <ul className='pb1'>
                <li className='pb1'>
                    Proposer: { this.props.proposer }
                </li>
                <li className='pb1'>
                    Submitted: { this.props.dateSubmitted }
                </li>
                <li className='pb1'>
                    Status: { this.props.status }
                </li>
                <li>
                    <a href={ this.props.href } target='_blank' className='black'>Detailed explanation</a>
                </li>
            </ul>
        );
    }
};

export default Buip
