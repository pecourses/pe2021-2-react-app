import { Link, Route, Routes } from 'react-router-dom';

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

export default Partners;
