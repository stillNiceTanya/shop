import { STORE_LIMIT_PRODUCTS } from "../actionTypes";

const initialState = [];

export const updateCategoriesFilter = (data) => ({
  type: STORE_LIMIT_PRODUCTS,
  data,
});

export const limitProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_LIMIT_PRODUCTS: {
      return [...action.data];
    }

    default:
      return state;
  }
};
