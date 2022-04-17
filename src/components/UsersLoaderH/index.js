import { useEffect, useState } from 'react';
import loadUsers from '../../api';

// переписать на хуки

function UsersLoader (props) {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(window.localStorage.getItem('page')) || 1
  );

  const load = () => {
    setIsFetching(true);

    loadUsers({ page: currentPage })
      .then(({ results }) => setUsers(results))
      .catch(e => {
        setError(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  useEffect(() => {
    window.localStorage.setItem('page', currentPage);
  }, [currentPage]);

  const increment = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const decrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };

  return (
    <>
      <p>{currentPage}</p>
      <button onClick={decrement}>previous page</button>
      <button onClick={increment}>next page</button>
      {error && <div style={{ color: 'red' }}>!!!ERROR!!!</div>}
      {isFetching && <div>Loading, please wait...</div>}
      <ul>
        {users.map(u => (
          <li key={u.login.uuid}>{JSON.stringify(u)}</li>
        ))}
      </ul>
    </>
  );
}
export default UsersLoader;
