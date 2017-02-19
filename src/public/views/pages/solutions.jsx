'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import Users from '../components/solutions/users.jsx'
import UsersTitle from '../components/solutions/usersTitle.jsx'
import Nodes from '../components/solutions/nodes.jsx'
import NodesTitle from '../components/solutions/nodesTitle.jsx'
import Miners from '../components/solutions/miners.jsx'
import MinersTitle from '../components/solutions/minersTitle.jsx'
import Investors from '../components/solutions/investors.jsx'
import InvestorsTitle from '../components/solutions/investorsTitle.jsx'

class Solutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    render() {
        return (
            <Page
                name="solutions"
                title={ strings().solutions.title }
                subtitle={ strings().solutions.subtitle }
                intro={ strings().solutions.intro } >

                <Section
                    key='users'
                    expanded={ this.state.selectedSection === 'users'}
                    title={ <UsersTitle /> }
                    body={ <Users /> } />

                <Section
                    key='nodes'
                    expanded={ this.state.selectedSection === 'nodes'}
                    title={ <NodesTitle /> }
                    body={ <Nodes /> } />

                <Section
                    key='miners'
                    expanded={ this.state.selectedSection === 'miners'}
                    title={ <MinersTitle /> }
                    body={ <Miners /> } />

                <Section
                    key='investors'
                    expanded={ this.state.selectedSection === 'investors'}
                    title={ <InvestorsTitle /> }
                    body={ <Investors /> } />
            </Page>
        );
    }
}

export default Solutions
