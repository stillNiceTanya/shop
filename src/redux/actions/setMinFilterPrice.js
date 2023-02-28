import { createAsyncThunk } from "@reduxjs/toolkit";

import { SET_MIN_FILTER_PRICE } from "../actionTypes";

export const setMinFilterPrice = (data) => ({
  type: SET_MIN_FILTER_PRICE,
  data,
});
