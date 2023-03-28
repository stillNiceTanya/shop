import {
  ADD_PRODUCT_TO_CART,
  UPDATE_PRODUCT_IN_CART,
  SET_INITIAL_CART,
} from '../actionTypes';

const initialState = { isAdded: false, data: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        data: [...state.data, action.data],
        isAdded: true,
      };
    }

    case UPDATE_PRODUCT_IN_CART: {
      const { id, quantity } = action.data;
      const productIndex = state.data.findIndex((product) => product.id === id);

      if (productIndex !== -1) {
        const updatedProduct = {
          ...state.data[productIndex],
          quantity: state.data[productIndex].quantity + quantity,
        };
        const newData = [...state.data];
        newData[productIndex] = updatedProduct;
        return {
          ...state,
          data: newData,
          isAdded: true,
        };
      }
      return state;
    }

    case SET_INITIAL_CART: {
      if (Array.isArray(action.data)) {
        return {
          data: [...action.data],
          isAdded: true,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
