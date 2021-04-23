'use strict';

import React from 'react';
import { Link } from 'react-router';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'
import Banner from './components/header/Banner.jsx'
import { getLocalstorageKey, getDBSchemas } from '../../helpers/helpers.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
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
                  <a title="Download BCH Unlimited 1.9.2" href="/download" className="link--underline white bold">
                    BCH Unlimited release 1.9.2 is available
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

    getType() {
        if (this.renderSecurityMessage()) {
            return 'Security alert:';
        } else if (this.renderAlertMessage()) {
            return 'ALERT:';
        }
        return 'Announcement:';
    }

    getMessage() {
        return this.renderSecurityMessage() || this.renderAlertMessage() || this.renderAnnounceMessage();
    }

    showCreateLinks() {
        let models = getDBSchemas();
        let modelNames = [];
        let { active: currentName = '' } = this.props;
        models.map(model => {
            if (model.name !== 'User') {
                modelNames.push(model.name);
            }
        });
        let links = modelNames.map((name, idx) => {
            if (name === currentName) {
                return (<Link key={ idx } className='link active' to={ `/create/${name}` }>Create { name }</Link>);
            } else {
                return (<Link key={ idx } className='link' to={ `/create/${name}` }>Create { name }</Link>);
            }
        });
        return links;
    }

    getDashboardLink() {
        let { active: currentName = '' } = this.props;
        if (currentName === 'dashboard') {
            return (<Link className='link active' to='/dashboard'>Dashboard</Link>);
        }
        return (<Link className='link' to='/dashboard'>Dashboard</Link>);
    }

    showAdminBar() {
        let user = getLocalstorageKey('user');
        if (user) {
            return (
                <div className="btn">
                    { this.getDashboardLink() }
                    { this.showCreateLinks() }
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
                <Banner message={ this.getMessage() } type={ this.getType() }/>
            </div>
        );
    }
};

export default Header
