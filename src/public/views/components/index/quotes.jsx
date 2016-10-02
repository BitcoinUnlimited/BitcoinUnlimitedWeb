'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-wired">
                                <a href="https://www.mail-archive.com/cryptography@metzdowd.com/msg09964.html">
                                    {strings().quotes.a1}
                                    <br/><br/>
                                    -- {strings().quotes.satoshi}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-mashable">
                                <a href="https://bitcointalk.org/index.php?topic=48.msg329#msg329">
                                    {strings().quotes.b1}
                                    {' '}
                                    {strings().quotes.b2}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="in-press press-techcrunch">
                                <a href="https://bitcointalk.org/index.php?topic=1347.msg15366#msg15366">
                                    {strings().quotes.c1}
                                    {' '}
                                    <p>{strings().quotes.c2}</p>
                                    {' '}
                                    <p>{strings().quotes.c3}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
