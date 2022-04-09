import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch(
      'https://randomuser.me/api/?results=10&seed=pe2021-2&page=1&inc=name,gender,email,login'
    )
      .then(response => response.json())
      .then(({ results }) => this.setState({ users: results }))
      .catch(e => {
        this.setState({ error: e });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { users, error, isFetching } = this.state;

    // if (error) {
    //   return <div style={{ color: 'red' }}>!!!ERROR!!!</div>;
    // }

    // добавить кнопки вперед и назад
    // навесить на них обработчики для изменения текущей страницы
    // *подгружать новые данные при изменении страницы
    return (
      <>
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
}
export default UsersLoader;
