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

import { isStr } from '../../../../helpers/helpers.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.getBackup = this.getBackup.bind(this);
        this.state = {
            backupUrl: null
        }
    }

    getBackup() {
        if ('localStorage' in window) {
            let jwt = localStorage.getItem('jwt');
            if (jwt) {
                this.setState({ backupUrl: null });
                Axios.get('/get_backup', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                    if (isStr(res.data)) {
                        this.setState({ backupUrl: res.data })
                    }
                });
            }
        }
    }

    showBackupUrl() {
        let { backupUrl } = this.state;
        return (backupUrl) ? (<a className='underline link' href={backupUrl} download>Download Backup</a>) : null;
    }

    render() {
        return (
            <Admin name="dashboard" title={ strings().dashboard.title } >
                <AdminBlogList />
                <AdminAlertList />
                <AdminList />
                <StaticFiles />
                <LogList />
                <button onClick={this.getBackup}>Backup Database</button>
                {this.showBackupUrl()}
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
}
