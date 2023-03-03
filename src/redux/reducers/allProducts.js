import { STORE_ALL_PRODUCTS } from "../actionTypes";

const initialState = { isLoaded: false, data: [] };

export const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ALL_PRODUCTS: {
      return {
        ...state,
        data: [...action.data],
        isLoaded: true,
      };
    }

    default:
      return state;
  }
};
