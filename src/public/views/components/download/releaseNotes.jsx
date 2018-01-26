'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class ReleaseNotes extends React.Component {
    render() {
        return (
            <ul>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_2_0_1} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/dev/doc/release-notes/release-notes-bucash1.2.0.1.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_2_0_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-bucash1.2.0.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_1_2_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-bucash1.1.2.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_1_1_1} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-bucash1.1.1.1.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_1_1_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/bucash1.1.1.0/doc/release-notes/release-notes-bucash1.1.1.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_buc_1_1_0_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/bucash1.1.1.0/doc/release-notes/release-notes-bucash1.1.0.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_3_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/v1.0.3.0/doc/release-notes/release-notes-1.0.3.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_2_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/v1.0.2.0/doc/release-notes/release-notes-1.0.2.0.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_4} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/v1.0.1.4/doc/release-notes/release-notes-1.0.1.4.md'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_3}
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_2}
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_0} <a className='link--underline dim black' target='_blank' href='https://bitco.in/forum/threads/announcement-bitcoin-unlimited-general-release-1-0-0.1783/page-2#post-35605'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_0_0} <a className='link--underline dim black' target='_blank' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-1.0.0.md'>{strings().download.notes.here}</a>.
                </li>
            </ul>
        )
    }
}

export default ReleaseNotes
