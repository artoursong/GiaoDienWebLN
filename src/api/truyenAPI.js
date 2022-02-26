import axios from "axios";
import { khachAPI } from "./index";

const bookService = {
  createBook: (bookData) => {
    return khachAPI.post(`book`, bookData);
  },
  getBook: () => {
    return khachAPI.get("book");
  },

  getBookById: (id) => {
    return khachAPI.get(`book/${id}`);
  },

  getCategoryById: (id) => {
    return khachAPI.get(`category/${id}`);
  },

  getCategoryByBookId: (id) => {
    return khachAPI.get(`chitietcategory/${id}`);
  },

  getUserByBookId: (id) => {
    return khachAPI.get(`book/getuser/${id}`);
  },

  getTop10: () => {
    return khachAPI.get(`book/gettop10`);
  },
  createChapter: (data) => {
    const { iD_Volume, name, text } = data;
    return khachAPI.post("/chapter", {
      iD_Volume,
      name,
      text,
    });
  },
  getChapter: (id) => {
    return khachAPI.get(`/chapter/${id}`);
  },
  editChapter: (data) => {
    return khachAPI.post("/");
  },
  createVolume: (data) => {
    return khachAPI.post("/volume", data);
  },
  getVolume: (id) => {
    return khachAPI.get(`volume/${id}`);
  },
  editVolume: (data) => {
    return khachAPI.post(`volume`, data);
  },
  getBooksByUserId: (id) => {
    return khachAPI.get(`book/bookofuser/${id}`);
  },
  getBookmark: (data) => {
    return khachAPI.post(`bookmark/getbookmark`, data);
  },
  createBookmark: (data) => {
    return khachAPI.post(`bookmark`, data);
  },
  deleteBookmark: (data) => {
    return khachAPI.post(`bookmark/deletebookmark`, data);
  },
  uploadImage: (file) => {
    return axios.post(
      `https://api.cloudinary.com/v1_1/dgtv15ojw/image/upload`,
      file
    );
  },
  deleteVolume: (id) => {
    return khachAPI.delete(`/volume/${id}`);
  },
  getComment: (data) => {
    return khachAPI.post(`comment/commentofbook`, data);
  },

  deleteChapter: (id) => {
    return khachAPI.delete(`chapter/${id}`);
  },
  deleteBook: (id) => {
    return khachAPI.delete(`book/${id}`);
  },
  postComment: (data) => {
    return khachAPI.post("comment", data);
  },
};

export default bookService;
