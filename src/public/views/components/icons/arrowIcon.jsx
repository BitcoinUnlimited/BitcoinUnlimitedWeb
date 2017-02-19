'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class ArrowIcon extends React.Component {
    expandedArrow() {
        return (
            <svg onClick={this.props.onClick} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10L0 0h10" fill="#000" fillRule="evenodd"/>
            </svg>
        )
    }

    unexpandedArrow() {
        return (
            <svg onClick={this.props.onClick} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5L0 10V0" fill="#000" fillRule="evenodd"/>
            </svg>
        )
    }


    render() {
        if (this.props.expanded === true) {
            return this.expandedArrow()
        } else {
            return this.unexpandedArrow()
        }
    }
}

ArrowIcon.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func
};


export default ArrowIcon
