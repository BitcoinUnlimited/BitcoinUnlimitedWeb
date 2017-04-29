'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import MinerIcon from '../icons/minerIcon.jsx'

class MinersTitle extends React.Component {
    render() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <MinerIcon width='24' height='20' />
                </div>
                { strings().solutions.miners.title }
            </div>
        );
    }
};

export default MinersTitle
