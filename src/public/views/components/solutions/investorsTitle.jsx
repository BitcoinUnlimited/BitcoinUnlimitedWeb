'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import InvestorIcon from '../icons/investorIcon.jsx'

class InvestorsTitle extends React.Component {
    render() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <InvestorIcon width='25' height='25' />
                </div>
                { strings().solutions.investors.title }
            </div>
        );
    }
};

export default InvestorsTitle
