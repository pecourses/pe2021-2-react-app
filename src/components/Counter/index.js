import { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // если возвращает true, то перерендер нужен
  // shouldComponentUpdate (nexpProps, nextState) {
  //   const { count } = this.state;
  //   return count !== nextState.count;
  // }

  // PureComponent содержит в себе реализацию shouldComponentUpdate
  // Производит только поверхностное сравнение состояния и пропсов
  // shouldComponentUpdate (nexpProps, nextState) {
  //   const { count } = this.state;
  //   const { step } = this.props;
  //   return count !== nextState.count && step !== nextProps.step;
  // }

  decrement = e => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count - step });
  };

  increment = e => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count + step });
  };

  render () {
    const { count } = this.state;
    const { step } = this.props;

    console.log('render Counter');
    return (
      <>
        <div>{count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
