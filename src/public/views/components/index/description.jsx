'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <h2>{strings().description.title}</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="vision">
                                <p>
                                    {strings().description.a1}
                                </p>
                                <p>
                                    {strings().description.b1}
                                    {' '}
                                    {strings().description.b2}
                                    {' '}
                                    {strings().description.b3}
                                </p>
                                <p>
                                    {strings().description.c1}
                                    {' '}
                                    {strings().description.c2}
                                </p>
                                <p>
                                    {strings().description.d1}
                                    {' '}
                                    {strings().description.d2}
                                    {' '}
                                    {strings().description.d3}
                                    {' '}
                                    {strings().description.d4}
                                </p>
                                <p>
                                    {strings().description.e1}
                                </p>
                                <p>
                                    {strings().description.f1}
                                </p>
                                <p>
                                    {strings().description.g1}
                                    {' '}
                                    <Link to='/articles'>{strings().description.g2}</Link>.
                                </p>
                                <p>
                                    {strings().description.h1}
                                    {' '}
                                    {strings().description.h2}
                                </p>
                                <p>
                                    {strings().description.i1}
                                    {' '}
                                    <Link to='/download'>{strings().description.i2}</Link>
                                    {' '}
                                    {strings().description.i3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
