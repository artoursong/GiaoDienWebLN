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
};

export { authService };
