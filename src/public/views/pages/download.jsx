'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import OfficialRelease from '../components/download/official-release.jsx';
import BitcoinCashRelease from '../components/download/bitcoincash-release.jsx';
import BitcoinCashReleaseCandidate from '../components/download/bitcoincash-releasecandidate.jsx';
import InstallInstructions from '../components/download/install-instructions.jsx';
import ReleaseNotes from '../components/download/releaseNotes.jsx';
import OlderReleases from '../components/download/olderReleases.jsx';

import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section || 'bitcoincash' };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section || 'bitcoincash' })
    }

    render() {
        return (
            <Page
                name="download"
                title={ strings().download.title }
                subtitle={ strings().download.subtitle }>

{/*
                <Section
                    key='bitcoincashreleasecandidate'
                    expanded={ this.state.selectedSection === 'bitcoincashreleasecandidate'}
                    title={ strings().download.bitcoincashreleasecandidate.title }
                    body={ <BitcoinCashReleaseCandidate /> } />
*/}                    
                <Section
                    key='bitcoincash'
                    expanded={ this.state.selectedSection === 'bitcoincash'}
                    title={ strings().download.bitcoincash.title }
                    body={ <BitcoinCashRelease /> } />
{/*
                <Section
                    key='latest'
                    expanded={ this.state.selectedSection === 'latest'}
                    title={ strings().download.latest.title }
                    body={ <OfficialRelease /> } />
*/}
                <Section
                    key='installation'
                    expanded={ this.state.selectedSection === 'installation'}
                    title={ strings().download.installation.title }
                    body={ <InstallInstructions /> } />

                <Section
                    key='notes'
                    expanded={ this.state.selectedSection === 'notes'}
                    title={ strings().download.notes.title }
                    body={ <ReleaseNotes /> } />

                <Section
                    key='older'
                    expanded={ this.state.selectedSection === 'older'}
                    title={ strings().download.older.title }
                    body={ <OlderReleases /> } />
            </Page>
        );
    }
}

export default Download
