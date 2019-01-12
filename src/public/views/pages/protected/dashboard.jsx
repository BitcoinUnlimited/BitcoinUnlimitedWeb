'use strict';

import React from 'react';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { strings } from '../../../lib/i18n';
import Admin from '../../admin.jsx';
import Axios from 'axios';
import LogList from '../../components/protected/LogList.jsx';
import AdminList from '../../components/protected/AdminList.jsx';
import AdminBlogList from '../../components/protected/AdminBlogList.jsx';
import AdminAlertList from '../../components/protected/AdminAlertList.jsx';
import StaticFiles from '../../components/protected/StaticFiles.jsx';
import DatabaseBackup from '../../components/protected/DatabaseBackup.jsx';

import { isStr } from '../../../../helpers/helpers.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {
            refreshKey: 1
        }
    }

    refresh() {
        this.setState({ refreshKey: Math.random() });
    }

    render() {
        return (
            <Admin name="dashboard" title={ strings().dashboard.title } >
                <AdminBlogList refreshKey={ this.state.refreshKey } />
                <AdminAlertList refreshKey={ this.state.refreshKey } />
                <AdminList />
                <StaticFiles />
                <LogList />
                <DatabaseBackup refresh={ this.refresh } />
            </Admin>
        );
    }
}

export default withRouter(Dashboard);

Dashboard.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}
