'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

    render: function () {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/diamond.png" alt="Service 1" />
                                <h3>Members</h3>
                                <p>We assert that Bitcoin is and should be whatever we the users define by the
                                    code we run, and the rules we vote for with our hash power</p>
                                <a href="members.html" className="btn">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/ruler.png" alt="Service 2" />
                                <h3>Contribute</h3>
                                <p> If you are a developer then contribute, if you have the resources then
                                    run a node, if you are a miner then join a mining pool, if you are a
                                    researcher then provide evidence and analysis and if you are a
                                    contributor then educate others with analysis and facts</p>
                                <Link to='/buip' className="btn">Read more</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-wrapper">
                                <img src="img/service-icon/box.png" alt="Service 3" />
                                <h3>Resources</h3>
                                <p>Bitcoin is out of the box thinking. We follow in Satoshi's tradition
                                    and present you an interdisciplinary approach.</p>
                                <a href="resources.html" className="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});