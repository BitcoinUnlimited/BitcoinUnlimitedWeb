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

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };

        var privateKey = Bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
        var signature = Message('hello, world').sign(privateKey);
        console.log(signature);

        var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
        var signature2 = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
        var verified = Message('hello, world').verify(address, signature);
        console.log(verified);

        console.log(signature == signature2);

        var verified2 = Message('hello, world').verify(address, signature2);
        console.log(verified2);

        var addr2 = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
        // var sig = 'IPynhAQDxJJV6mqWcowsCDXu7i7Xbc5D8M6Ai6UkTg8AfSQQvNS2RiLCIvDJtpVYG/mAV9pRTMjllKa8ZI43/64=';
        var ver2 = Message('hello, world').verify(addr2, signature1);
        console.log(ver2);

        var addr = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
        var sig = 'IPynhAQDxJJV6mqWcowsCDXu7i7Xbc5D8M6Ai6UkTg8AfSQQvNS2RiLCIvDJtpVYG/mAV9pRTMjllKa8ZI43/64=';
        var ver = Message('hello, world').verify(addr, sig);
        console.log(ver);

        var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
        var signature = 'IFEG4TPPmd+N4GEG3raWMjuywXf7yXk5LWNnmofx8wKkR6Pyn1ZI5bCyqobFF0Xs5knEoNFZcK6Al91X0v8BS1A=';
        var verified = Message('hello, world').verify(address, signature);
        console.log(verified);

        var address2 = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
        var signature2 = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
        var verified2 = Message('hello, world').verify(address2, signature2);
        console.log(verified2);

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
