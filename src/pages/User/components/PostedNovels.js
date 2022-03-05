import { useEffect, useState } from "react";
import bookService from "api/truyenAPI";
import { useAuth } from "context/authContext";
import LoadingSpinner from "components/LoadingSpinner";
import UserNovelCard from "components/UserNovelCard";
import { Link } from "react-router-dom";

const UserNovels = () => {
  const [authState] = useAuth();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchBooks = async (id) => {
      const response = await bookService.getBooksByUserId(id);

      if (response.status === 200) {
        setBooks(response.data);
      }

      setIsLoading(false);
    };
    if (authState.user) {
      fetchBooks(authState.user.iD_User);
    }
  }, [authState.user]);

  const handleDeleteBook = async (id) => {
    const response = await bookService.deleteBook(id);
    if (response.status === 200 && response.data) {
      setBooks((prev) => prev.filter((book) => book.iD_Book !== id));
    }
  };

  return (
    <>
      <div className="mb-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Truyện đã đăng</h2>
          <Link
            to="/manage/create"
            className="rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-600 disabled:pointer-events-none disabled:opacity-60"
          >
            Đăng truyện mới
          </Link>
        </div>
      </div>
      {isLoading ? (
        <div className="h-8 w-8">
          <LoadingSpinner size={8} />
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {books.map((book) => (
            <UserNovelCard
              book={book}
              key={book.iD_Book}
              deleteBook={handleDeleteBook}
            />
          ))}
        </div>
      ) : (
        <p className="text-light-gray">
          Bạn chưa đăng truyện nào. Đăng truyện tại{" "}
          <span className="cursor-pointer text-indigo-400 hover:underline">
            đây
          </span>
        </p>
      )}
    </>
  );
};

export default UserNovels;
