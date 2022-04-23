import { useState } from 'react';
import { UserContext } from './contexts';
import UserPage from './pages/UserPage';

const App = () => {
  const [user, setUser] = useState({
    fN: 'Test',
    lN: 'Testovich',
    src:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
  });

  return (
    <UserContext.Provider value={user}>
      <UserPage />
    </UserContext.Provider>
  );
};

export default App;
