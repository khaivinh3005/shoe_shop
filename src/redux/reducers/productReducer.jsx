//rxslice
import { createSlice } from "@reduxjs/toolkit";
import productAPI from "../../service/productAPI";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer", //tên reducer
  initialState, //giá trị state mặc định
  reducers: {
    getAllProduct: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
});

// action thunk call api get data then dispatch data cho reducer
export const getAllProductAPI = () => {
  return async (dispatch) => {
    //productAPI là object trỏ để lấy các function call api
    const result = await productAPI.getProduct();
    const action = result;
    dispatch(getAllProduct(action));
  };
};

export const { getAllProduct } = productReducer.actions;

export default productReducer.reducer;
