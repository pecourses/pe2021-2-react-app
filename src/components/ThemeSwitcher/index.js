import React from 'react';
import WhiteBalanceSunnyIcon from 'mdi-react/WhiteBalanceSunnyIcon';
import MoonWaningCrescentIcon from 'mdi-react/MoonWaningCrescentIcon';
import MoonFullIcon from 'mdi-react/MoonFullIcon';
import styles from './ThemeSwitcher.module.scss';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';

function ThemeSwitcher () {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <label className={styles.label}>
          <input
            className={styles.input}
            type='checkbox'
            checked={theme === CONSTANTS.THEMES.DARK}
            onChange={setTheme}
          />
          <MoonFullIcon className={styles.ball} />
          <MoonWaningCrescentIcon className={styles.yellow} />
          <WhiteBalanceSunnyIcon className={styles.yellow} />
        </label>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeSwitcher;
