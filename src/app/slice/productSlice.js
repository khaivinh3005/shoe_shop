import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "../../service/productAPI";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (params = "", thunkAPI) => {
    try {
      const response = await productAPI.getProduct(params);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
