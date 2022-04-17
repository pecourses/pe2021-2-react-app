// SPA
// SSR / CSR

import { useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

const HomePage = () => (
  <main>
    <h2>HomePage</h2>
  </main>
);

const AboutPage = () => (
  <main>
    <h2>AboutPage</h2>
  </main>
);

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <main>
      <h2>The page not found</h2>
      <Link to='/'>Home</Link>
    </main>
  );
};

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

const Layout = () => {
  return (
    <div>
      <Header />
      {/* Втраивание различающегося контента */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

const Partners = () => (
  <main>
    <h2>Partners</h2>
    <Link to='partner1'>Partner1</Link>
    <Link to='partner2'>Partner2</Link>
    <Routes>
      <Route path='partner1' element={<div>Partner1 page</div>} />
      <Route path='partner2' element={<div>Partner2 page</div>} />
    </Routes>
  </main>
);

// Add ContactsPage
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='partners/*' element={<Partners />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
