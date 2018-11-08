'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { strings } from '../../../lib/i18n';
import Admin from '../../admin.jsx';
import Axios from 'axios';
import LogList from '../../components/protected/LogList.jsx';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // get Posts
    }

    render() {
        return (
            <Admin name="dashboard" title={ strings().dashboard.title } >
                <LogList />
            </Admin>
        );
    }
}

// <ContentList realmType={realmType} order="AES || DESC" start=0 end=5 />

export default withRouter(Dashboard);

Dashboard.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
