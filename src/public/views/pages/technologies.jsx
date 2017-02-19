'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Xthin from '../components/technologies/xthin.jsx'
import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <Page name="technologies" title={ strings().technologies.title } subtitle={ strings().technologies.subtitle }>
                <Section
                    key='adjustableCap'
                    expanded={ this.state.selectedSection === 'adjustable-block-size-cap'}
                    title={ strings().technologies.adjustableCap.title }
                    body={ this.stringsToParagraphs(strings().technologies.adjustableCap.body) } />

                <Section
                    key='xthin'
                    expanded={ this.state.selectedSection === 'xthin'}
                    title={ strings().technologies.xthin.title }
                    body={ <Xthin /> } />

                <Section
                    key='parallelValidation'
                    expanded={ this.state.selectedSection === 'parallel-validation'}
                    title={ strings().technologies.parallelValidation.title }
                    body={ this.stringsToParagraphs(strings().technologies.parallelValidation.body) } />
            </Page>

        );
    }
}

export default Technologies
