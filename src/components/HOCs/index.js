import { UserContext } from '../../contexts';

export const withUser = WrappedComponent => {
  const WrappedComponentWithUser = function (props) {
    return (
      <UserContext.Consumer>
        {user => <WrappedComponent user={user} {...props} />}
      </UserContext.Consumer>
    );
  };

  return WrappedComponentWithUser;
};
