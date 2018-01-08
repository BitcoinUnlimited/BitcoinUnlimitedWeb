'use strict';

import React from 'react';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'
import SecurityBanner from './components/header/securityBanner.jsx'
import AnnounceBanner from './components/header/announceBanner.jsx'
import AlertBanner from './components/header/alertBanner.jsx'

class Header extends React.Component {
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
                  <a title="Download BUCash 1.2.0.0" href="/download" className="link--underline white bold">
                    BU Bitcoin Cash (BCH) release 1.2.0.0 available
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

    render() {
        return (
            <div>
                <WebHeader />
                <MobileHeader />
                <div className='banner'></div>
                <SecurityBanner message={ this.renderSecurityMessage() }/>
                <AnnounceBanner message={ this.renderAnnounceMessage() }/>
                <AlertBanner message={ this.renderAlertMessage() }/>
            </div>
        );
    }
};

export default Header
