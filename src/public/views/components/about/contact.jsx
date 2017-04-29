'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Contact extends React.Component {
    render() {
        return (
            <ul className='py1'>
                <li className='pb1'>
                    { strings().about.contact.general } <a className='link--underline dim black' href="mailto:info@bitcoinunlimited.info">info@bitcoinunlimited.info</a>
                </li>
                <li className='pb1'>
                    { strings().about.contact.security } <a className='link--underline dim black' href="mailto:security@bitcoinunlimited.info">security@bitcoinunlimited.info</a>
                </li>
                <li>
                    { strings().about.contact.reach }:
                    <ul>
                        <li className='py1'>
                            <a className="link--underline dim black" href="https://www.bitco.in/forum" target="_blank">{ strings().about.contact.forum }</a>
                        </li>
                        <li className='pb1'>
                            <a className="link--underline dim black" href="https://reddit.com/r/btc" target="_blank">{ strings().about.contact.reddit1 }</a>
                        </li>
                        <li className='pb1'>
                            <a className="link--underline dim black" href="https://reddit.com/r/bitcoin_unlimited" target="_blank">{ strings().about.contact.reddit2 }</a>
                        </li>
                        <li className='pb1'>
                            <a className="link--underline dim black" href="mailto:info@bitcoinunlimited.info?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould%20you%20please%20invite%20me%20to%20the%20Bitcoin%20Unlimited%20Slack%20group%3F%20My%20email%20address%20is%20%5BINSERT%20EMAIL%20ADDRESS%20HERE%5D.%0D%0A%0D%0AThank%20you%21" target="_blank">{ strings().about.contact.slack }</a>
                        </li>
                        <li className='pb1'>
                            <a className="link--underline dim black" href="https://github.com/BitcoinUnlimited/BitcoinUnlimited/issues" target="_blank">{ strings().about.contact.issues }</a>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
};

export default Contact
