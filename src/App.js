import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Partners from './pages/PartnersPage';

// SPA single page application
// CSR - client-side rendering (альтернативы SSR - server-side rendering, смешанный вариант)

// 1 Link меняет location
// 2 BrowserRouter подписан на изменения location
// 3 BrowserRouter в Routes ищет Route с path, как в location ( т.е.как to у выбранного Link) и
// 4 выводит компонент из пропа element

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

// Без Outlet
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='about' element={<AboutPage />} />
//         <Route path='partners/*' element={<Partners />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </>
//   );
// };

export default App;
