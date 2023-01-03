import axios from "axios";
import { axiosClient } from "..";

const URL_USER_SIGNUP = "/api/Users/signup";
const URL_USER_SIGNIN = "/api/Users/signin";
const URL_USER_DETAIL = "/api/Users/getProfile";
const URL_USER_UPDATE = "/api/Users/updateProfile";
const URL_USER_UPDATE_PASS = "/api/Users/changePassword"
const URL_USER_ORDER = "/api/Users/order"

const userAPI = {
  signUp: ({ email, name, password, gender, phone }) => {
    return axiosClient.post(URL_USER_SIGNUP, {
      email,
      name,
      password,
      gender,
      phone,
    });
  },
  signIn: ({ email, password }) => {
    return axiosClient.post(URL_USER_SIGNIN, { email, password });
  },

  getUserDetail: () => {
    return axiosClient.post(URL_USER_DETAIL);
  },
  updateUser: ({ email, password, name, phone, gender }) => {
    return axiosClient.post(URL_USER_UPDATE, {
      email,
      password,
      name,
      phone,
      gender,
    });
  },
  changePassword: ({newPassword})=>{
    return axiosClient.post(URL_USER_UPDATE_PASS,{newPassword})
  },
  order: (orderDetail)=>{
    return axiosClient.post(URL_USER_ORDER,orderDetail)

  }
};
export default userAPI;
