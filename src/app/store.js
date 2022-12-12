import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productSlice from "./slice/productSlice";
import modalSlice from "./slice/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productSlice,
    modalSlice,
  },
});
