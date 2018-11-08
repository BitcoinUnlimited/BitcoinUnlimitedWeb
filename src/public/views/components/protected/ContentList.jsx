'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema } from '../../../../helpers/helpers.js';

class ContentList extends React.Component {

    constructor(props) {
        super(props);
        this.showContent = this.showContent.bind(this);
        this.state = {
            realmType: null,
            model: null,
            fetching: false,
            results: null,
            order: 'DESC',
            limit: 0,
            start: null,
            end: null
        }
    }

    getContent(pubkey) {

        // ?order=desc&start=0&end=10 /start && end for pagination

        // if (desc) = .sorted('created', true); == most recent first, else sorted('created');

        let jwt = getLocalstorageKey('jwt');
        let { realmType } = this.props;
        if (jwt) {
            // /api/get/type
            Axios.get(`/api/get/${realmType}`, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: logs } = res;
                if (logs) {
                    this.setState({ logs });
                }
            }).catch(e => {
                console.log('getContent error: ' + e);
            });
        }
    }

    displayLogs(logs) {
        if (logs) {
            let results = Object.keys(logs).map(key => {
                let log = logs[key];
                return (<Log key={key} item={log} />);
            });
            return (
                <tbody>
                    {results}
                </tbody>
            );
        }
        return null;
    }

    showContent(e) {
        e.preventDefault();
        this.setState({ fetching: true, results: null });
        this.getContent();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        console.log('componentDidMount');
        let { realmType, order = 'DESC', limit = 0 } = this.props;
        this.setState({ realmType, order, limit });
    }

    buildItems() {
        return;
    }

    buildHeader() {
        let { realmType, model: { properties: props } } = this.state;
        let results = Object.keys(props).map((propName, idx) => {
            return (<th key={idx} scope="col">{propName}</th>);
        });
        return (<tr>{results}<th scope="col">Edit</th></tr>);
    }

    render() {
        let { realmType, fetching, results, model } = this.state;
        if (!realmType || (!results && !fetching)) {
            return;
        } else if (!results && fetching || !model) {
            return (
                <div className="content-list">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            );
        }
        return (
            <div className="content-list">
                <button onClick={this.showContent}>Refresh { realmType }</button>
                <table className="table table-bordered table-sm">
                    <thead className="thead-dark">
                        { this.buildHeader() }
                    </thead>
                    { this.buildItems() }
                </table>
            </div>
        );
    }
}

export default ContentList;

ContentList.propTypes = {
  realmType: PropTypes.string.isRequired,
  order: PropTypes.string,
  limit: PropTypes.number
}
