import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const QuanLyUser = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-5 pt-10">
        <NavLink
          className={(link) =>
            `${
              link.isActive
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:text-blue-700"
            } rounded-md px-4 py-2 font-medium `
          }
          to="reports"
        >
          User bị tố cáo
        </NavLink>
        <NavLink
          className={(link) =>
            `${
              link.isActive
                ? "bg-blue-600 text-white "
                : "text-blue-600 hover:text-blue-700"
            } rounded-md px-4 py-2 font-medium `
          }
          to="ban"
        >
          User bị ban
        </NavLink>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default QuanLyUser;
