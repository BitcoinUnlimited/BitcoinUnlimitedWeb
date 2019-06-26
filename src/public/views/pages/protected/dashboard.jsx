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

    /**
     * [refresh When a child element needs to update another child element
     * this refresh method is called to update them instantly. When the refreshKey
     * is changed, the child elements check if the new key is the same as the previous
     * key. If they are different, it will update the UI, fetching new data.
     * This is mainly used when reverting database snapshot versions.]
     */
    refresh() {
        this.setState({ refreshKey: Math.random() });
    }

    /**
     * [render This JSX file is a wrapper for the admin dashboard.
     * It pulls in elements from other files and manages when those other
     * files should update with the refresh() token.]
     */
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
