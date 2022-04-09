// import './ThemeButton.css'; //className="button"
// Модули стилей: генерируют уникальные имена классов:
// 1 Именование файла со стилями: ИмяКомпонента.module.css
// 2 Импорт стилей: import styles from './ИмяКомпонента.module.css';
// 3 className={styles.имяКласса}

import styles from './ThemeButton.module.css';

function ThemeButton (props) {
  const { isLightTheme } = props;
  // Инлайн стили - в объекте
  // имена свойств - в camelCase

  // Классы в className
  // Значение className - строка

  // Инлайн стили используем тогда, когда они динамически формируются
  const inlineStyles = {
    color: isLightTheme ? 'grey' : 'white',
    backgroundColor: isLightTheme ? 'white' : 'black',
  };
  // className="class1 class2 class3"
  return (
    <button type='button' style={inlineStyles} className={styles.button}>
      {isLightTheme ? 'Light' : 'Dark'}
    </button>
  );
}

export default ThemeButton;
