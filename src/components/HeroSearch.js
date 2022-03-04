import { FiSearch } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bookService from "api/truyenAPI";
import LoadingSpinner from "./LoadingSpinner";
import { useClickOutside } from "hooks/useClickOutside";

const Banner = () => {
  const [input, setInput] = useState("");
  const timeRef = useRef();
  const inputRef = useRef();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(inputRef, () => setIsOpen(false));

  useEffect(() => {
    setIsLoading(true);
    if (input) {
      timeRef.current = setTimeout(async () => {
        const response = await bookService.searchBookByKeyword(input);

        if (response.status === 200) {
          setBooks(response.data);
        }
        setIsLoading(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeRef.current);
    };
  }, [input]);

  return (
    <div className="relative flex min-h-[400px] w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-5xl font-bold text-[#cbdff3]">
        Welcome to Light Novel's World
      </h1>
      <div
        className="w-full max-w-[650px] rounded-md bg-white bg-opacity-5 backdrop-blur-md"
        ref={inputRef}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="flex items-center justify-between py-3 px-4">
          <input
            type="text"
            className="w-full border-none bg-transparent text-[#cbdff3] outline-none"
            placeholder="Gõ từ khóa để tìm truyện"
            name="search"
            id="search"
            autoComplete="off"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <label htmlFor="search">
            <FiSearch className="relative ml-4 cursor-pointer text-xl text-[#cbdff3]" />
          </label>
        </div>
        {isOpen ? (
          <>
            {input.trim() !== "" ? (
              <div className="absolute mt-2 max-h-[300px] w-full overflow-auto rounded-md bg-white bg-opacity-5 py-3 px-4 backdrop-blur-md">
                {isLoading ? (
                  <LoadingSpinner size={8} />
                ) : (
                  <>
                    {books.length > 0 ? (
                      books.map((book) => (
                        <Link
                          to={`/detail/${book.iD_Book}`}
                          className="group grid grid-cols-[100px_minmax(100px,_1fr)] items-center gap-5"
                          key={book.iD_Book}
                        >
                          <div className="overflow-hidden rounded-md">
                            <img src={book.image} alt={book.name} />
                          </div>
                          <h3 className="text-lg font-semibold text-light-gray group-hover:text-gray-50">
                            {book.name}
                          </h3>
                        </Link>
                      ))
                    ) : (
                      <h3 className="font-medium text-light-gray">
                        Không tìm thấy kết quả nào với từ khóa{" "}
                        <span className="italic text-blue-500">{input}</span>{" "}
                      </h3>
                    )}
                  </>
                )}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
