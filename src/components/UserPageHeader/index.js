import { withUser } from '../HOCs';
import styles from './UserPageHeader.module.scss';

// компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.

function UserPageHeader (props) {
  const { user } = props;
  return (
    <header className={styles.header}>
      <div className={styles.userInfoContainer}>
        <img
          className={styles.img}
          src={user.src}
          alt={`${user.fN} ${user.lN}`}
        />
        <div>{`${user.fN} ${user.lN}`}</div>
      </div>
    </header>
  );
}

export default withUser(UserPageHeader);
