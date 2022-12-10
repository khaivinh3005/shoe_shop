import { axiosClient } from "..";

  const productAPI = {
  getProduct: (keyword) => {
    return axiosClient({
      method: "get",
      url: "/api/Product",
      params: { keyword: keyword },
    });
  },
};
export default productAPI