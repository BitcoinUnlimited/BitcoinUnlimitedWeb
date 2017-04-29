'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../lib/i18n';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='banner'></div>
                <div className='footer__container white'>
                    <div className="px2 pb1 center">
                        <div className='left-align align-top inline-block footer__section'>
                            <h4><Link className='white text-decoration-none' to='/solutions'>{strings().header.solutions.title}</Link></h4>
                            <Link className='block py1 link dim' to='/solutions/users'>{strings().header.solutions.users}</Link>
                            <Link className='block py1 link dim' to='/solutions/nodes'>{strings().header.solutions.nodes}</Link>
                            <Link className='block py1 link dim' to='/solutions/miners'>{strings().header.solutions.miners}</Link>
                            <Link className='block py1 link dim' to='/solutions/investors'>{strings().header.solutions.investors}</Link>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4><Link className='white text-decoration-none' to='/technologies'>{strings().header.technologies.title}</Link></h4>
                            <Link className='block py1 link dim' to='/technologies/adjustable-block-size-cap'>{strings().header.technologies.adjustableCap}</Link>
                            <Link className='block py1 link dim' to='/technologies/xthin'>{strings().header.technologies.xthin}</Link>
                            <Link className='block py1 link dim' to='/technologies/parallel-validation'>{strings().header.technologies.parallelValidation}</Link>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4><Link className='white text-decoration-none' to='/resources'>{strings().header.resources.title}</Link></h4>
                            <Link className='block py1 link dim' to='/resources/technical'>{strings().header.resources.technical}</Link>
                            <Link className='block py1 link dim' to='/resources/non-technical'>{strings().header.resources.nonTechnical}</Link>
                            <Link className='block py1 link dim' to='/resources/nolnet'>{strings().header.resources.nolNet}</Link>
                            <Link className='block py1 link dim' to='/resources/buips'>{strings().header.resources.buips}</Link>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4><Link className='white text-decoration-none' to='/about'>{strings().header.about.title}</Link></h4>
                            <Link className='block py1 link dim' to='/about/organization'>{strings().header.about.organization}</Link>
                            <Link className='block py1 link dim' to='/about/members'>{strings().header.about.members}</Link>
                            <Link className='block py1 link dim' to='/about/join'>{strings().header.about.join}</Link>
                            <Link className='block py1 link dim' to='/about/contact'>{strings().header.about.contact}</Link>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4><Link className='white text-decoration-none' to='/faq'>{strings().header.faq.title}</Link></h4>
                            <h4><Link className='white text-decoration-none' to='/download'>{strings().header.download.title}</Link></h4>
                            <h4><Link className='white text-decoration-none' to='/donate'>{strings().header.donate}</Link></h4>
                        </div>
                    </div>
                    <div className="py3 center">
                        <div>&copy; {strings().footer.copy}</div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Footer;
