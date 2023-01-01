import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userSlice from "./user/";
const store = configureStore({
  reducer: {
    productReducer,
    userSlice,
  },
});

export default store;
