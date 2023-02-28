import { combineReducers } from "redux";

import { allProductsReducer } from "./allProducts";
import { filtersReducer } from "./filters";
import { categoryReducer } from "./category";
import { limitProductsReducer } from "./limitProducts";
import { getMinFilterPriceReducer } from "./minFilterPrice";
import { boolensReducer } from "./boolens";

const rootReducer = combineReducers({
  products: allProductsReducer,
  limitProducts: limitProductsReducer,
  category: categoryReducer,
  filters: filtersReducer,
  minFilterPrice: getMinFilterPriceReducer,
  boolens: boolensReducer,
});

export default rootReducer;
