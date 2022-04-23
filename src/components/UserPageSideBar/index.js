import { withUser } from '../HOCs';

function UserPageSideBar (props) {
  const { user } = props;
  return <div>Hello, {user.fN}</div>;
}

export default withUser(UserPageSideBar);
