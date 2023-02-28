import { STORE_PRODUCTS_CATEGORY } from "../actionTypes";

const initialState = [];

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CATEGORY: {
      return [...action.data];
    }

    default:
      return state;
  }
};
