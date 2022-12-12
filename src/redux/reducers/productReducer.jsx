//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct: [
        {id: 1, name: 'product1', image: './../../img/shoes.png', price: 1000},
        {id: 2, name: 'product2', image: './../../img/shoes.png', price: 2000},
        {id: 3, name: 'product3', image: './../../img/shoes.png', price: 3000},
  ]
}

const productReducer = createSlice({
  name: 'productReducer', //tên reducer
  initialState, //giá trị state mặc định
  reducers: {
    getAllProductApi: (state, action) => {
        state.arrProduct = action.payload
    }
  }
});

export const {getAllProductApi} = productReducer.actions

export default productReducer.reducer