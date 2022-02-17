import React from "react";

const FeaturedCard = ({ width = "full", book }) => {
  const handleClick = () => {
    window.location.href = `truyen/${book.iD_Book}`;
  };

  return (
    <div
      className={`${width} group relative min-h-[400px] cursor-pointer overflow-hidden rounded-md border border-gray-50 border-opacity-10`}
      onClick={handleClick}
    >
      <img
        src={book.image}
        alt="img2"
        className="relative z-[2] w-full transition-all duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-[3] h-full w-full bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 z-[4] w-full p-6 text-[#cbdff3]">
        <h2 className="mb-2 w-full truncate text-lg font-semibold">
          {book.name}
        </h2>
        <ul className="mb-4 flex flex-wrap">
          {book.categories.map((category, index) => (
            <>
              {index < 2 ? (
                <li key={category.iD_Category}>
                  <span className="mx-1 cursor-pointer rounded-full bg-gray-200 bg-opacity-10 py-1 px-3 text-xs text-blue-500 transition-all hover:bg-opacity-30">
                    {category.name}
                  </span>
                </li>
              ) : null}
            </>
          ))}
        </ul>
        <div className="my-2 h-[1px] w-full bg-gray-50"></div>
        <p className="flex items-center justify-between">
          <span
            className={`${
              book.tinh_trang ? "text-green-500" : "text-yellow-600"
            }`}
          >
            {book.tinh_trang ? "Đã hoàn thành" : "Chưa hoàn thành"}
          </span>
          <span className="rounded-md bg-green-600 bg-opacity-10 py-1 px-2">
            120
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
