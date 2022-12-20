import axios from "axios";
import { BASE_URL } from "../common/const";
import { history } from "../App";
import reactLocalStorage from "utils/reactLocalStorage";
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // time ko nhận được request sẽ hủy
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = reactLocalStorage.get("shoeToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.content;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // CATCH ERROR 400 & 404
    if (error.response?.status === 400 || error.response?.status === 404) {
      alert("Tham số truyền vào không hợp lệ");
      // history.push("/")
    }

    return Promise.reject(error);
  }
);
