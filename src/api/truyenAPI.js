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
};

export default bookService;
