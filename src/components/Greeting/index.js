import styles from './Greeting.module.css';

// выражения JS в JSX в {}
// Функциональный
function Greeting (props) {
  const { name, isGreeting } = props; //{name:'Masha'};

  return (
    <div className={styles.button}>
      {isGreeting ? 'Hello' : 'Goodbuy'} {name}!
    </div>
  );
}

export default Greeting;
