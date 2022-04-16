import { useState } from 'react';

function Counter (props) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const decrement = e => {
    setCount(count => count - step);
  };

  const increment = e => {
    setCount(count => count + step);
  };

  return (
    <>
      <div>{count}</div>
      <input
        type='number'
        value={step}
        onChange={e => setStep(Number(e.target.value))}
      />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
