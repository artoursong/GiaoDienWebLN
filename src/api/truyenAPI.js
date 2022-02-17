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
};

export default bookService;
