import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiMedalFill } from "react-icons/ri";

import Container from "components/Container";
import SectionDivider from "components/SectionDivider";
import bookService from "api/truyenAPI";
import FeaturedCard from "./FeaturedCard";
import SectionHeader from "components/SectionHeader";

const FeaturedBooks = () => {
  const [, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await bookService.getBook();
      if (response.status === 200) {
        setBooks(response.data);
      }
    };

    fetchBooks();
  }, []);

  const renderColorByRank = (index, type) => {
    switch (index) {
      case 0: {
        return type === "medal" ? "text-yellow-500" : "bg-opacity-30";
      }
      case 1: {
        return type === "medal" ? "text-[#D7D7D7]" : "bg-opacity-20";
      }
      case 2: {
        return type === "medal" ? "text-[#824A02]" : "bg-opacity-10";
      }
      default: {
        return type === "medal" ? "" : "bg-opacity-0";
      }
    }
  };

  return (
    <SectionDivider>
      <Container>
        <div>
          <div className="flex items-stretch gap-20">
            {/* {books.length > 0
              ? books.map((book, index) => (
                  <Card key={index} book={book} width="w-[calc(20%-16px)]" />
                ))
              : "Chưa có truyện"} */}
            <div className="w-[65%]">
              <div className="mb-10">
                <SectionHeader>Truyện nổi bật</SectionHeader>
              </div>

              <Swiper
                spaceBetween={25}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="w-full"
                modules={[Navigation]}
                navigation={true}
              >
                {new Array(10).fill("").map((_, index) => (
                  <SwiperSlide key={index}>
                    <FeaturedCard width="w-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-[35%]">
              <div className="mb-10 flex items-center justify-between">
                <SectionHeader>Top theo dõi</SectionHeader>
                <div className="group relative">
                  <button className="relative cursor-pointer overflow-hidden rounded-md bg-white bg-opacity-10 py-2 px-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-opacity-10">
                    Top tháng
                  </button>
                  <ul className="invisible absolute right-0 w-[150px] rounded-md bg-white bg-opacity-20 opacity-0 backdrop-blur-md transition-all group-hover:visible group-hover:opacity-100">
                    <li className="cursor-pointer py-2 px-4 font-medium text-white transition-all hover:text-blue-300">
                      Top Năm
                    </li>
                    <li className="cursor-pointer py-2 px-4 font-medium text-white transition-all hover:text-blue-300">
                      Toàn thời gian
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-h-[350px] overflow-auto pr-2">
                {new Array(10).fill("").map((_, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex items-center rounded-md bg-gray-50 p-2 last:mb-0 ${renderColorByRank(
                      index
                    )}`}
                  >
                    {index < 3 ? (
                      <RiMedalFill
                        className={`mr-4 text-3xl ${renderColorByRank(
                          index,
                          "medal"
                        )}`}
                      />
                    ) : (
                      <p className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white bg-opacity-5 text-[#cbdff3]">
                        {index + 1}
                      </p>
                    )}
                    <h4 className="max-w-[60%] truncate font-semibold text-[#cbdff3]">
                      The Raising of The Shield Hero
                    </h4>
                    <p className="ml-auto text-sm text-[#cbdff3]">
                      10.000 theo dõi
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default FeaturedBooks;
