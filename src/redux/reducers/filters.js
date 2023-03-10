import { SET_FILTER, RESET_FILTERS } from '../actionTypes';

const initialState = {};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        ...action.data,
      };
    }
    case RESET_FILTERS: {
      return {};
    }

    default:
      return state;
  }
};
