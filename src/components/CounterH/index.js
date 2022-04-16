import { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      step: 1,
    };
  }

  decrement = e => {
    const { count, step } = this.state;
    this.setState({ count: count - step });
  };

  increment = e => {
    const { count, step } = this.state;
    this.setState({ count: count + step });
  };

  render () {
    const { count, step } = this.state;

    return (
      <>
        <div>{count}</div>
        <input
          type='number'
          value={step}
          onChange={e => this.setState({ step: Number(e.target.value) })}
        />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
