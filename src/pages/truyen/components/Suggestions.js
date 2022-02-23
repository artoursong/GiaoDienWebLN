import React from "react";
import SectionHeader from "components/Section/SectionHeader";

const Suggestions = ({ books }) => {
  return (
    <div>
      <div className="mb-5">
        <SectionHeader>Truyện cùng thể loại</SectionHeader>
      </div>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li className="mb-4 last:mb-0">
              <div className="grid grid-cols-[100px_minmax(200px,_1fr)] gap-5">
                <img
                  src={book.image}
                  alt="img2"
                  className="h-full overflow-hidden rounded-md object-cover"
                />

                <div>
                  <h4 className="mb-2 max-w-[200px] truncate text-[#c9e1f8]">
                    {book.name}
                  </h4>

                  {book.categories.length > 0 ? (
                    <ul className="mb-2 flex flex-wrap">
                      {book.categories.map((category, index) => (
                        <>
                          {index < 2 ? (
                            <li key={index}>
                              <span className="mx-1 cursor-pointer rounded-full bg-gray-200 bg-opacity-10 py-1 px-3 text-xs text-[#c9e1f8] transition-all hover:bg-opacity-20">
                                {category.name}
                              </span>
                            </li>
                          ) : null}
                        </>
                      ))}
                    </ul>
                  ) : null}

                  <p className="text-sm text-[#c9e1f8] line-clamp-3">
                    {book.mo_ta}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Suggestions;
