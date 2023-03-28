import {
  ADD_PRODUCT_TO_CART,
  UPDATE_PRODUCT_IN_CART,
  SET_INITIAL_CART,
} from '../actionTypes';

const initialState = { isLoaded: false, data: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        data: [...state.data, action.data],
      };
    }

    case UPDATE_PRODUCT_IN_CART: {
      const { id, quantity } = action.data;
      const newData = state.data.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        return product;
      });
      return {
        ...state,
        data: newData,
      };
    }

    case SET_INITIAL_CART: {
      if (Array.isArray(action.data)) {
        return {
          data: [...action.data],
          isLoaded: true,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
