import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product';
import './fonts/defaultFont.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
