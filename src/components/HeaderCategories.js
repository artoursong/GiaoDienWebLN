import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import bookService from "api/truyenAPI";
import LoadingSpinner from "./LoadingSpinner";
import { useClickOutside } from "hooks/useClickOutside";

const HeaderCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navRef = useRef();
  useClickOutside(navRef, () => {
    setIsOpen(false);
  });
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await bookService.getCategory();

      if (response.status === 200) {
        setCategories(response.data);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="relative z-50" ref={navRef}>
      <ul>
        <li className="relative">
          <span
            className="relative flex cursor-pointer items-center font-semibold text-gray-200 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:text-gray-300 hover:after:w-full"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Danh mục truyện
            <RiArrowDownSLine
              className={`ml-2 text-lg transition-all duration-200 ${
                isOpen ? "rotate-180" : null
              }`}
            />
          </span>

          <div
            className={`absolute mt-5 min-w-max rounded-md bg-white bg-opacity-5 p-5 text-light-gray backdrop-blur-md transition-all duration-200 ${
              isOpen ? "visible opacity-100" : "invisible opacity-0"
            } `}
          >
            {isLoading ? (
              <LoadingSpinner size={8} />
            ) : (
              <div className="grid grid-cols-3 gap-5">
                {categories.length > 0
                  ? categories.map((category) => (
                      <Link className="hover:text-white" to="/">
                        {category.name}
                      </Link>
                    ))
                  : null}
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCategories;
