import React from "react";
import { NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <NavLink
        to="profile"
        className={(link) =>
          `${
            !link.isActive
              ? "border-gray-400 text-[#cbdff3]"
              : "border-transparent bg-blue-500 text-white"
          } rounded-md  border py-2 text-center transition-all`
        }
      >
        Thông tin cá nhân
      </NavLink>
      <NavLink
        to="password"
        className={(link) =>
          `${
            !link.isActive
              ? "border-gray-400 text-[#cbdff3]"
              : "border-transparent bg-blue-500 text-white"
          } rounded-md  border py-2 text-center transition-all`
        }
      >
        Đổi mật khẩu
      </NavLink>
      <NavLink
        to="novels"
        className={(link) =>
          `${
            !link.isActive
              ? "border-gray-400 text-[#cbdff3]"
              : "border-transparent bg-blue-500 text-white"
          } rounded-md  border py-2 text-center transition-all`
        }
      >
        Truyện đã đăng
      </NavLink>
    </>
  );
};

export default UserNav;
