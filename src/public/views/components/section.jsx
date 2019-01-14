'use strict';

import React from 'react';
import ArrowIcon from './icons/arrowIcon.jsx'
import PropTypes from 'prop-types';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: this.props.expanded || false };
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ expanded: nextProps.expanded || false })
    }

    getExpandedClass() {
        if (this.state.expanded === false) {
            return("display-none")
        }
    }

    toggleExpanded() { this.setState({expanded: !this.state.expanded }) }

    render() {
        return (
            <div className='pt1 pb2'>
                <div className='clickable inline-block' onClick={ this.toggleExpanded }>
                    <div className='inline pr1'> <ArrowIcon expanded={ this.state.expanded } /> </div>
                    <div className='inline bold'> { this.props.title } </div>
                </div>
                <div className={ 'lh-copy pl2 ' + this.getExpandedClass() }>{ this.props.body }</div>
            </div>
        );
    }
}

Section.propTypes = {
  expanded: PropTypes.bool,
  title: PropTypes.node,
  body: PropTypes.node
};

export default Section
