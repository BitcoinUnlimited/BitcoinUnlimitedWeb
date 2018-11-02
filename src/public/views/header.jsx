'use strict';

import React from 'react';
import { Link } from 'react-router';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'
import SecurityBanner from './components/header/securityBanner.jsx'
import AnnounceBanner from './components/header/announceBanner.jsx'
import AlertBanner from './components/header/alertBanner.jsx'
import { getLocalstorageKey, getDBSchemas } from '../../helpers/helpers.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.showCreateModels = this.showCreateModels.bind(this);
        this.state = {
            showAdminBar: false,
            links: null
        }
    }

    renderSecurityMessage() {
        return
        //return (
        //     <div className='inline'>
        //      <p>
        //         2017-05-09. BU nodes under attack. As temporary countermeasure please disable Xthin.
        //      </p>
        //      <p>
        //        To disable it add <i>use-thinblock=0</i> to your bitcoin.conf or use the command line flag <i>-use-thinblocks=0</i>.
        //      </p>
        //     </div>
        //)
    }

    renderAnnounceMessage() {
        return (
             <div className='inline-block'>
               <p>
                  <a title="Download BUCash 1.6.0.0" href="/download" className="link--underline white bold">
                    BU Bitcoin Cash (BCH) release 1.6.0.0 is available
                  </a>
               </p>
             </div>
        )
    }

    renderAlertMessage() {
        return
        //return (
        //     <div className='inline-block'>
        //       <p>
        //          <a title="Bitcoin Network upgrade explained, click to read Peter Rizun's medium article"
        //              href="https://medium.com/@peter_r/bitcoin-network-upgrade-at-block-494-784-f5ca19829529"
        //              target="_blank" className="link--underline white bold">
        //            Bitcoin network upgrade to 2MB max block size at block 494,784
        //          </a>
        //        </p>
        //     </div>
        //)
    }

    showCreateModels() {
        let models = getDBSchemas();
        let modelNames = [];
        models.map(model => {
            if (model.name !== 'User') {
                modelNames.push(model.name);
            }
        });
        let links = modelNames.map((name, idx) => {
            return (<Link key={idx} className='link' to={`/create/${name}`}>Create {name}</Link>);
        });
        this.setState({ showAdminBar: true, links });
    }

    showAdminBar() {
        let { showAdminBar, links } = this.state;
        if (showAdminBar && links) {
            return (
                <div className="btn">
                    <Link className='link' to='/dashboard'>Dashboard</Link>
                    {links}
                </div>
            );
        }
        let user = getLocalstorageKey('user');
        if (user) {
            return (
                <div className="btn">
                    <Link className='link' to='/dashboard'>Dashboard</Link>
                    <div className="link" onClick={this.showCreateModels}>Create &raquo;</div>
                </div>
            );
        }
        return;
    }

    render() {
        return (
            <div>
                <WebHeader />
                <MobileHeader />
                <div className='banner'>{ this.showAdminBar() }<div className="clear"></div></div>
                <SecurityBanner message={ this.renderSecurityMessage() }/>
                <AnnounceBanner message={ this.renderAnnounceMessage() }/>
                <AlertBanner message={ this.renderAlertMessage() }/>
            </div>
        );
    }
};

export default Header
