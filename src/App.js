import { Component, createContext } from 'react';

const ValueContext = createContext();

function ChildChildPage (props) {
  return (
    <ValueContext.Consumer>{value => <div>{value}</div>}</ValueContext.Consumer>
  );
}

function ChildPage (props) {
  return <ChildChildPage />;
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      step: 6,
    };
  }

  render () {
    const { step } = this.state;
    return (
      <ValueContext.Provider value={step}>
        <ChildPage />
      </ValueContext.Provider>
    );
  }
}

export default App;
