import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionHeader from "components/Section/SectionHeader";
import { useAuth } from "context/authContext";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";

const BookmarkTable = () => {
  const [authState] = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchBookmarkList = async () => {
      const response = await bookService.getBookmarkList(
        authState.user.iD_User
      );

      if (response.status === 200) {
        setBookmarks(response.data);
      }
      setIsLoading(false);
    };

    fetchBookmarkList();
  }, [authState.user.iD_User]);

  return (
    <div>
      <div className="mb-5">
        <SectionHeader>Bookmark</SectionHeader>
      </div>
      {isLoading ? (
        <LoadingSpinner size={8} />
      ) : (
        <>
          {bookmarks.length > 0
            ? bookmarks.map((book) => (
                <div key={book.iD_Book}>
                  <div className="mb-5">
                    <h3 className="mb-4 rounded-md bg-gray-100 bg-opacity-10 py-2 px-4 text-xl text-[#c9e1f8]">
                      {book.name}
                    </h3>
                    <div className="grid grid-cols-[100px_minmax(200px,_1fr)] gap-5">
                      <div className="w-full overflow-hidden rounded-md">
                        <img
                          src={book.image}
                          alt={book.name}
                          className="w-full"
                        />
                      </div>
                      {book.listchap.length > 0 ? (
                        <ul className="max-h-[200px] w-full overflow-auto pr-1">
                          {book.listchap.map((chapter) => (
                            <li
                              className="mb-2 flex w-full cursor-pointer justify-between rounded-md py-1 px-2 transition-all last:mb-0 even:bg-gray-50 even:bg-opacity-10 odd:hover:bg-gray-50 odd:hover:bg-opacity-20 even:hover:bg-opacity-20"
                              key={chapter.id}
                            >
                              <Link
                                to={`/truyen/${chapter.id}`}
                                className="text-[#c9e1f8]"
                              >
                                {chapter.name}
                              </Link>
                              <span className="text-[#c9e1f8]">
                                {new Intl.DateTimeFormat(["ban", "id"]).format(
                                  new Date(chapter.create_date)
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="my-5 inline-block h-[2px] w-[200px] bg-gray-50"></div>
                  </div>
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default BookmarkTable;
