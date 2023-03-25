import { ADD_PRODUCT_TO_CART, UPDATE_PRODUCT_IN_CART } from '../actionTypes';

export const updateCart = (data) => ({
  type: UPDATE_PRODUCT_IN_CART,
  data,
});

export const addToCart = (data) => ({
  type: ADD_PRODUCT_TO_CART,
  data,
});
