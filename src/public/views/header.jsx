'use strict';

import React from 'react';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'
import SecurityBanner from './components/header/securityBanner.jsx'

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

    render() {
        return (
            <div>
                <WebHeader />
                <MobileHeader />
                <div className='banner'></div>
                <SecurityBanner message={ this.renderSecurityMessage() }/>
            </div>
        );
    }
};

export default Header
