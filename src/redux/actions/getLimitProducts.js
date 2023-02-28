import { createAsyncThunk } from "@reduxjs/toolkit";

import { STORE_LIMIT_PRODUCTS } from "../actionTypes";

export const getLimitProducts = createAsyncThunk(
  STORE_LIMIT_PRODUCTS,
  async (requestParams, { dispatch }) => {
    const response = await fetch(
      "https://fakestoreapi.com/products?" + new URLSearchParams(requestParams)
    );
    const result = await response.json();

    dispatch(updateLimitProducts(result));
  }
);

export const updateLimitProducts = (data) => ({
  type: STORE_LIMIT_PRODUCTS,
  data,
});
