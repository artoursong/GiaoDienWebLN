import React from "react";
import { Link } from "react-router-dom";

const UserNovelCard = ({ width = "full", book, deleteBook }) => {
  return (
    <div
      className={`${width} relative max-h-[350px] cursor-pointer overflow-hidden rounded-md border border-gray-50 border-opacity-10`}
    >
      <img
        src={book.image}
        alt="img2"
        className="relative z-[2] h-full w-full object-cover transition-all duration-200"
      />
      <div className="absolute inset-0 z-[3] h-full w-full bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 z-[4] w-full p-6 text-[#cbdff3]">
        <Link to={`/chi-tiet/${book.iD_Book}`}>
          <h2 className="mb-2 w-full max-w-fit font-semibold line-clamp-2 hover:text-indigo-500">
            {book.name}
          </h2>
        </Link>
      </div>
      <div>
        <div className="absolute top-2 right-2 z-[5] flex gap-4">
          <Link to={`/manage/${book.iD_Book}`} className="">
            <div className="rounded-md bg-indigo-600 px-4 py-1 text-sm text-white transition-all hover:bg-indigo-500">
              Sửa
            </div>
          </Link>
          <button
            className="rounded-md bg-red-600 px-4 py-1 text-sm text-white transition-all hover:bg-red-500"
            onClick={() => deleteBook(book.iD_Book)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNovelCard;
