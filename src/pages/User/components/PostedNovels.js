import { useEffect, useState } from "react";
import bookService from "api/truyenAPI";
import { useAuth } from "context/authContext";
import LoadingSpinner from "components/LoadingSpinner";
import UserNovelCard from "components/UserNovelCard";
import SectionHeader from "components/Section/SectionHeader";

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
        <SectionHeader>Truyện đã đăng</SectionHeader>
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
      ) : null}
    </>
  );
};

export default UserNovels;
