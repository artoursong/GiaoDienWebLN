import axios from "axios";

const defaultInstance = {
  baseURL: "https://demo-web-novel.herokuapp.com",
};

const khachAPI = axios.create(defaultInstance);
const thanhvienAPI = axios.create(defaultInstance);

export { khachAPI, thanhvienAPI };
