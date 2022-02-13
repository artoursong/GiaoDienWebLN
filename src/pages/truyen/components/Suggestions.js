import React from "react";
import SectionHeader from "components/Section/SectionHeader";

const Suggestions = () => {
  return (
    <div>
      <div className="mb-5">
        <SectionHeader>Truyện cùng thể loại</SectionHeader>
      </div>
      <ul>
        {new Array(5).fill("1").map((_, index) => (
          <li className="mb-4 last:mb-0">
            <div className="flex items-stretch gap-5">
              <div className="max-w-[100px]">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/715RXAmrh1L.jpg"
                  alt="img2"
                  className="overflow-hidden rounded-md"
                />
              </div>
              <div>
                <h4 className="mb-2 max-w-[200px] truncate text-[#c9e1f8]">
                  The Rising of the Shield Hero
                </h4>
                <ul className="mb-2 flex flex-wrap">
                  {new Array(2).fill("").map((_, index) => (
                    <li key={index}>
                      <span className="mx-1 cursor-pointer rounded-full bg-gray-200 bg-opacity-10 py-1 px-3 text-xs text-[#c9e1f8] transition-all hover:bg-opacity-20">
                        Action
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[#c9e1f8]">
                  Iwatani Naofumi, một thanh niên người Nhật dễ tính, được triệu
                  tập vào một thế giới...
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
