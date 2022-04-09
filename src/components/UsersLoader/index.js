import React, { Component } from 'react';
import loadUsers from '../../api';

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

  load = () => {
    const { currentPage } = this.state;

    this.setState({ isFetching: true });

    loadUsers({ page: currentPage }) //5
      .then(({ results }) => this.setState({ users: results }))
      .catch(e => {
        this.setState({ error: e });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  increment = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  decrement = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

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
        <button onClick={this.decrement}>previous page</button>
        <button onClick={this.increment}>next page</button>
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
