'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import OfficialRelease from '../components/download/official-release.jsx';
import InstallInstructions from '../components/download/install-instructions.jsx';
import Signatures1011 from '../components/download/signatures_1-0-1-1.jsx';
import ReleaseNotes from '../components/download/releaseNotes.jsx';
import OlderReleases from '../components/download/olderReleases.jsx';

import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section || 'latest' };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section || 'latest' })
    }

    render() {
        return (
            <Page
                name="download"
                title={ strings().download.title }
                subtitle={ strings().download.subtitle }>

                <Section
                    key='latest'
                    expanded={ this.state.selectedSection === 'latest'}
                    title={ strings().download.latest.title }
                    body={ <OfficialRelease /> } />

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
