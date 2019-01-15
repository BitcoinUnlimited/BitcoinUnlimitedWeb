'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
    render() {
        return (
            <div className="dropdown__container">
                <div className="dropdown__title">
                    { this.props.title }
                </div>
                <div className="dropdown__content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.node
}

export default Dropdown
