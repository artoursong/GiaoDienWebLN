import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "components/Container";
import bookService from "api/truyenAPI";

const AdminBookManager = () => {
  const [newBook, setNewBook] = useState([]);

  useEffect(() => {
    const fetchNewBook = async () => {
      const response = await bookService.getNewBooks();

      if (response.status === 200) {
        setNewBook(response.data);
      }
    };

    fetchNewBook();
  }, []);

  return (
    <div>
      <Container size="max-w-[1000px]">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full table-fixed">
                  <thead className="bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="w-[40%] py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Tên truyện
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Lượt thích
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                      >
                        Tình trạng
                      </th>

                      <th scope="col" className="relative py-3 px-6">
                        <span className="sr-only">Thao tác</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newBook.length > 0
                      ? newBook.map((book) => (
                          <tr
                            key={book.iD_Book}
                            className="border-b border-gray-700 bg-gray-800"
                          >
                            <td className="whitespace-nowrap py-4 px-6 text-sm font-medium  text-white">
                              <Link
                                to={`/chi-tiet/${book.iD_Book}`}
                                classNameName="font-medium text-light-gray"
                              >
                                {book.name}
                              </Link>
                            </td>
                            <td className="whitespace-nowrap py-4 px-6 text-sm  text-gray-400">
                              {book.follow_sum}
                            </td>
                            <td className="whitespace-nowrap py-4 px-6 text-sm  text-gray-400">
                              <span
                                classNameName={`inline-flex rounded-full border border-current bg-opacity-30 py-[2px] px-2 text-xs font-semibold leading-5 ${
                                  book.tinh_trang
                                    ? "bg-green-100 text-green-500"
                                    : "bg-yellow-200 text-yellow-500"
                                }`}
                              >
                                {book.tinh_trang
                                  ? "Chưa hoàn thành"
                                  : "Đã hoàn thành"}
                              </span>
                            </td>
                            <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                              <Link
                                to={`/manage/${book.iD_Book}`}
                                className="mr-4 text-indigo-400 hover:text-indigo-500 hover:underline"
                              >
                                Sửa
                              </Link>
                              <button className="text-indigo-400 hover:text-indigo-500 hover:underline">
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminBookManager;
