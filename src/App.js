import { useState } from 'react';
import UsersLoader from './components/UsersLoaderH';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(isVisible => !isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <UsersLoader />}
    </>
  );
};

export default App;
