import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import bookService from "api/truyenAPI";
import LoadingSpinner from "./LoadingSpinner";
import { useClickOutside } from "hooks/useClickOutside";

const HeaderCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.search]);

  return (
    <div className="relative z-50" ref={navRef}>
      <ul>
        <li className="relative">
          <span
            className="relative flex cursor-pointer items-center font-semibold text-gray-200 transition-all hover:text-yellow-500"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Danh mục truyện
            <RiArrowDownSLine
              className={`ml-2 text-lg transition-transform duration-200 ${
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
                  ? categories.map((category, index) => (
                      <Link
                        key={index}
                        className="hover:text-yellow-400"
                        to={`/loc-truyen?category=${category.name}`}
                      >
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
