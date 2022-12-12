import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import productReducer from "redux/reducers/productReducer";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    productReducer,
  },
});
