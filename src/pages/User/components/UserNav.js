import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const UserNav = () => {
  const location = useLocation();

  return (
    <>
      <NavLink
        to="profile"
        className={(link) =>
          `${
            !link.isActive ? "text-[hsl(210deg,14%,66%)]" : "text-white"
          } flex items-center gap-4 text-left transition-all`
        }
      >
        <div
          className={`rounded-full ${
            location.pathname.includes("profile")
              ? "bg-indigo-500 text-white"
              : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
          } h-[12px] w-[12px]`}
        ></div>
        Thông tin cá nhân
      </NavLink>
      <NavLink
        to="password"
        className={(link) =>
          `${
            !link.isActive ? "text-[hsl(210deg,14%,66%)]" : "text-white"
          } flex items-center gap-4 text-left transition-all`
        }
      >
        <div
          className={`rounded-full ${
            location.pathname.includes("password")
              ? "bg-indigo-500 text-white"
              : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
          } h-[12px] w-[12px]`}
        ></div>
        Đổi mật khẩu
      </NavLink>
      <NavLink
        to="/manage"
        className={(link) =>
          `${
            !link.isActive ? "text-[hsl(210deg,14%,66%)]" : " text-white"
          } flex items-center gap-4 text-left transition-all`
        }
      >
        <div
          className={`rounded-full ${
            location.pathname.includes("novels")
              ? "bg-indigo-500 text-white"
              : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
          } h-[12px] w-[12px]`}
        ></div>
        Quản lý truyện
      </NavLink>
      <NavLink
        to="kesach"
        className={(link) =>
          `${
            !link.isActive ? "text-[hsl(210deg,14%,66%)]" : "text-white"
          } flex items-center gap-4 text-left transition-all`
        }
      >
        <div
          className={`rounded-full ${
            location.pathname.includes("kesach")
              ? "bg-indigo-500 text-white"
              : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
          } h-[12px] w-[12px]`}
        ></div>
        Kệ sách
      </NavLink>
      <NavLink
        to="bookmark"
        className={(link) =>
          `${
            !link.isActive ? "text-[hsl(210deg,14%,66%)]" : "text-white"
          } flex items-center gap-4 text-left transition-all`
        }
      >
        <div
          className={`rounded-full ${
            location.pathname.includes("bookmark")
              ? "bg-indigo-500 text-white"
              : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
          } h-[12px] w-[12px]`}
        ></div>
        Bookmark
      </NavLink>
    </>
  );
};

export default UserNav;
