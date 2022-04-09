import React from 'react';

function SelectedUsersList (props) {
  const { users } = props;
  const selectedUsers = users.filter(u => u.isSelected);

  // Коллбек мапа можно вынести
  return (
    <ol>
      {selectedUsers.map(({ id, firstName, lastName }) => (
        <li key={id}>
          {firstName} {lastName}
        </li>
      ))}
    </ol>
  );
}

export default SelectedUsersList;
