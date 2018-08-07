'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';
import Page from '../../page.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page name="dashboard" title={ strings().login.title } subtitle={ strings().login.subtitle } >
                <div>Dashboard</div>
            </Page>
        );
    }
}

export default Dashboard
