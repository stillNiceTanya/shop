import { UPDATE_PRODUCT_IN_CART } from '../actionTypes';

export const updateCart = (data) => ({
  type: UPDATE_PRODUCT_IN_CART,
  data,
});
