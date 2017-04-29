
'use strict';

import React from 'react';
import Modal from 'react-modal';

import Member from './member.jsx'
import MemberModal from './memberModal.jsx'

import MEMBERS from '../../../../data/members.json';

class Members extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            selectedMember: null
        };

        this.openMemberModal = this.openMemberModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openMemberModal(member) {
        this.setState({
            modalIsOpen: true,
            selectedMember: member
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedMember: null
        });
    }

    renderModalBody() {
        if (this.state.selectedMember) {
            return (<MemberModal member={this.state.selectedMember} />)
        }
    }

    render() {
        return (
            <div className='pt3'>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  className='modal--content'
                  overlayClassName='modal--overlay'
                  contentLabel="Member Modal"
                >
                  {this.renderModalBody()}
                </Modal>

                <div>
                    {
                        MEMBERS.map((member) => {
                            return(
                                <Member
                                    member={member}
                                    key={member.avatar}
                                    modalFunc={this.openMemberModal} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Members
