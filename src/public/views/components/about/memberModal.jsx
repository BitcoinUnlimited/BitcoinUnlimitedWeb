
'use strict';

import React from 'react';

class MemberModal extends React.Component {
    renderImage() {
        if (this.props.member.photoUrl) {
            return (<img className='member__image pb1' src={ '../' + this.props.member.photoUrl} alt={this.props.member.name} />)
        } else {
            return (<img className='member__image' src='../img/about/generic.png' alt={this.props.member.name} />)
        }
    }

    renderTitle() {
        if (this.props.member.title) {
            return ( <div> {this.props.member.title} </div> )
        } else {
            return
        }
    }

    renderBody() {
        let bio, name, bitcoin_address = ''

        if (this.props.member.bio) {
            bio = this.stringsToParagraphs(this.props.member.bio)
        }

        if (this.props.member.publicKey) {
            bitcoin_address = "BU signing address: " + this.props.member.publicKey
        }

        return (
            <span>
                <div className='left-align pb1'>
                    { bio }
                </div>
                <div className='left-align'>
                    { bitcoin_address }
                </div>
            </span>
        )
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <div className='p2 pb3 center'>
                { this.renderImage() }

                <div className='py1'>
                    <div> {this.props.member.avatar} </div>
                    <div> {this.props.member.name} </div>
                    { this.renderTitle() }
                </div>

                { this.renderBody() }
            </div>
        )
    }
}

export default MemberModal
