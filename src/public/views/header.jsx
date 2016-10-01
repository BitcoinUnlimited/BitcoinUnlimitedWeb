'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../lib/i18n';

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
                            <Link to='/'>{strings().header.home}</Link>
                        </li>
                        <li className={this.getClassName('download')}>
                            <Link to='/download'>{strings().header.download}</Link>
                        </li>
                        <li className={this.getClassName('faq')}>
                            <Link to='/faq'>{strings().header.faq}</Link>
                        </li>
                        <li className={this.getClassName('buip')}>
                            <Link to='/buip'>{strings().header.proposals}</Link>
                        </li>
                        <li className={this.getClassName('members')}>
                            <Link to='/members'>{strings().header.members}</Link>
                        </li>
                        <li className={this.getClassName('resources')}>
                            <Link to='/resources'>{strings().header.resources}</Link>
                        </li>
                        <li className={this.getClassName('conference')}>
                            <Link to='/conferences'>{strings().header.conference}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        );
    }

});
