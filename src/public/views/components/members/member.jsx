'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    getStatement() {
        let markup = marked(this.props.statement, {sanitize: true});
        return {
            __html: markup
        };
    },

    render: function () {
        let statement = typeof this.props.statement === 'undefined' ? false : <p dangerouslySetInnerHTML={this.getStatement()} />;
        let application = <a className='mini-link' href={this.props.application}>{strings().member.application}</a>;
        return (
            <div className='member'>
                <h3>{this.props.name} {application}</h3>
                {statement}
            </div>
        );
    }

});
