import React, { useEffect, useState } from 'react';

function StopWatchH () {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setIsRunning(isRunning => !isRunning);
  };

  const tick = () =>
    setCount(count => {
      const newTime = new Date(count);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return newTime;
    });

  const reset = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    let timetId = null;
    if (isRunning) {
      timetId = setTimeout(tick, 1000);
    }

    return () => {
      clearTimeout(timetId);
    };
  });

  return (
    <article>
      <div>{count.toLocaleTimeString('en-GB')}</div>
      <button onClick={startHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </article>
  );
}

export default StopWatchH;
