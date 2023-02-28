import { STORE_ALL_PRODUCTS } from "../actionTypes";

const initialState = [];

export const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ALL_PRODUCTS: {
      return [...action.data];
    }

    default:
      return state;
  }
};
