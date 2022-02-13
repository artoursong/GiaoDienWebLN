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
    </div>
  );
};

export default FeaturedCard;
