'use strict';

import React from 'react';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'
import SecurityBanner from './components/header/securityBanner.jsx'

class Header extends React.Component {
    renderSecurityMessage() {
        return

        // Example 1:
        // return "we have found a bug in abc. We are working to fix it."

        // Example 2:
        // return (
        //     <div className='inline'>
        //         there is an <a href='#' target='_blank' className='orange'>issue</a>.
        //     </div>
        // )
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
