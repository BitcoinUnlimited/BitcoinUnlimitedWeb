'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero__container center py3 white">
                <div className="h1 py4">{strings().index.hero.v1.title}</div>
                <div className="py3">
                    <Link className="h3 btn--primary-large hero--button" to='/download'>{strings().index.hero.v1.button}</Link>
                </div>
            </div>
        );
    }
};

export default Hero
