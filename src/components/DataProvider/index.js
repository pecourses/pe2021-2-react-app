import React, { Component } from 'react';

class DataProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    const { fileName } = this.props;

    this.setState({ isFetching: true });
    fetch(fileName)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { children } = this.props;

    return children(this.state); //<UsersLoadingList usersData={usersData} />
  }
}

export default DataProvider;
