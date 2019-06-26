'use strict';

import React from 'react';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.timer = this.timer.bind(this);
        this.state = {
            countdown: false,
            secondsRemaining: null,
            interval: null,
            timeout: null,
        };
    }

    displayTime() {
        let { secondsRemaining } = this.state;
        if (secondsRemaining > 0) {
            return `${Math.floor(secondsRemaining / 60)}:${("0" + (secondsRemaining % 60)).slice(-2)}`;
        }
        return null;
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        clearTimeout(this.state.timeout);
    }

    componentDidMount() {
        let { seconds, callback } = this.props;
        var interval = setInterval(this.timer, 1000);
        var timeout = setTimeout(_ => {
            clearInterval(this.state.interval);
            callback();
        }, seconds * 1000)
        this.setState({ interval: interval, timeout: timeout, secondsRemaining: seconds });
    }

    timer() {
        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    }

    render() {
        let { seconds } = this.props;
        let time = this.displayTime();
        if (seconds && time) {
            return (
                <div className="countdown-timer">{ time }</div>
            );
        } else {
            return null;
        }
    }
}

export default CountdownTimer;
