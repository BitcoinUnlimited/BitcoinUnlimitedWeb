'use strict';

import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import { strings } from '../../../lib/i18n';

const RadiumLink = Radium(Link);
const Menu = require('react-burger-menu').slide;

class MobileHeader extends React.Component {

    render() {
        return (
            <div className='header--mobile header__container clearfix'>
                <div className="left">
                    <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo--mobile'/></Link>
                </div>
                <div className="right">
                    <Menu className='center' isOpen={false} right>
                        <RadiumLink className='block my3 dim btn--primary' to='/download'>{strings().header.download.title}</RadiumLink>
                        <RadiumLink className='block my3 dim btn--secondary' to='/donate'>{strings().header.donate}</RadiumLink>
                        <div className='my3'>
                            <RadiumLink className='white header__link' to='/solutions'>{strings().header.solutions.title}</RadiumLink>
                        </div>
                        <div className='my3'>
                            <RadiumLink className='white header__link' to='/technologies'>{strings().header.technologies.title}</RadiumLink>
                        </div>
                        <div className='my3'>
                            <RadiumLink className='white header__link' to='/resources'>{strings().header.resources.title}</RadiumLink>
                        </div>
                        <div className='my3'>
                            <RadiumLink className='white header__link' to='/faq'>{strings().header.faq.title}</RadiumLink>
                        </div>
                        <div className='my3'>
                            <RadiumLink className='white header__link' to='/about'>{strings().header.about.title}</RadiumLink>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default MobileHeader
