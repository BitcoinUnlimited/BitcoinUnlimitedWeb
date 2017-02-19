'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

import Resource from './resource.jsx';

class NonTechnical extends React.Component {
    render() {
        return (
            <div className='p2'>
                <ul>
                    <Resource title={
                        <div>
                            Rizun, P. R. 'What we’re doing with Bitcoin Unlimited, simply.' <div className='inline-block italic'>Medium</div>. 2017.
                            <a className='px1 dim black' target='_blank' href="https://medium.com/@peter_r/what-were-doing-with-bitcoin-unlimited-simply-6f71072f9b94#.s9a1qvnbe">(Article)</a>
                        </div>
                        } body={ strings().resources.nonTechnical.articles[0].body } />

                    <Resource title={
                        <div>
                            Yang, H. 'Miner Guide: How to Safely Hard Fork to Bitcoin Unlimited.' <div className='inline-block italic'>Medium</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://medium.com/@ViaBTC/miner-guide-how-to-safely-hard-fork-to-bitcoin-unlimited-8ac1570dc1a8#.9a808bodh">(Article)</a>
                        </div>
                        } body={ strings().resources.nonTechnical.articles[1].body } />

                    <Resource title={
                        <div>
                            Clifford, A., 'Decentralizing the Block Size Limit.' <div className='inline-block italic'>Medium</div>. 2016
                            <a className='px1 dim black' target='_blank' href="https://keepingstock.net/decentralizing-the-block-size-limit-1fe8f86730c#.q1lkbqj9b">(Article)</a>
                        </div>
                        } body={ strings().resources.nonTechnical.articles[2].body } />
                </ul>
            </div>

        )
    }
}


export default NonTechnical
