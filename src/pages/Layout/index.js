import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

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

export default Layout;
