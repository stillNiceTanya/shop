import { SET_MIN_FILTER_PRICE } from "../actionTypes";

const initialState = 0;

export const getMinFilterPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MIN_FILTER_PRICE: {
      return action.data;
    }
    default:
      return state;
  }
};
