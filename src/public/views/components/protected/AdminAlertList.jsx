'use strict';

import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema, isEmptyArr, isEmptyObj, formatDateFull } from '../../../../helpers/helpers.js';

class AdminAlertList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schema: null,
            fetching: false,
            alertList: {},
            refreshKey: this.props.refreshKey
        }
    }

    getAdminAlertList() {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ fetching: true, alertList: {} });
            Axios.get('/get/secure/Alert', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: alertList } = res;
                if (alertList) {
                    this.setState({ fetching: false, alertList });
                }
            }).catch(e => {
                this.setState({ fetching: false, alertList: {} });
                console.log(e);
            });
        }
    }

    buildAlertList() {
        let { alertList } = this.state;
        let results = Object.keys(alertList).map((key, idx) => {
            let alert = alertList[key];
            return (
                <div className="content-row" key={ idx }>
                    <h4 className="title">{ alert.name }</h4>
                    <div className="date">{ formatDateFull(new Date(alert.created)) }</div>
                    <Link className="link edit-link" to={ `/update/Alert/${alert.uid}` }>Edit »</Link>
                </div>
            );
        });
        return (<div className="content-group">{results}</div>);
    }

    componentWillReceiveProps(nextProps) {
        let { refreshKey } = this.props;
        let { refreshKey: nextKey } = nextProps;
        if (refreshKey && nextKey && refreshKey !== nextKey) {
            this.getAdminAlertList(refreshKey);
        }
    }

    componentDidMount() {
        let { refreshKey } = this.props;
        let schema = getSchema('Alert');
        this.setState({ schema });
        this.getAdminAlertList(refreshKey);
    }

    render() {
        let { schema, fetching, alertList } = this.state;
        if (!schema || fetching) {
            return (
                <div className="content-list">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            );
        } else if (isEmptyObj(alertList)) {
            return (
                <div className="content-list">
                    <h2>Alert List</h2>
                    <div>There are currently no alerts.</div>
                </div>
            );
        }
        return (
            <div className="content-list">
                <h2>Alert List</h2>
                { this.buildAlertList() }
            </div>
        );
    }
}

export default AdminAlertList;
