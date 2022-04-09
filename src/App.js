import ViewPortParams from './components/ViewPortParams';

import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  render () {
    const { isVisible } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isVisible: !isVisible });
          }}
        >
          Switch
        </button>
        {isVisible && <ViewPortParams />}
      </>
    );
  }
}

<ViewPortParams />;

export default App;
