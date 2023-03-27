import { ADD_PRODUCT_TO_CART, UPDATE_PRODUCT_IN_CART } from '../actionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return [...state, action.data];
    }

    case UPDATE_PRODUCT_IN_CART: {
      const { id, quantity } = action.data;
      return state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        return product;
      });
    }

    default:
      return state;
  }
};
