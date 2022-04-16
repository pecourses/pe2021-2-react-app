import classNames from 'classnames';
import { Component } from 'react';
import CONSTANTS from './constants';
import { UserContext, ThemeContext } from './contexts';
import UserPage from './pages/UserPage';
import styles from './App.module.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {
        src: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png',
        fN: 'Test',
        lN: 'Testovich',
      },
      theme: CONSTANTS.THEMES.LIGHT,
    };
  }

  setTheme = () => {
    console.log('theme', this.state.theme);
    this.setState(({ theme }) => ({
      theme:
        theme === CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.THEMES.DARK
          : CONSTANTS.THEMES.LIGHT,
    }));
  };

  // Обязательное имя пропа в Provider: value
  render () {
    const { user, theme } = this.state;

    const appClassNames = classNames({
      [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
      [styles.dark]: theme === CONSTANTS.THEMES.DARK,
    });

    return (
      <div className={appClassNames}>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={user}>
            <UserPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

// App(в state: user(src, fN, lN));
//   UserPage;
//     UserPageHeader(src, fN, lN);
//     UserPaheSideBar(fN);
