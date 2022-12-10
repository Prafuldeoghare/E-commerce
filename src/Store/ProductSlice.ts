import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  allCategories: [],
};

const ProductSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    setAllCategories: (state, payload) => {
      state.allCategories = payload?.payload;
    },
    setAllProducts: (state, payload) => {
      state.allProducts = payload?.payload;
    },
  },
});

export const { setAllProducts, setAllCategories } = ProductSlice.actions;
export const selector = (state: { productReducer: any }) =>
  state?.productReducer;
export default ProductSlice.reducer;
