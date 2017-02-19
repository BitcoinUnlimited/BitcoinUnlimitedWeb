'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import NodeIcon from '../icons/nodeIcon.jsx'

class NodesTitle extends React.Component {
    render() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <NodeIcon width='25' height='25' />
                </div>
                { strings().solutions.nodes.title }
            </div>
        );
    }
};

export default NodesTitle
