'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

    getClassName(link) {
        if (this.props.active === link) {
            return 'active';
        }
    },

    render: function () {
        return (
            <div className='mainmenu-wrapper'>
             <div className="container">
                <nav id='mainmenu' className='mainmenu'>
                    <ul>
                        <li className='logo-wrapper'>
                            <Link to='/'>
                                <img src='/img/bitcoin-unlimited.png' width='98%' height='100%' />
                            </Link>
                        </li>
                        <li className={this.getClassName('index')}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={this.getClassName('download')}>
                            <Link to='/download'>Download</Link>
                        </li>
                        <li className={this.getClassName('faq')}>
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li className={this.getClassName('buip')}>
                            <Link to='/buip'>Proposals</Link>
                        </li>
                        <li className={this.getClassName('members')}>
                            <Link to='/members'>Members</Link>
                        </li>
                        <li className={this.getClassName('resources')}>
                            <Link to='/resources'>Resources</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        );
    }

});
