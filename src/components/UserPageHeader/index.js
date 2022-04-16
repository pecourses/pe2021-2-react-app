import { UserContext } from '../../contexts';
import styles from './UserPageHeader.module.scss';

function UserPageHeader (props) {
  return (
    <UserContext.Consumer>
      {user => {
        return (
          <>
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
          </>
        );
      }}
    </UserContext.Consumer>
  );
}

export default UserPageHeader;
