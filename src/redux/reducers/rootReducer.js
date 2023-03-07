import { combineReducers } from "redux";

import { allProductsReducer } from "./allProducts";
import { filtersReducer } from "./filters";
import { productsCategoriesReducer } from "./productsCategories";
import { limitProductsReducer } from "./limitProducts";

const rootReducer = combineReducers({
  products: allProductsReducer,
  limitProducts: limitProductsReducer,
  allCategories: productsCategoriesReducer,
  filters: filtersReducer,
});

export default rootReducer;
