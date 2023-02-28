import { SET_FILTER } from "../actionTypes";

const initialState = {};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};
