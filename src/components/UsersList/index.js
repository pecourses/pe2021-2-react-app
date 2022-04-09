import UsersListItem from './UsersListItem';

function UsersList ({ users, setUsers }) {
  const mapUser = (u, index) => {
    const selectUser = () => {
      const newUsers = [...users];

      newUsers[index].isSelected = !newUsers[index].isSelected;

      setUsers(newUsers);
    };

    return <UsersListItem key={u.id} user={u} selectUser={selectUser} />;
  };

  return <ul>{users.map(mapUser)}</ul>;
}

export default UsersList;
