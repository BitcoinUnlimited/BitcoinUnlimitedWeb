
'use strict';

import React from 'react';

class Member extends React.Component {
    renderImage() {
        if (this.props.member.photoUrl) {
            return (<img className='member__image' src={ '../' + this.props.member.photoUrl } alt={ this.props.member.name } />)
        } else {
            return (<img className='member__image generic' src='../img/about/generic.png' alt={ this.props.member.name } />)
        }
    }

    renderTitle() {
        return (this.props.member.title) ? (<div>{ this.props.member.title }</div>) : null;
    }

    setClickableClass() {
        if (this.hasModal()) {
            return('inline-block px0 member--clickable')
        } else {
            return('inline-block px0')
        }
    }

    handleClick() {
        return (this.hasModal()) ? this.props.modalFunc(this.props.member) : null;
    }

    hasModal() {
        return (this.props.member.publicKey || this.props.member.bio) ? true : false;
    }

    render() {
        return (
            <div className={ 'p2 pb3 center inline-block align-top member__container'+((this.props.member.photoUrl)?'':' generic') }>
                { this.renderImage() }
                <div className='pt1'>
                    <div onClick={ () => this.handleClick() } className={ this.setClickableClass() }>
                        { this.props.member.avatar }
                    </div>
                    <div> { this.props.member.name } </div>
                    { this.renderTitle() }
                </div>
            </div>
        )
    }
}

export default Member
