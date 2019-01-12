'use strict';

import React from 'react';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, isStr, formatDateFull } from '../../../../helpers/helpers.js';

class DatabaseBackup extends React.Component {

    constructor(props) {
        super(props);
        this.getBackup = this.getBackup.bind(this);
        this.onChangePath = this.onChangePath.bind(this);
        this.revertDatabase = this.revertDatabase.bind(this);
        this.state = {
            backupUrl: null,
            fetching: false,
            files: [],
            revertPath: null,
            refresh: null,
        }
    }

    onChangePath(e) {
        e.preventDefault();
        const { value } = e.target;
        if (value && value.length > 0) {
            this.setState({ revertPath: value });
        }
    }

    revertDatabase() {
        let { revertPath } = this.state;
        let { refresh } = this.props;
        if (!revertPath) {
            alert('Please select a database to revert');
        } else {
            let pathName = formatDateFull(this.formatPath(revertPath));
            let msg = `Are you sure you want to revert the current state to ${pathName}? Any changes you have made after this date will be lost.`;
            if (window.confirm(msg)) {
                let jwt = getLocalstorageKey('jwt');
                if (jwt) {
                    Axios.post('/revert_database',{ revertPath },{ headers: { Authorization: `Bearer ${jwt}`}}).then(_ => {
                        if (refresh) {
                            // fn on dashboard.jsx to update data via refreshKey
                            refresh();
                        }
                    });
                }
            }
        }
    }

    getBackup() {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ backupUrl: null });
            Axios.get('/get_backup', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                if (isStr(res.data)) {
                    this.setState({ backupUrl: res.data });
                    this.getBackupFiles();
                }
            });
        }
    }

    getBackupFiles() {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ files: [], fetching: true });
            Axios.get('/get_backup_list', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data } = res;
                if (data && Array.isArray(data) && data.length > 0) {
                    this.setState({ files: data, fetching: false });
                } else {
                    this.setState({ fetching: false });
                }
            });
        }
    }

    showBackupUrl() {
        let { backupUrl } = this.state;
        if (backupUrl) {
            return (<a className='underline link' href={ backupUrl } download>Download Backup</a>);
        }
    }

    formatPath(path) {
        let dateArr = path.split('/')[3].split('.').shift().split('-');
        return new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]);
    }

    buildFileSelect() {
        let { files, revertPath } = this.state;
        if (files.length > 0) {
            let results = files.reverse().map((path, key) => {
                let pathName = formatDateFull(this.formatPath(path));
                return (<option key={key} value={ path }>{ pathName }</option>);
            });
            return (
                <div className="revert-database">
                    <button onClick={this.revertDatabase}>Revert Database</button>
                    <select onChange={ this.onChangePath } value={ revertPath || "" }>
                        <option value="">Select backup</option>
                        { results }
                    </select>
                </div>
            );
        }
        return null;
    }

    componentDidMount() {
        this.getBackupFiles();
    }

    render() {
        let { backupUrl } = this.state;
        return (
            <div className="backup-area">
            <div className="backup-database">
            <button onClick={this.getBackup}>Backup Database</button>
            { this.showBackupUrl() }
            </div>
            { this.buildFileSelect() }
            </div>
        );
    }
}

export default DatabaseBackup;
