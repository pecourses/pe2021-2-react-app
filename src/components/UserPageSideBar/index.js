import { UserContext } from '../../contexts';

function UserPageSideBar (props) {
  return (
    <UserContext.Consumer>
      {user => <div>Hello, {user.fN}</div>}
    </UserContext.Consumer>
  );
}

export default UserPageSideBar;
