'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { formatDateFull } from '../../../../helpers/helpers.js';

class Log extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { item: { uid, created, status, message, fn } } = this.props;
        return (
            <tr>
              <th scope="row">{ uid }</th>
              <td>{ formatDateFull(new Date(created)) }</td>
              <td>{ status }</td>
              <td>{ message }</td>
              <td>{ fn }</td>
            </tr>
        );
    }
}

export default Log;

Log.propTypes = {
  item: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    created: PropTypes.any.isRequired,
    status: PropTypes.string,
    message: PropTypes.string,
    fn: PropTypes.string
  }).isRequired
}
