//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import productAPI from "../../service/productAPI";

const initialState = {
  arrProduct: [],
  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    feature: false,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: ["36", "37", "38", "39", "40", "41", "42"],
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    categories: [
      {
        id: "ADIDAS",
        category: "ADIDAS",
      },
      {
        id: "MEN",
        category: "MEN",
      },
      {
        id: "WOMEN",
        category: "WOMEN",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        feature: false,
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        feature: false,
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        feature: false,
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
      },
    ],
  },
  addToCart: [],
};

const productReducer = createSlice({
  name: "productReducer", //tên reducer
  initialState, //giá trị state mặc định
  reducers: {
    getAllProduct: (state, action) => {
      state.arrProduct = action.payload;
    },
    getDetailProductAction: (state, action) => {
      state.productDetail = action.payload;
    },
    addToCartAction: (state, action) => {
      const indexItem = state?.addToCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem !== -1) {
        state.addToCart[indexItem].quantityOrderd +=
          action.payload.quantityOrderd;
      } else {
        state.addToCart.push(action.payload);
      }
    },
    addProductItem: (state, action) => {
      const indexItem = state?.addToCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem !== -1) {
        state.addToCart[indexItem].quantityOrderd += 1;
      }
    },
    removeProductItem: (state, action) => {
      const indexItem = state?.addToCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem !== -1) {
        if (state.addToCart[indexItem].quantityOrderd > 0) {
          state.addToCart[indexItem].quantityOrderd -= 1;
        }
      }
    },

    clearCart: (state, action) => {
      state.addToCart = [];
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

export const {
  getAllProduct,
  getDetailProductAction,
  addToCartAction,
  addProductItem,
  removeProductItem,
  clearCart
} = productReducer.actions;

export default productReducer.reducer;

export const getDetailProductApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    const action = getDetailProductAction(result.data.content);
    dispatch(action);
  };
};
