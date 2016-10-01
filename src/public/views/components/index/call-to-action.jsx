'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="section section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="calltoaction-wrapper">
                                <h3>
                                    {strings().calltoaction.partOne}
                                    {' '}
                                    <u>{strings().calltoaction.partTwo}</u>
                                    {' '}
                                    {strings().calltoaction.partThree}
                                </h3>
                                <Link to='/download' className="btn btn-orange">{strings().calltoaction.download}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
