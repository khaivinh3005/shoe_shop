import { axiosClient } from "..";
const URL_ORDER = "/api/Users/order";
const productAPI = {
  getProduct: (keyword) => {
    return axiosClient({
      method: "get",
      url: "/api/Product",
      params: { keyword: keyword },
    });
  },

  order: () => axiosClient({ method: "POST" }),
  // viết tiếp các axios call api ở đây
};
export default productAPI;
