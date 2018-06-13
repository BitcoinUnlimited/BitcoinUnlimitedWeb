'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class NsInfo extends React.Component {
    render() {
        return (
            <div className='p2'>
                <a className='dim black pt1' target='_blank' href='https://nakamotostudies.org/'>{ strings().resources.nakamotostudies.url }</a>
                <p>{ strings().resources.nakamotostudies.body }</p>
            </div>
        )
    }
}

export default NsInfo
