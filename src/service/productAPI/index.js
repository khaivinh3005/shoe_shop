import { axiosClient } from "..";

  const productAPI = {
  getProduct: (keyword) => {
    return axiosClient({
      method: "get",
      url: "/api/Product",
      params: { keyword: keyword },
    });
  },
  // viết tiếp các axios call api ở đây
};
export default productAPI