import { useState } from 'react';

function ClickerCounter () {
  // this.state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // this.setState({ count: count + 1 });
  const clickHandler = () => setCount(count => count + 1);

  const mouseMoveHandler = e => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ height: '100vh' }}
      onClick={clickHandler}
      onMouseMove={mouseMoveHandler}
    >
      {count}
    </div>
  );
}

export default ClickerCounter;
