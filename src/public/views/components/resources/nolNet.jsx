'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class NolNet extends React.Component {
    render() {
        return (
            <div className='p2'>
                <p>
                    { strings().resources.nolNet.bodyPartOne }
                    <a className='dim black pt1' target='_blank' href='https://github.com/sickpig/BU/blob/master/nol-guide.md'>{ strings().resources.nolNet.bodyLink }</a>
                    { strings().resources.nolNet.bodyPartTwo }
                </p>
            </div>
        )
    }
}

export default NolNet
