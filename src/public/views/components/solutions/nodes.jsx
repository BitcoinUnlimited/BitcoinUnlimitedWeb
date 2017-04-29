'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Nodes extends React.Component {
    render() {
        return (
            <div>
                <p> { strings().solutions.nodes.body[0] } </p>
                <p> { strings().solutions.nodes.body[1] } </p>
                <div className='center py3'>
                    <img className='section__image' src="../img/solutions/nodes.gif" alt="nodes" />
                </div>
                <p> { strings().solutions.nodes.body[2] } </p>
                <p> { strings().solutions.nodes.body[3] } </p>
            </div>

        );
    }
};

export default Nodes
