import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import userMenu from "constant/userNav";

const UserNav = () => {
  const location = useLocation();

  return (
    <>
      {userMenu.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={(link) =>
            `${
              !link.isActive ? "text-[hsl(210deg,14%,66%)]" : "text-white"
            } flex items-center gap-4 text-left transition-all`
          }
        >
          <div
            className={`rounded-full ${
              location.pathname.includes(item.link)
                ? "bg-indigo-500 text-white"
                : "bg-[hsl(210deg,14%,66%)] text-[hsl(210deg,14%,66%)]"
            } h-[12px] w-[12px]`}
          ></div>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export default UserNav;
