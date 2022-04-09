import React, { Component } from 'react';

class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: new Date(0, 0, 0, 0, 0, 0, 0),
    };

    this.timerId = null;
    console.log('const');
  }

  componentDidMount () {
    this.start();
  }
  componentDidUpdate () {}
  componentWillUnmount () {
    this.stop();
  }

  tick = () =>
    this.setState(state => {
      const newTime = new Date(state.count);
      newTime.setSeconds(newTime.getSeconds() + 1);
      console.log('newTime', newTime instanceof Date);
      return { count: newTime };
    });

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };
  reset = () => {
    this.setState({ count: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  render () {
    const { count } = this.state;

    return (
      <article>
        <div>{count.toLocaleTimeString('en-GB')}</div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
