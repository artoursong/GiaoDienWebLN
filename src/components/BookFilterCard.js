import React from "react";
import { Link } from "react-router-dom";

const BookFilterCard = ({ book }) => {
  return (
    <div
      className={`group relative h-[380px] cursor-pointer overflow-hidden rounded-md border border-gray-50 border-opacity-10`}
    >
      <img
        src={book.image}
        alt={book.name}
        className="relative z-[2] h-full w-full object-cover transition-all duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-[3] h-full w-full bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 z-[4] w-full p-6 text-[#cbdff3]">
        <Link to={`/chi-tiet/${book.iD_Book}`}>
          <h2 className="mb-2 w-full truncate text-lg font-semibold">
            {book.name}
          </h2>
        </Link>
        <div className="my-2 h-[1px] w-full bg-gray-50"></div>
        <p className="flex items-center justify-between">
          <span
            className={`${book.status ? "text-green-500" : "text-yellow-600"}`}
          >
            {book.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookFilterCard;
