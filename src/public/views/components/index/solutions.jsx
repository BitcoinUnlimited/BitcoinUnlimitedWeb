'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import UserIcon from '../icons/userIcon.jsx'
import InvestorIcon from '../icons/investorIcon.jsx'
import MinerIcon from '../icons/minerIcon.jsx'
import NodeIcon from '../icons/nodeIcon.jsx'

class Solutions extends React.Component {
    render() {
        return (
            <div className="p2 py4 center">
                <div className="py2 h1">{ strings().index.solutions.title }</div>
                <div className="py3 h3 pb4">{ strings().index.solutions.description }</div>

                <div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>
                            <div className='inline pr1 icon--center'>
                                <UserIcon width='20' height='24' />
                            </div>
                            { strings().index.solutions.users.title }
                        </div>
                        <div className='lh-copy py1'>{ strings().index.solutions.users.body }</div>
                        <Link className='link--underline dim black pt1' to="/solutions/users">{ strings().index.solutions.link }</Link>
                    </div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>
                            <div className='inline pr1 icon--center'>
                                <NodeIcon width='25' height='25' />
                            </div>
                            { strings().index.solutions.nodes.title }
                        </div>
                        <div className='lh-copy py1'>{ strings().index.solutions.nodes.body }</div>
                        <Link className='link--underline dim black pt1' to="/solutions/nodes">{ strings().index.solutions.link }</Link>
                    </div>
                </div>
                <div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>
                            <div className='inline pr1 icon--center'>
                                <MinerIcon width='24' height='20' />
                            </div>
                            { strings().index.solutions.miners.title }
                        </div>
                        <div className='lh-copy py1'>{ strings().index.solutions.miners.body }</div>
                        <Link className='link--underline dim black pt1' to="/solutions/miners">{ strings().index.solutions.link }</Link>
                    </div>

                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>
                            <div className='inline pr1 icon--center'>
                                <InvestorIcon width='25' height='25' />
                            </div>
                            { strings().index.solutions.investors.title }
                        </div>
                        <div className='lh-copy py1'>{ strings().index.solutions.investors.body }</div>
                        <Link className='link--underline dim black pt1' to="/solutions/investors">{ strings().index.solutions.link }</Link>
                    </div>
                </div>

            </div>
        );
    }
};

export default Solutions
