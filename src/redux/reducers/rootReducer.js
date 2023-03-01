import { combineReducers } from "redux";

import { allProductsReducer } from "./allProducts";
import { filtersReducer } from "./filters";
import { categoryReducer } from "./category";
import { limitProductsReducer } from "./limitProducts";

const rootReducer = combineReducers({
  products: allProductsReducer,
  limitProducts: limitProductsReducer,
  category: categoryReducer,
  filters: filtersReducer,
});

export default rootReducer;
