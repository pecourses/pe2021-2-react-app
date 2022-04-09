import DeleteOutlineIcon from 'mdi-react/DeleteOutlineIcon';

function UsersListItem (props) {
  const {
    user: { id, firstName, lastName, isSelected },
    selectUser,
  } = props;

  const liStyle = {
    border: `2px dotted ${isSelected ? 'green' : 'transparent'}`,
  };

  return (
    <li onClick={() => selectUser()} style={liStyle}>
      {firstName} {lastName}
      {/* <DeleteOutlineIcon onClick={} /> */}
    </li>
  );
}

export default UsersListItem;
