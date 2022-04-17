import { NavLink } from 'react-router-dom';

// NavLink - это 'прокачанный' Link, позволяющий стилить ссылки в зависимости, активны ли они
// Для этого style/className задают не объектом/строкой,
// а коллбеком, который принимает аргумент со свойством isActive, и возвращает объект/строку для стилей/класов
// style = { ({ isActive }) => объект инлайн-стилей }
// className = { ({ isActive }) => строка имен классов }

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'red' : 'blue',
});

const Header = () => (
  <header>
    <h1>Main Page</h1>
    <nav>
      <NavLink style={defineNavLinkStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='/partners'>
        Partners
      </NavLink>
      <NavLink style={defineNavLinkStyle} to='/about'>
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
