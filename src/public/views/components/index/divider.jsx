'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class Divider extends React.Component {
    render() {
        return (
            <div className="h3 center white divider__container">
                <p className="inline-block left-align lh-copy divider__text">{ strings().index.divider }</p>
            </div>
        );
    }
};

export default Divider
