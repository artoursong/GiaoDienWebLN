import React from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

const UserNovelCard = ({ width = "full", book }) => {
  return (
    <div
      className={`${width} group relative max-h-[350px] cursor-pointer overflow-hidden rounded-md border border-gray-50 border-opacity-10`}
    >
      <img
        src={book.image}
        alt="img2"
        className="relative z-[2] h-full w-full object-cover transition-all duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-[3] h-full w-full bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 z-[4] w-full p-6 text-[#cbdff3]">
        <Link to={`/truyen/${book.iD_Book}`}>
          <h2 className="mb-2 w-full max-w-fit font-semibold line-clamp-2">
            {book.name}
          </h2>
        </Link>
      </div>
      <Link to={`/manage/${book.iD_Book}`}>
        <div className="absolute top-2 right-2 z-[5] flex h-[30px] w-[30px] items-center justify-center rounded-md bg-blue-500 bg-opacity-80 text-gray-300 hover:bg-opacity-100">
          <BsPencil className="text-lg " />
        </div>
      </Link>
    </div>
  );
};

export default UserNovelCard;
