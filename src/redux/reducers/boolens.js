import { SET_BOOLEN } from "../actionTypes";

const initialState = {};

export const boolensReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOLEN: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};
