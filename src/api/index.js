import axios from 'axios';

const defaultInstance = {
    baseURL: 'https://localhost:5001'
}

const khachAPI = axios.create(defaultInstance);
const thanhvienAPI = axios.create(defaultInstance);

// thanhvienAPI.interceptors.request.use(
//     request => {
//       if (localStorage.getItem('accessToken')) {
//         request.headers['Authorization'] = `Bearer ${localStorage.getItem(
//           'accessToken'
//         )}`;
//       } else {
//         throw new Error('Unauthorized!');
//       }
//       return request;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );

export { khachAPI, thanhvienAPI}