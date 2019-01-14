'use strict';

import React from 'react';
import Axios from 'axios';
import ReactLoading from "react-loading";
import { getLocalstorageKey, getSchema, isEmptyArr, isEmptyObj } from '../../../../helpers/helpers.js';

class AdminList extends React.Component {

    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
        this.state = {
            schema: null,
            fetching: false,
            adminList: {},
            newAdmin: {
                pubkey: '',
                role: ''
            }
        }
    }

    inputChange(e) {
        const { name, type } = e.target;
        const value = (type === 'checkbox') ? e.target.checked : e.target.value;
        let { newAdmin } = this.state;
        newAdmin[name] = value;
        this.setState({ newAdmin });
    }

    getAdminList() {
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ fetching: true, adminList: {} });
            Axios.get('/get/secure/Admin', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: adminList } = res;
                if (adminList) {
                    this.setState({ fetching: false, adminList });
                }
            }).catch(e => {
                this.setState({ fetching: false, adminList: {} });
                console.log(e);
            });
        }
    }

    componentDidMount() {
        let schema = getSchema('Admin','Auth');
        this.setState({ schema });
        this.getAdminList();
    }

    buildAdminData() {
        let { newAdmin: { pubkey, role } } = this.state;
        let formData = new FormData();
        formData.append('realmType', 'Admin');
        formData.append('pubkey', pubkey);
        return formData;
    }

    addAdmin(e) {
        e.preventDefault();
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            this.setState({ fetching: true, adminList: {} });
            let data = this.buildAdminData();
            Axios.post('/api/upsert', data, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
                let { data: { pubkey } } = res;
                if (pubkey) this.getAdminList();
            }).catch(e => {
                this.setSplash(`There was an error updating your ${this.state.realmType}. See console for details.`);
                console.log(e);
            });
        }
    }

    removeAdmin(e) {
        e.preventDefault();
        let jwt = getLocalstorageKey('jwt');
        if (jwt) {
            let pubkey = e.target.getAttribute('data-pubkey')
            let confirmed = confirm(`Remove pubkey ${pubkey} from the admin list?`);
            if (confirmed) {
                Axios.post('/api/delete', { pubkey, realmType: 'Admin' }, { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                    let { data: { status } } = res;
                    if (status === 'success') {
                        this.getAdminList();
                    }
                }).catch(e => {
                    this.setSplash(`There was an error deleting your ${realmType} ${pubkey}. See console for details.`);
                    console.log(`${e}`);
                });
            }
        }
    }

    buildHeader() {
        let { schema: { properties: props } } = this.state;
        let results = Object.keys(props).map((propName, idx) => {
            return (<th key={ idx } scope="col">{ propName }</th>);
        });
        return (<tr>{ results }<th scope="col">Edit</th></tr>);
    }

    displayAdmins(adminList, newAdmin) {
        let results = Object.keys(adminList).map((key, idx) => {
            let { pubkey, role } = adminList[key];
            return (
                <tr key={ idx }>
                  <th scope="row">{ pubkey }</th>
                  <td>{ role }</td>
                  <td><button data-pubkey={ pubkey } onClick={ this.removeAdmin }>Remove</button></td>
                </tr>
            );
        });
        return (
            <tbody>
                { results }
                <tr>
                    <th scope="row">
                        <label className="clear">Add Pubkey:</label>
                        <input type="text" name="pubkey" placeholder="Pubkey" value={ newAdmin.pubkey } onChange={ this.inputChange }/>
                    </th>
                    <td>
                        <label className="clear">Role:</label>
                        <input type="text" name="role" placeholder="(available soon)" value={ newAdmin.role } onChange={ this.inputChange } disabled/>
                    </td>
                    <td><button onClick={ this.addAdmin }>Add</button></td>
                </tr>
            </tbody>
        );
    }

    render() {
        let { schema, adminList, fetching, newAdmin } = this.state;
        if (!schema || fetching) {
            return (
                <div className="admin-list">
                    <ReactLoading type="balls" color="#ccc" />
                </div>
            );
        }
        return (
            <div className="content-list">
                <h2>Admin Pubkeys</h2>
                <table className="table table-bordered table-sm">
                    <thead className="thead-dark">
                        { this.buildHeader() }
                    </thead>
                    { this.displayAdmins(adminList, newAdmin) }
                </table>
            </div>
        );
    }
}

export default AdminList;
