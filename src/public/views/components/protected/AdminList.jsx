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
            admins: {},
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
            this.setState({ fetching: true, admins: {} });
            Axios.get('/get/secure/Admin', { headers: { Authorization: `Bearer ${jwt}`}}).then(res => {
                let { data: admins } = res;
                if (admins) {
                    this.setState({ fetching: false, admins });
                }
            }).catch(e => {
                this.setState({ fetching: false, admins: {} });
                console.log(e);
            });
        }
    }

    componentDidMount() {
        let schema = getSchema('Admin','Auth');
        this.setState({ schema });
        this.getAdminList();
    }

    addAdmin() {
        console.log('add');
    }

    removeAdmin(e) {
        e.preventDefault();
        let pubkey = e.target.getAttribute('data-pubkey')
        console.log('pubkey');
        let confirmed = confirm(`Remove pubkey ${pubkey} from the admin list?`);
        if (confirmed) {
            console.log('confirm');
            // Axios.post('/api/delete', { uid, realmType }, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
            //     let { data: { status } } = res;
            //     if (status && status === 'success') {
            //         this.props.router.push(`/create/${realmType}`);
            //     } else {
            //         this.setSplash(`There was an error deleting ${realmType} ${uid}. See console for details.`);
            //     }
            // }).catch(e => {
            //     this.setSplash(`There was an error deleting your ${realmType} ${uid}. See console for details.`);
            //     console.log(e);
            // });
        }
    }

    // removeAdminConfirm(e) {
    //     e.preventDefault();
    //     let { uid, realmType } = this.state;
    //     let confirmed = confirm(`Delete ${realmType} ${uid}?`);
    //     if (confirmed) {
    //         Axios.post('/api/delete', { uid, realmType }, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(res => {
    //             let { data: { status } } = res;
    //             if (status && status === 'success') {
    //                 this.props.router.push(`/create/${realmType}`);
    //             } else {
    //                 this.setSplash(`There was an error deleting ${realmType} ${uid}. See console for details.`);
    //             }
    //         }).catch(e => {
    //             this.setSplash(`There was an error deleting your ${realmType} ${uid}. See console for details.`);
    //             console.log(e);
    //         });
    //     }
    // }

    buildHeader() {
        let { schema: { properties: props } } = this.state;
        let results = Object.keys(props).map((propName, idx) => {
            return (<th key={idx} scope="col">{propName}</th>);
        });
        return (<tr>{results}<th scope="col">Edit</th></tr>);
    }

    displayAdmins(admins, newAdmin) {
        if (!isEmptyObj(admins)) {
            let results = Object.keys(admins).map((key, idx) => {
                let { pubkey, role } = admins[key];
                return (
                    <tr key={idx}>
                      <th scope="row">{ pubkey }</th>
                      <td>{ role }</td>
                      <td><button data-pubkey={pubkey} onClick={this.removeAdmin}>Remove</button></td>
                    </tr>
                );
            });
            return (
                <tbody>
                    {results}
                    <tr>
                      <th scope="row"><label className="clear">Add Pubkey:</label><input type="text" name="pubkey" placeholder="Pubkey" value={newAdmin.pubkey} onChange={this.inputChange}/></th>
                      <td><label className="clear">Role:</label><input type="text" name="role" placeholder="Role(soon)" value={newAdmin.role} onChange={this.inputChange} disabled/></td>
                      <td><button onClick={this.addAdmin}>Add</button></td>
                    </tr>
                </tbody>
            );
        }
        return null;
    }


    render() {
        let { schema, admins, fetching, newAdmin } = this.state;
        if (!schema || isEmptyArr(admins) || fetching) {
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
                    { this.displayAdmins(admins, newAdmin) }
                </table>
            </div>
        );
    }
}

export default AdminList;
