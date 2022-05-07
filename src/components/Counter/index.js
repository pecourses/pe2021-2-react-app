import { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // decrement = e => {
  //   const { count } = this.state;
  //   const { step } = this.props;
  //   this.setState({ count: count - step });
  // };

  // increment = e => {
  //   const { count } = this.state;
  //   const { step } = this.props;
  //   this.setState({ count: count + step });
  // };

  setCount = op => {
    const { count } = this.state;
    const { step } = this.props;
    return e => {
      op === '-'
        ? this.setState({ count: count - step })
        : this.setState({ count: count + step });
    };
  };

  render () {
    const { count } = this.state;
    const { step } = this.props;

    console.log('render Counter');
    return (
      <>
        <div>{count}</div>
        <button onClick={this.setCount('-')}>-</button>
        <button onClick={this.setCount('+')}>+</button>
      </>
    );
  }
}

export default Counter;
