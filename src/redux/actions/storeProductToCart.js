import { STORE_PRODUCT_TO_CART } from '../actionTypes';

export const addToCart = (data) => ({
  type: STORE_PRODUCT_TO_CART,
  data,
});
