import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineUser, AiOutlineAliwangwang } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { useClickOutside } from "hooks/useClickOutside";

const HeaderUser = ({ authState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userRef = useRef(null);
  const location = useLocation();

  useClickOutside(userRef, () => {
    setIsOpen(false);
  });

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative" ref={userRef}>
      {authState.isAuth ? (
        <>
          <div
            className="grid cursor-pointer grid-cols-[40px_minmax(50px,_1fr)] items-center gap-4 overflow-hidden rounded-md bg-white bg-opacity-5 px-4 py-2 backdrop-blur-sm transition-all hover:bg-opacity-10"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
            </div>
            <h4 className="font-medium text-white">
              {authState.user.username}
            </h4>
          </div>
        </>
      ) : (
        <>
          <FiUser
            className="mx-2 cursor-pointer text-2xl text-white transition-all hover:text-blue-600"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </>
      )}

      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } absolute right-0 z-10 mt-2 min-w-max rounded-md bg-gray-800 transition-all duration-200`}
      >
        {authState.isAuth ? (
          <div>
            <div className="p-4">
              <div className="mb-2">
                <Link
                  to="/user/profile"
                  className="flex w-full justify-center rounded-md border border-indigo-600 py-2 px-4 text-center text-sm text-white transition-all hover:bg-indigo-600"
                >
                  <AiOutlineUser className="mr-2 text-lg" /> Trang cá nhân
                </Link>
              </div>
              <div>
                <button
                  className="flex w-full justify-center rounded-md border border-indigo-600 py-2 px-4 text-center text-sm text-white transition-all hover:bg-indigo-600"
                  onClick={logout}
                >
                  <IoExitOutline className="mr-2 text-lg" />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="mb-2">
              <Link
                to="/login"
                className="flex w-full justify-center rounded-md border border-blue-500 py-2 px-6 text-center text-sm transition-all hover:bg-blue-500 hover:text-white"
              >
                <AiOutlineAliwangwang className="mr-2 text-lg" /> Đăng nhập
              </Link>
            </div>
            <div>
              <Link
                className="flex w-full justify-center rounded-md border border-blue-500 py-2 px-6 text-center text-sm transition-all hover:bg-blue-500 hover:text-white"
                to="/dang-ky"
              >
                <AiOutlineUser className="mr-2 text-lg" />
                Đăng ký
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderUser;
