import React, { Component } from 'react';

class ViewPortParams extends Component {
  constructor (props) {
    super(props);

    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }

  resize = e => {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  componentDidMount () {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize);
  }

  render () {
    const { x, y } = this.state;
    return (
      <div>
        <p>Width: {x}</p>
        <p>Height: {y}</p>
      </div>
    );
  }
}

export default ViewPortParams;
