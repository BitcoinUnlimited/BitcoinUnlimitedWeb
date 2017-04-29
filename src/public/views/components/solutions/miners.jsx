'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Miners extends React.Component {
    render() {
        return (
            <div>
                <p> { strings().solutions.miners.body[0] } </p>
                <div className='center py3'>
                    <img className='section__image' src="../img/solutions/miners.gif" alt="miners" />
                </div>
                <p> { strings().solutions.miners.body[1] } </p>
                <p> { strings().solutions.miners.body[2] } </p>
                <p> { strings().solutions.miners.body[3] } </p>
            </div>

        );
    }
};

export default Miners
