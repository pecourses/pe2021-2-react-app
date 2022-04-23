import { useContext } from 'react';
import { UserContext } from '../../contexts';

// function UserPageSideBar (props) {
//   const user = useContext(UserContext);
//   return <div>Hello, {user.fN}</div>;
// }

function UserPageSideBar (props) {
  return (
    <UserContext.Consumer>
      {user => <div>Hello, {user.fN}</div>}
    </UserContext.Consumer>
  );
}

export default UserPageSideBar;
