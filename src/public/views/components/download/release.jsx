'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class Release extends React.Component {
    renderOsX() {
        if (this.props.osx32 || this.props.osx64 || this.props.osxDmg) {
            return (
                <div className='px1 py2 align-top inline-block download__container'>
                    <img src="../../img/mac.png" alt="Mac OSX" />
                    <div className='pt1'>
                        <div>
                            {strings().download.bit64}&nbsp;
                            <a className='dim black' href={this.props.osx64}>({strings().download.tar})</a>&nbsp;
                            { this.props.osx64Mirror ? <a className='dim black' href={this.props.osx64Mirror}>({strings().download.mirror})</a> : '' }
                        </div>
                        <div>
                            {strings().download.bit32}&nbsp;
                            <a className='dim black' href={this.props.osx32}>({strings().download.tar})</a>&nbsp;
                            { this.props.osx32Mirror ? <a className='dim black' href={this.props.osx32Mirror}>({strings().download.mirror})</a> : '' }
                        </div>
                        <div>
                            {strings().download.dmg}&nbsp;
                            <a className='dim black' href={this.props.osxDmg}>({strings().download.dmg})</a>&nbsp;
                            { this.props.osxDmgMirror ? <a className='dim black' href={this.props.osxDmgMirror}>({strings().download.mirror})</a> : '' }
                        </div>
                    </div>
                </div>
            )
        } else {
            return
        }
    }

    renderWindows() {
        return (
            <div className='px1 py2 align-top inline-block download__container'>
                <img src="../../img/windows.png" alt="Windows" />
                <div className='pt1'>
                    <div>
                        {strings().download.bit64}&nbsp;
                        <a className='dim black' href={this.props.windows64Exe}>({strings().download.exe})</a>&nbsp;
                        { this.props.windows64Zip ? <a className='dim black' href={this.props.windows64Zip}>({strings().download.zip})</a> : '' }&nbsp;
                        { this.props.windows64Mirror ? <a className='dim black' href={this.props.windows64Mirror}>({strings().download.mirror})</a> : '' }
                    </div>
                    <div>
                        {strings().download.bit32}&nbsp;
                        <a className='dim black' href={this.props.windows32Exe}>({strings().download.exe})</a>&nbsp;
                        { this.props.windows32Zip ? <a className='dim black' href={this.props.windows32Zip}>({strings().download.zip})</a> : '' }&nbsp;
                        { this.props.windows32Mirror ? <a className='dim black' href={this.props.windows32Mirror}>({strings().download.mirror})</a> : '' }
                    </div>
                </div>
            </div>
        )
    }

    renderLinux() {
        return (
            <div className='px1 py2 align-top inline-block download__container'>
                <img src="../../img/linux.png" alt="Linux" />
                <div className='pt1'>
                    <div>
                        {strings().download.bit64}&nbsp;
                        <a className='dim black' href={this.props.linux64}>({strings().download.tar})</a>&nbsp;
                        { this.props.linux64Mirror ? <a className='dim black' href={this.props.linux64Mirror}>({strings().download.mirror})</a> : '' }
                    </div>
                    <div>
                        {strings().download.bit32}&nbsp;
                        <a className='dim black' href={this.props.linux32}>({strings().download.tar})</a>&nbsp;
                        { this.props.linux32Mirror ? <a className='dim black' href={this.props.linux32Mirror}>({strings().download.mirror})</a> : '' }
                    </div>
                </div>
            </div>
        )
    }

    renderArm() {
        if (this.props.arm64 || this.props.arm32) {
            return (
                <div className='px1 py2 align-top inline-block download__container'>
                    <img src="../../img/arm.png" alt="ARM" />
                    <div className='pt1'>
                        <div>
                            {strings().download.bit64}&nbsp;
                            <a className='dim black' href={this.props.arm64}>({strings().download.tar})</a>&nbsp;
                            { this.props.arm64Mirror ? <a className='dim black' href={this.props.arm64Mirror}>({strings().download.mirror})</a> : '' }
                        </div>
                        <div>
                            {strings().download.bit32}&nbsp;
                            <a className='dim black' href={this.props.arm32}>({strings().download.tar})</a>&nbsp;
                            { this.props.arm32Mirror ? <a className='dim black' href={this.props.arm32Mirror}>({strings().download.mirror})</a> : '' }
                        </div>
                    </div>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        return (
            <div className='center py2'>
                { this.renderOsX() }
                { this.renderWindows() }
                { this.renderLinux() }
                { this.renderArm() }

                <div className='pt3'>
                    <img className='icon--center pr1' src="../../img/github.png" alt="Source" /> {strings().download.view} <a className='link--underline black dim' href={this.props.source} target='_blank'>{strings().download.source}</a>.
                </div>

                <div className='left-align pt2'>
                    { this.props.children }
                </div>
            </div>
        )
    }
}


export default Release
