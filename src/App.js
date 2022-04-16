import { Component } from 'react';
import { UserContext } from './contexts';
import UserPage from './pages/UserPage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {
        src: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png',
        fN: 'Test',
        lN: 'Testovich',
      },
    };
  }

  // Обязательное имя пропа в Provider: value
  render () {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        <UserPage />
      </UserContext.Provider>
    );
  }
}

export default App;

// App(в state: user(src, fN, lN));
//   UserPage;
//     UserPageHeader(src, fN, lN);
//     UserPaheSideBar(fN);
