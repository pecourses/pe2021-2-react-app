import DataProvider from './components/DataProvider';

const UsersLoadingList = props => {
  const { data: users, isFetching, error } = props.usersData;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <img src={u.src} />
            {u.firstName} {u.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

const PhonesLoadingList = props => {
  const { data: phones, isFetching, error } = props.phones;
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ol>
        {phones.map(p => (
          <li key={p.id}>
            {p.brand} {p.model}: {p.price}
          </li>
        ))}
      </ol>
    </>
  );
};

//  рендер-проп — функция, которая сообщает компоненту что необходимо рендерить
const App = () => (
  <>
    {/* <DataProvider
      fileName='./users.json'
      render={usersData => <UsersLoadingList usersData={usersData} />}
    /> */}
    {/* <DataProvider fileName='./users.json'>
      {usersData => <UsersLoadingList usersData={usersData} />}
    </DataProvider> */}
    <DataProvider fileName='./phones.json'>
      {phonesData => <PhonesLoadingList phones={phonesData} />}
    </DataProvider>
  </>
);

export default App;
// function (usersData) {return <UsersLoadingList usersData={usersData} }
