'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class CashNodes extends React.Component {
    render() {
        return (
            <div className='p2'>
                <a className='dim black pt1' target='_blank' href='https://cashnodes.io/'>{ strings().resources.nodes.url }</a>
                <p>
                    { strings().resources.nodes.body1 }
                </p>
            </div>
        )
    }
}

export default CashNodes
