'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Join extends React.Component {
    render() {
        return (
            <div>
                <p className='lh-copy'>
                  { strings().about.join.body.text1 }
                  &nbsp;
                  <a className='link--underline dim black' href="https://forum.bitcoinunlimited.info/t/membership-applications-for-bitcoin-unlimited/178" target="_blank">
                      { strings().about.join.body.link1 }
                  </a>
                  &nbsp;
                  { strings().about.join.body.text2 }
                </p>
            </div>
        );
    }
};

export default Join
