import React from "react";
import { useEffect, useState } from "react";
import bookService from "api/truyenAPI";
import { useAuth } from "context/authContext";
import LoadingSpinner from "components/LoadingSpinner";
import { Link } from "react-router-dom";

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [authState] = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchBookTable = async () => {
      const response = await bookService.getKeSach(authState.user.iD_User);

      if (response.status === 200) {
        setBooks(response.data);
      }
      setIsLoading(false);
    };

    fetchBookTable();
  }, [authState.user.iD_User]);

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-5 text-2xl font-bold text-white">Kệ sách</h2>
      </div>
      {isLoading ? (
        <LoadingSpinner size={8} />
      ) : (
        <>
          {books.length ? (
            <>
              {" "}
              <div className="flex flex-col">
                <div className="overflow-hidden shadow sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="border-b border-gray-300">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 text-left text-lg font-medium tracking-wider text-light-gray"
                        >
                          Tên truyện
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium tracking-wider text-light-gray"
                        >
                          Mới nhất
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {books.map((book) => (
                        <tr key={book.iD_Book}>
                          <td className="grid grid-cols-[120px_minmax(50px,_1fr)] items-center gap-5 whitespace-nowrap py-4">
                            <div className="overflow-hidden rounded-md">
                              <img
                                src={book.image}
                                alt={book.name}
                                className="object-cover"
                              />
                            </div>
                            <Link
                              to={`/chi-tiet/${book.iD_Book}`}
                              className="text-xl font-medium text-light-gray hover:text-indigo-500"
                            >
                              {book.name}
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="mb-2 text-light-gray">
                              {book.newvolume}
                            </div>
                            <div className="text-sm text-gray-400">
                              {book.newchapter}
                            </div>
                          </td>

                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>{" "}
            </>
          ) : (
            <p className="text-light-gray">
              Kệ sách trống. Ấn <span className="text-pink-500">thích</span> vào
              bộ truyện bạn muốn để thêm truyện vào kệ.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default BookTable;
