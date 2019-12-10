'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class PublicChat extends React.Component {
    render() {
        return (
            <div className='p2'>
                <a className='dim black pt1' target='_blank' href='https://t.me/thecoinformerlyknownasbitcoin'>{ strings().resources.publicchat.title }</a>
                <p>
                    { strings().resources.publicchat.body1 }
                </p>
                <p>
                    { strings().resources.publicchat.body2 }
                </p>
            </div>
        )
    }
}

export default PublicChat
