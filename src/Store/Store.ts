import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./ProductSlice";
import ViewReducer from "./ViewSlice";

export const store = configureStore({
  reducer: {
    productReducer: ProductSliceReducer,
    viewReducer: ViewReducer,
  },
});
