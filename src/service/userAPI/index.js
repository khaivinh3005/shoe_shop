import { axiosClient } from "..";

const URL_USER_SIGNUP = "/api/Users/signup";
const URL_USER_SIGNIN = "/api/Users/signin";
const URL_USER_DETAIL = "/api/Users/getProfile";

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
  // axiosClient({
  //   method: "post",
  //   url: URL_USER_SIGNUP,
  //   params: {
  //     email: email,
  //     password: password,
  //     name: name,
  //     gender: gender,
  //     phone: phone,
  //   },
  // });
  // viết tiếp các axios call api ở đây
};
export default userAPI;
