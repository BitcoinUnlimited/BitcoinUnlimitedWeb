'use strict';

import React from 'react';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema, isEmptyArr, isEmptyObj, formatDateFull } from '../../../../helpers/helpers.js';

class StaticFiles extends React.Component {

    constructor(props) {
        super(props);
        this.getStaticFiles = this.getStaticFiles.bind(this);
        this.state = {
            fetching: false,
            files: []
        }
    }

    getStaticFiles() {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ files: [], fetching: true });
            Axios.get('/get_static_files', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data } = res;
                if (data && Array.isArray(data) && data.length > 0) {
                    this.setState({ files: data, fetching: false });
                } else {
                    this.setState({ fetching: false });
                }
            }).catch(e => {
                console.log(e);
            });
        }
    }

    buildFilesList() {
        let { files } = this.state;
        let result = files.map((path, idx) => {
            return (<li key={idx}><a className="static-file-link" href={ path } target="_blank" download>{ path }</a></li>);
        });
        if (result.length) {
            return (<ul className="files-list">{ result }</ul>);
        }
        return null;
    }

    render() {
        let { fetching, files } = this.state;
        if (fetching) {
            return (
                <div className="static-files">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            );
        } else if (files && files.length === 0) {
            return (
                <div className="static-files">
                    <h2>Uploaded Files</h2>
                    <div className="link underline basic-link" onClick={ this.getStaticFiles }>Refresh</div>
                </div>
            );
        }
        return (
            <div className="static-files">
                <h2>Uploaded Files</h2>
                <div className="link underline basic-link" onClick={ this.getStaticFiles }>Refresh</div>
                { this.buildFilesList() }
            </div>
        );
    }
}

export default StaticFiles;
