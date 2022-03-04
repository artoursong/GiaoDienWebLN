import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionDivider from "components/Section/SectionDivider";
import Container from "components/Container";
import bookService from "api/truyenAPI";

const QuanLyTruyen = () => {
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
      <SectionDivider>
        <Container size="max-w-[1000px]">
          <div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            User
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Lượt thích
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Tình trạng
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {newBook.length > 0 ? (
                          <>
                            {newBook.map((book) => (
                              <tr key={book.iD_Book}>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <div className="grid grid-cols-[100px_minmax(50px,_1fr)] items-center gap-2">
                                    <div className="overflow-hidden rounded-md">
                                      <img src={book.image} alt={book.name} />
                                    </div>
                                    <Link
                                      to={`/detail/${book.iD_Book}`}
                                      className="font-medium text-gray-700 hover:text-blue-600"
                                    >
                                      {book.name}
                                    </Link>
                                  </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 ">
                                  <p className="text-sm text-gray-900 ">
                                    {book.follow_sum}
                                  </p>
                                </td>

                                <td className="whitespace-nowrap px-6 py-4">
                                  <span
                                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5  ${
                                      book.tinh_trang
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-200 text-yellow-600"
                                    }`}
                                  >
                                    {book.tinh_trang
                                      ? "Chưa hoàn thành"
                                      : "Đã hoàn thành"}
                                  </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                  <button className="rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-700 hover:text-indigo-900">
                                    Xóa truyện
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default QuanLyTruyen;
