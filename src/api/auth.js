import { khachAPI } from "./index";

const authService = {
  login: (userData) => {
    return khachAPI.post("user/login", userData);
  },
  verify: () => {
    return khachAPI.post("user/decodetoken", {
      tokenstring: localStorage.getItem("token"),
    });
  },

  changeinfo: (userData, id) => {
    return khachAPI.put(`user/${id}`, userData);
  },

  createbook: (bookData) => {
    return khachAPI.post(`book`, bookData);
  },
  changePassword: (data) => {
    return khachAPI.put("user/changepass", data);
  },
  register: (data) => {
    return khachAPI.post("user", data);
  },
};

export { authService };
