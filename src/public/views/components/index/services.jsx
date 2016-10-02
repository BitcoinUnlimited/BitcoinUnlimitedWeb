'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/diamond.png" alt="Service 1" />
                                <h3>{strings().services.members}</h3>
                                <p>
                                    {strings().services.membersText}
                                </p>
                                <a href="members.html" className="btn">{strings().services.read}</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/ruler.png" alt="Service 2" />
                                <h3>{strings().services.contribute}</h3>
                                <p>
                                    {strings().services.contributeText}
                                </p>
                                <Link to='/buip' className="btn">{strings().services.read}</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/box.png" alt="Service 3" />
                                <h3>{strings().services.resources}</h3>
                                <p>
                                    {strings().services.resourcesText}
                                </p>
                                <a href="resources.html" className="btn">{strings().services.read}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
