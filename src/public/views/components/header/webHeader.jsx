'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';
import Dropdown from '../dropdown.jsx'
import UserArea from '../protected/user-area.jsx'

class WebHeader extends React.Component {

    render() {
        return (
            <div className='header--web header__container--web clearfix'>
                <div className="left">
                    <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo'/></Link>
                </div>
                <div className="right">
                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/solutions'>{strings().header.solutions.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/solutions/users'>{strings().header.solutions.users}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/nodes'>{strings().header.solutions.nodes}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/miners'>{strings().header.solutions.miners}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/investors'>{strings().header.solutions.investors}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/technologies'>{strings().header.technologies.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/technologies/adjustable-block-size-cap'>{strings().header.technologies.adjustableCap}</Link>
                        <Link className='non-decorated black block p2' to='/technologies/xthin'>{strings().header.technologies.xthin}</Link>
                        <Link className='non-decorated black block p2' to='/technologies/parallel-validation'>{strings().header.technologies.parallelValidation}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/resources'>{strings().header.resources.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/resources/technical'>{strings().header.resources.technical}</Link>
                        <Link className='non-decorated black block p2' to='/resources/non-technical'>{strings().header.resources.nonTechnical}</Link>
                        <Link className='non-decorated black block p2' to='/resources/nolnet'>{strings().header.resources.nolNet}</Link>
                        <Link className='non-decorated black block p2' to='/resources/buips'>{strings().header.resources.buips}</Link>
                        <a className='non-decorated black block p2' href='/voting/'>{strings().header.resources.buvweb}</a>
                        <a className='non-decorated black block p2' target='_blank' href='https://cashnodes.io/'>{strings().header.resources.nodes}</a>
                        <a className='non-decorated black block p2' target='_blank' href='https://nakamotostudies.org/'>{strings().resources.nakamotostudies.url}</a>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/faq'>{strings().header.faq.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/faq/what-is-bu'>{strings().header.faq.whatIsBu}</Link>
                        <Link className='non-decorated black block p2' to='/faq/hard-forks-and-consensus'>{strings().header.faq.hardForksAndConsensus}</Link>
                        <Link className='non-decorated black block p2' to='/faq/scaling'>{strings().header.faq.scaling}</Link>
                        <Link className='non-decorated black block p2' to='/faq/attacks-and-risks'>{strings().header.faq.attacksAndRisks}</Link>
                        <Link className='non-decorated black block p2' to='/faq/who-is-bu'>{strings().header.faq.whoIsBu}</Link>
                        <Link className='non-decorated black block p2' to='/faq/myths'>{strings().header.faq.myths}</Link>
                        <Link className='non-decorated black block p2' to='/faq/contribute'>{strings().header.faq.contribute}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/about'>{strings().header.about.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/about/organization'>{strings().header.about.organization}</Link>
                        <Link className='non-decorated black block p2' to='/about/members'>{strings().header.about.members}</Link>
                        <Link className='non-decorated black block p2' to='/about/join'>{strings().header.about.join}</Link>
                        <Link className='non-decorated black block p2' to='/about/contact'>{strings().header.about.contact}</Link>
                    </Dropdown>

                    <Link className='non-decorated black inline-block mx2 py2' to='/blog'>Blog</Link>

                    <Link className='inline-block mx2 py2 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                    <Link className='inline-block mx2 py2 dim btn--primary' to='/download'>{strings().header.download.title}</Link>

                    <UserArea />
                </div>
            </div>
        )
    }
}

export default WebHeader
