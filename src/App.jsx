import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';
import UserAccount from './pages/UserAccount';
import './fonts/defaultFont.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
};

export default App;
