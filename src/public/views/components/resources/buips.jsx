'use strict';

import React from 'react';
import Section from '../section.jsx';
import Buip from './buip.jsx'

import BUIPS from '../../../../data/buips.json';

class Buips extends React.Component {
    renderTitle(number, title) {
        const string = number + ' – ' + title
        return string
    }

    render() {
        return (
            <div className='p2'>
                <div className='pb2'>
                    For further information, refer to the <a href='https://github.com/BitcoinUnlimited/BUIP' target='_blank' className='black'>original archives</a>.
                </div>
                {
                    BUIPS.map((buip) => {
                        return <Section
                            key={buip.number}
                            expanded={ false }
                            title={ this.renderTitle(buip.number, buip.title) }
                            body={ <Buip proposer={buip.proposer} dateSubmitted={buip.submitted} status={buip.status} href={buip.href} /> }
                            />
                    })
                }
            </div>
        );
    }
}

export default Buips
