import { khachAPI } from './index';

const authService = {
  login: userData => {
    return khachAPI.post('user/login', userData);
  },
  verify: () => {
    return khachAPI.post('user/decodetoken', {
      tokenstring: localStorage.getItem('token'),
    });
  },
};

export { authService };
