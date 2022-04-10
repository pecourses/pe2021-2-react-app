import React from 'react';

const ListItem = props => {
  const { children } = props;
  return <div>{children}</div>;
};

// const App = () => <ListItem title='title' children='I am Grut' />;

// реализовать NamedList: именованный список с заголовком из name
// и содержимым списка из контента NamedList

const NamedList = props => {
  const { name, children } = props;
  return (
    <div>
      <h2>{name}</h2>
      <ul>{children}</ul>
    </div>
  );
};

const App = () => (
  <NamedList name='Odd numbers'>
    <li>1</li>
    <li>3</li>
    <li>5</li>
  </NamedList>
);

// const App = () => <ListItem title='title'>I am Grut</ListItem>;
// React.createElement(ListItem, { title: 'title' }, 'I am Grut');

export default App;
