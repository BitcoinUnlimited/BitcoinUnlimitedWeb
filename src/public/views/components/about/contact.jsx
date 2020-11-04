'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Contact extends React.Component {
    render() {
        return (
            <div>
            <h3>Direct contact</h3>
            <p>
                { strings().about.contact.general } <a className='link--underline dim black' href="mailto:info@bitcoinunlimited.info">info@bitcoinunlimited.info</a>
            </p>
            { strings().about.contact.security } <a className='link--underline dim black' href="mailto:security@bitcoinunlimited.info">security@bitcoinunlimited.info</a>, { strings().about.contact.gpgkeysintro }:
            <table className="gpg">
                <tbody>
                   <tr>
                      <td><code>Andrew Stone</code></td>
                      <td>
                         <div>
                            <code>
                               <span>D9CF</span><span>D61A</span><span>C5EE</span><span>8935</span><span>7186</span><span>4319</span><span>4718</span><span>6019</span><span>72AB</span><span>33C2</span>
                            </code>
                         </div>
                      </td>
                   </tr>
                   <tr>
                      <td><code>Andrea Suisani</code></td>
                      <td>
                         <div>
                            <code>
                                <span>17D1</span><span>6F72</span><span>C009</span><span>1B1F</span><span>ED77</span><span>95FB</span><span>A9CA</span><span>1D0E</span><span>E378</span><span>9741</span>
                            </code>
                         </div>
                      </td>
                   </tr>
                   <tr>
                      <td><code>Awemany</code></td>
                      <td>
                         <div>
                            <code>
                               <span>9D2F</span><span>DC1B</span><span>B501</span><span>2E4B</span><span>E44B</span><span>CAAF</span><span>D78D</span><span>75A4</span><span>6101</span><span>B81F</span>
                            </code>
                         </div>
                      </td>
                   </tr>
                </tbody>
            </table>
            <h3>{ strings().about.contact.reach }</h3>
            <ul className='py1'>
                <li className='pb1'>
                    <img className='icon--center pr1' src="../../img/twitter.png" alt="Twitter" />&nbsp;
                    <a className="link--underline dim black" href="https://twitter.com/bitcoinunlimit">
                        { strings().about.contact.twitter1 }&nbsp;
                        { strings().about.contact.twitter2 }&nbsp;
                        { strings().about.contact.twitter3 }
                    </a>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.contact.slack1 } <b>Slack chat</b>.</p>
                    <p>{ strings().about.contact.slack2 }&nbsp;
                    <a className="link--underline dim black" href="mailto:info@bitcoinunlimited.info?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould%20you%20please%20invite%20me%20to%20the%20Bitcoin%20Unlimited%20Slack%20group%3F%20My%20email%20address%20is%20%5BINSERT%20EMAIL%20ADDRESS%20HERE%5D.%0D%0A%0D%0AThank%20you%21" target="_blank">
                        { strings().about.contact.slack3 }
                        </a>.
                    </p>
                    <p>Our slack has a paid subscription and contains full chat history.</p>
                </li>
                <li className='pb1'>
                    <p>

                        { strings().about.contact.buip1 }&nbsp;
                        <b>
                            { strings().about.contact.buip2 }
                        </b>&nbsp;
                        { strings().about.contact.buip3 }&nbsp;
                        <a className="link--underline dim black"
                            href="https://bitco.in/forum/forums/bitcoin-unlimited.15/">
                            { strings().about.contact.buip4 }
                        </a>&nbsp;
                        { strings().about.contact.buip5 }

                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.contact.dev1 }&nbsp;
                            <a className="link--underline dim black" href="https://gitlab.com/bitcoinunlimited/BCHUnlimited/issues" target="_blank">{ strings().about.contact.dev2 }</a>.
                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.contact.open_telegram }&nbsp;
                            <a className="link--underline dim black" href="https://t.me/bitcoinunlimit" target="_blank"> t.me/bitcoinunlimit</a>.
                    </p>
                </li>
                <li className='pb1'>
                    <p>{ strings().about.contact.telegram }</p>
                </li>
            </ul>
            </div>
        );
    }
};

export default Contact
