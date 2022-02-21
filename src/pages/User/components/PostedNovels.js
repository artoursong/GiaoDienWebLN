import { useEffect, useState } from "react";
import bookService from "api/truyenAPI";
import { useAuth } from "context/authContext";
import LoadingSpinner from "components/LoadingSpinner";
import UserNovelCard from "components/UserNovelCard";

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

  return (
    <div>
      {isLoading ? (
        <div className="h-8 w-8">
          <LoadingSpinner size={8} />
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {books.map((book) => (
            <UserNovelCard book={book} key={book.iD_Book} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserNovels;
