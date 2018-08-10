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
            <Page name="dashboard" title={ strings().dashboard.title } >
                <div>Dashboard</div>
            </Page>
        );
    }
}

export default Dashboard
