'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import ReactLoading from "react-loading";
import Axios from 'axios';
import { strings } from '../../../lib/i18n';
import { isDef, getUid, resError, isEmptyObj, getSchema, isReq, isArr } from '../../../../helpers/helpers.js';

import Base from '../../base.jsx';
import RealmFormWrapper from '../../components/forms/realm-form-wrapper.jsx';

class SchemaUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData: false,
            realmObject: {}
        }
        // this.formSubmit = this.formSubmit.bind(this);
        // this.inputChange = this.inputChange.bind(this);
    }

    // formSubmit(e) {
    //     e.preventDefault();
    // }

    redirectNotFound() {
        this.props.router.push('/not-found');
    }

    getRealmObject(request) {
        Axios.get('/api/get', request).then(res => {
            if (!res.data || resError(res.data)) {
                this.redirectNotFound();
            } else if (!isEmptyObj(res.data)) {
                this.setState({
                    hasData: true,
                    realmObject: res.data[0]
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        // let realmType = this.props.params.realmType || '';
        //let form = getTypeForm(realmType);

        // let schema = getSchema(realmType);
        // if (!isDef(schema)) {
        //     this.redirectNotFound();
        // }
        // console.log(schema);

        // let uid = this.props.params.uid || '';
        // getRealmObject({ realmType: realmType, uid: uid });
    }

    // input on change
    // inputChange(e) {
    //     const { name, type } = e.target;
    //     const value = (type === 'checkbox') ? e.target.checked : e.target.value;
    //     console.log(`${name} : ${value}`);
    //     // if (this.isRequired(name)) {
    //     //     if (value.length > 0) {
    //     //         //this.setState({ [name]: value, [`${name}_error`]: null });
    //     //     } else {
    //     //         //this.setState({ [name]: value, [`${name}_error`]: `${name} is required` });
    //     //     }
    //     // } else {
    //     //     //this.setState({ [name]: value });
    //     // }
    // }

    // buildFormElements(schema, realmObject) {
    //     if (realmObject) {
    //         // form with prefilled values
    //     } else {
    //         // empty form from schema
    //     }
    // }

    render() {
        console.log(this.props);
        let { realmType, uid } = this.props.params;
        if (!isDef(realmType)) {
            return (
                <ReactLoading type="balls" color="#ccc" />
            );
        }
        return (
            <Base name="schema-update">
                <RealmFormWrapper realmType={realmType} uid={uid} />
            </Base>
        );
    }
}

export default withRouter(SchemaUpdate)
