import { Component } from 'react';
import { ValueContext } from './contexts';

function ChildChildPage (props) {
  return (
    <ValueContext.Consumer>
      {step => {
        return <div>{step}</div>;
      }}
    </ValueContext.Consumer>
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

  // Обязательное имя пропа в Provider: value
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

// App(в state: user(src, fN, lN));
//   UserPage;
//     UserPageHeader(src, fN, lN);
//     UserPaheSideBar(fN);
