'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

    render: function () {
        return (
            <div className="section section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="calltoaction-wrapper">
                                <h3>The Only Bitcoin Client That Gives <u>You</u> Complete Freedom!</h3>
                                <Link to='/download' className="btn btn-orange">Download here!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});