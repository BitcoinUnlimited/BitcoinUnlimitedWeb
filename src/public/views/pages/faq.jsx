'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import WhatIsBuFaq from '../components/faq/whatIsBuFaq.jsx'
import HardForksAndConsensusFaq from '../components/faq/hardForksAndConsensusFaq.jsx'
import ScalingFaq from '../components/faq/scalingFaq.jsx'
import AttacksAndRisksFaq from '../components/faq/attacksAndRisksFaq.jsx'
import WhoIsBuFaq from '../components/faq/whoIsBuFaq.jsx'
import MythsFaq from '../components/faq/mythsFaq.jsx'
import ContributeFaq from '../components/faq/contributeFaq.jsx'

class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    render() {
        return (
            <Page title={ strings().faq.title } subtitle={ strings().faq.subtitle } >
                <Section
                    key='what-is-bu'
                    expanded={ this.state.selectedSection === 'what-is-bu' }
                    title={ strings().faq.whatIsBu.title }
                    body={ <WhatIsBuFaq /> } />

                <Section
                    key='hard-forks-and-consensus'
                    expanded={ this.state.selectedSection === 'hard-forks-and-consensus' }
                    title={ strings().faq.hardForksAndConsensus.title }
                    body={ <HardForksAndConsensusFaq /> } />

                <Section
                    key='scaling'
                    expanded={ this.state.selectedSection === 'scaling' }
                    title={ strings().faq.scaling.title }
                    body={ <ScalingFaq /> } />

                <Section
                    key='attacks-and-risks'
                    expanded={ this.state.selectedSection === 'attacks-and-risks' }
                    title={ strings().faq.attacksAndRisks.title }
                    body={ <AttacksAndRisksFaq /> } />

                <Section
                    key='who-is-bu'
                    expanded={ this.state.selectedSection === 'who-is-bu' }
                    title={ strings().faq.whoIsBu.title }
                    body={ <WhoIsBuFaq /> } />

                <Section
                    key='myths'
                    expanded={ this.state.selectedSection === 'myths' }
                    title={ strings().faq.myths.title }
                    body={ <MythsFaq /> } />

                <Section
                    key='contribute'
                    expanded={ this.state.selectedSection === 'contribute' }
                    title={ strings().faq.contribute.title }
                    body={ <ContributeFaq /> } />
            </Page>
        );
    }
};

export default Faq
