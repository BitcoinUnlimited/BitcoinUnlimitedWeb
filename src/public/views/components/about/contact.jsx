'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

class Contact extends React.Component {
    render() {
        return (
            <div>
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
                </tbody>
            </table>
            </div>
        );
    }
};

export default Contact
