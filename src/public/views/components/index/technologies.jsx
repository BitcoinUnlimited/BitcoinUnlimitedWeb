'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import BulletIcon from '../icons/bulletIcon.jsx'

class Technologies extends React.Component {
    render() {
        return (
            <div className="p2 py4 center">
                <div className="py2 h1">{ strings().index.technologies.title }</div>

                <div className="inline-block left-align py3 technologies__container">
                    <div className="h3 pb3">{ strings().index.technologies.description }</div>
                    <div className='py2 lh-copy'>
                        <div className='inline pr2'>
                            <BulletIcon width='8' height='8' />
                        </div>
                        <Link className='link--underline dim black' to="/technologies/adjustable-block-size-cap">{ strings().index.technologies.adjustableCap.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.adjustableCap.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <div className='inline pr2'>
                            <BulletIcon width='8' height='8' />
                        </div>
                        <Link className='link--underline dim black' to="/technologies/xthin">{ strings().index.technologies.xthin.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.xthin.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <div className='inline pr2'>
                            <BulletIcon width='8' height='8' />
                        </div>
                        <Link className='link--underline dim black' to="/technologies/parallel-validation">{ strings().index.technologies.validation.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.validation.text }</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Technologies
