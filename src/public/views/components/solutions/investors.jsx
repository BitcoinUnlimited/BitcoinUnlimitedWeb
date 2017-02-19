'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Investors extends React.Component {
    render() {
        return (
            <div>
                <p> { strings().solutions.investors.body[0] } </p>
                <div className='center py3'>
                    <img className='section__image' src="../img/solutions/investors.gif" alt="investors" />
                </div>
            </div>

        );
    }
};

export default Investors
