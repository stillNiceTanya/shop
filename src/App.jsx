import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<ErrorPage />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/error-page"
          element={<ErrorPage />}
        />
        <Route
          path="/product/:id"
          element={<Product />}
        />
      </Routes>
    </>
  );
};

export default App;
