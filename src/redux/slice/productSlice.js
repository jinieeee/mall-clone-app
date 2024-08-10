import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  minPrice: null,
  maxPrice: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload.products;
    },

    GET_PRICE_RANGE(state, action) {
      const products = action.payload.products;
      const array = [];
      products.map((product) => {
        const price = product.price;
        return array.push(price);
      });

      const max = Math.max(...array);
      const min = Math.min(...array);

      state.maxPrice = max;
      state.minPrice = min;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

export const selectProducts = (state) => state.products;
export const selectMinPrice = (state) => state.minPrice;
export const selectMaxPrice = (state) => state.maxPrice;

export default productSlice.reducer;
