import { STORE_PRODUCT_TO_CART, UPDATE_PRODUCT_IN_CART } from '../actionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCT_TO_CART: {
      return [...state, action.data];
    }

    case UPDATE_PRODUCT_IN_CART: {
      const { id, quantity, price, name } = action.data;
      return state.map((product) => {
        if (product.id === id) {
          console.log('updating');
          return {
            ...product,
            name,
            price,
            quantity,
          };
        }
        return product;
      });
    }

    default:
      return state;
  }
};
