'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';

class SecurityBanner extends React.Component {

    render() {
        if (!this.props.message) {
            return null
        } else {
            return (
                <div className='alert__banner p3 center'>
                    <div className='section__container left-align'>
                        <div className='inline bold underline'>Security alert:</div>
                        &nbsp;
                        {this.props.message}
                    </div>
                </div>
            )
        }
    }
}

export default SecurityBanner
