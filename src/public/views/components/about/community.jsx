'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Community extends React.Component {
    render() {
        return (
            <div>
            <ul className='py1'>
                <li className='pb1'>
                    <p>
                        <img className='icon--center pr1' src="../../img/twitter.png" alt="Twitter" />&nbsp;
                        <a className="link--underline dim black" href="https://twitter.com/bitcoinunlimit">
                            { strings().about.community.twitter1 }&nbsp;
                            { strings().about.community.twitter2 }&nbsp;
                            { strings().about.community.twitter3 }
                        </a>
                    </p>
                </li>
                <li className='pb1'>
                    <p>
                        <img className='icon--center pr1' src="../../img/element.png" alt="Matrix" />&nbsp;
                        <a className="link--underline dim black" href="https://matrix.to/#/!kaCIXdKPVlaSDHSEGa:matrix.org">
                            { strings().about.community.matrix1 }&nbsp;
                        </a>
                    </p>
                </li>
                <li className='pb1'>
                    <p>
                        { strings().about.community.buip1 }&nbsp;
                        <b>
                            { strings().about.community.buip2 }
                        </b>&nbsp;
                        { strings().about.community.buip3 }&nbsp;
                        <a className="link--underline dim black"
                            href="https://forum.bitcoinunlimited.info/">
                            { strings().about.community.buip4 }
                        </a>
                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.community.dev1 }&nbsp;
                            <a className="link--underline dim black" href="https://gitlab.com/bitcoinunlimited/BCHUnlimited/issues" target="_blank">{ strings().about.community.dev2 }</a>.
                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.community.open_telegram }&nbsp;
                            <a className="link--underline dim black" href="https://t.me/bitcoinunlimit" target="_blank"> t.me/bitcoinunlimit</a>.
                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.community.telegram }</p>
                </li>
            </ul>
            </div>
        );
    }
};

export default Community
