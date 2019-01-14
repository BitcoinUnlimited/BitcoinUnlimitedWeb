'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class HeroDynamic extends React.Component {
    render() {
        return (
            <div className="hero__container--static center py3 white">
                    <div className="h1 py2">{ strings().index.hero.v1.title }</div>
                    <div className="h2 py3">{ strings().index.hero.v1.subtitle }</div>
                <div className="mt3 pb3 pt4">
                    <Link className="h3 dim btn--primary-large" to='/download'>{ strings().index.hero.v1.button }</Link>
                </div>
            </div>
        );
    }
};

export default HeroDynamic
