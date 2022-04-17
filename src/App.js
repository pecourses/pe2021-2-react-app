import { useState } from 'react';
import ClickerCounter from './components/ClickerCounter';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(isVisible => !isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <ClickerCounter />}
    </>
  );
};

export default App;
