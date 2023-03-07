import { STORE_LIMIT_PRODUCTS } from "../actionTypes";

const initialState = { isLoaded: false, data: [] };

export const updateCategoriesFilter = (data) => ({
  type: STORE_LIMIT_PRODUCTS,
  data,
});

export const limitProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_LIMIT_PRODUCTS: {
      return {
        ...state,
        isLoaded: true,
        data: [...action.data],
      };
    }

    default:
      return state;
  }
};
