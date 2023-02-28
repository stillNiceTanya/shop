import { createAsyncThunk } from "@reduxjs/toolkit";

import { STORE_ALL_PRODUCTS, GET_PRODUCTS } from "../actionTypes";

export const updateProducts = (data) => ({
  type: STORE_ALL_PRODUCTS,
  data,
});

export const getProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (requestParams, { dispatch }) => {
    const response = await fetch(
      "https://fakestoreapi.com/products/" + new URLSearchParams(requestParams)
    );
    const result = await response.json();

    dispatch(updateProducts(result));
  }
);
