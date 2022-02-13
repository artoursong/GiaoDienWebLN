import React from "react";

const FeaturedCard = ({ width = "full", book }) => {
  const handleClick = (bookid) => {
    window.location.href = `truyen/${bookid}`;
  };

  return (
    <div
      className={`${width} relative overflow-hidden rounded-md border border-gray-50 border-opacity-10`}
      onClick={() => handleClick(book.iD_Book)}
    >
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
        alt="img2"
        className="relative z-[2]"
      />
      <div className="absolute inset-0 z-[3] h-full w-full bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 z-[4] w-full p-6 text-[#cbdff3]">
        <h2 className="mb-2 w-full truncate text-lg font-semibold">
          The Rising of the Shield Hero
        </h2>
        <ul className="mb-4 flex flex-wrap">
          {new Array(2).fill("").map((_, index) => (
            <li key={index}>
              <span className="mx-1 cursor-pointer rounded-full bg-gray-200 bg-opacity-10 py-1 px-3 text-xs text-blue-500 transition-all hover:bg-opacity-30">
                Action
              </span>
            </li>
          ))}
        </ul>
        <div className="my-2 h-[1px] w-full bg-gray-50"></div>
        <p className="flex items-center justify-between text-green-500">
          Đã hoàn thành{" "}
          <span className="rounded-md bg-green-600 bg-opacity-10 py-1 px-2">
            120
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
