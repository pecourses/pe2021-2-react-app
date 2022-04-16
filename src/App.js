import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  handleStepChange = e => {
    this.setState({ step: Number(e.target.value) });
  };

  render () {
    const { step } = this.state;

    return (
      <>
        <input type='number' value={step} onChange={this.handleStepChange} />
        <Counter step={step} />
      </>
    );
  }
}

export default App;
