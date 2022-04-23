import { useContext } from 'react';
import { UserContext } from '../../contexts';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './UserPageHeader.module.scss';

// function UserPageHeader (props) {
//   const user = useContext(UserContext);
//   return (
//     <>
//       <header className={styles.header}>
//         {/* <ThemeSwitcher /> */}
//         <div className={styles.userInfoContainer}>
//           <img
//             className={styles.img}
//             src={user.src}
//             alt={`${user.fN} ${user.lN}`}
//           />
//           <div>{`${user.fN} ${user.lN}`}</div>
//         </div>
//       </header>
//     </>
//   );
// }

function UserPageHeader (props) {
  return (
    <UserContext.Consumer>
      {user => {
        return (
          <>
            <header className={styles.header}>
              {/* <ThemeSwitcher /> */}
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
