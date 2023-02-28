import { createAsyncThunk } from "@reduxjs/toolkit";

import { GET_CATEGORY, STORE_PRODUCTS_CATEGORY } from "../actionTypes";

const updateCategory = (data) => ({
  type: STORE_PRODUCTS_CATEGORY,
  data,
});

export const getProductsCategories = createAsyncThunk(
  GET_CATEGORY,
  async (requestParams, { dispatch }) => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories" +
        new URLSearchParams(requestParams)
    );
    const result = await response.json();

    dispatch(updateCategory(result));
  }
);

export default getProductsCategories;
