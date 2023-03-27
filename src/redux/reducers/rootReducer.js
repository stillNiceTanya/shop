import { combineReducers } from 'redux';

import { allProductsReducer } from './allProducts';
import { filtersReducer } from './filters';
import { productsCategoriesReducer } from './productsCategories';
import { limitProductsReducer } from './limitProducts';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  products: allProductsReducer,
  limitProducts: limitProductsReducer,
  allCategories: productsCategoriesReducer,
  filters: filtersReducer,
  cart: cartReducer,
});

export default rootReducer;
