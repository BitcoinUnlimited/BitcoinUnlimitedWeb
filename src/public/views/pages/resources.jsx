'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import Technical from '../components/resources/technical.jsx';
import NonTechnical from '../components/resources/nonTechnical.jsx';
import NolNet from '../components/resources/nolNet.jsx';
import Buips from '../components/resources/buips.jsx';
import NsInfo from '../components/resources/nsInfo.jsx';

import Bitcore from 'bitcore-lib'
import Message from 'bitcore-message'
import AddrFormat from 'bchaddrjs'

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };

        var cashAddress = 'bitcoincash:qq8ndxfu44umd6nq786px2nkrc0g744phszu58gwcd';

        if (!AddrFormat.isLegacyAddress(cashAddress)) {
          var pubKey = AddrFormat.toLegacyAddress(cashAddress)
        }
        var challenge = 'bitcoin unlimited';
        var verify = Message(challenge).verify(pubKey,'IKUsGJ5oCr6D50Zy9rtAok7bhvNTt7YHibWrFr+ZpCV2DABwA+pf/Qn/o9ZMMjmbzW0Rf7MtQTH2h3AaEfoCJFo=');
        console.log(verify);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    render() {
        return (
            <Page name="resources" title={ strings().resources.title } subtitle={ strings().resources.subtitle } >
                <Section
                    key='technical'
                    expanded={ this.state.selectedSection === 'technical'}
                    title={ strings().resources.technical.title }
                    body={ <Technical /> } />

                <Section
                    key='non-technical'
                    expanded={ this.state.selectedSection === 'non-technical'}
                    title={ strings().resources.nonTechnical.title }
                    body={ <NonTechnical /> } />

                <Section
                    key='nolnet'
                    expanded={ this.state.selectedSection === 'nolnet'}
                    title={ strings().resources.nolNet.title }
                    body={ <NolNet /> } />

                <Section
                    key='buips'
                    expanded={ this.state.selectedSection === 'buips'}
                    title={ strings().resources.buips.title }
                    body={ <Buips /> } />

                <Section
                    key='voting'
                    expanded={ this.state.selectedSection === 'voting'}
                    title={ 'Voting' }
                    body={  <a className='dim black' href="/voting/">BU Voting</a>  } />

                <Section
                    key='nodes'
                    expanded={ this.state.selectedSection === 'nodes'}
                    title={ strings().resources.nodes.title }
                    body={  <a className='dim black' href="/nodes/">Bitcoin Cash nodes counting</a>  } />

                <Section
                    key='nakamoto'
                    expanded={ this.state.selectedSection === 'nakamoto'}
                    title={ strings().resources.nakamotostudies.title }
                    body={  <NsInfo />  } />
            </Page>
        );
    }
}

export default Resources
