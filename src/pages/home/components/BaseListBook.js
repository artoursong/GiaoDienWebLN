import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FeaturedCard from "./FeaturedCard";
import SectionDivider from "components/Section/SectionDivider";
import SectionHeader from "components/Section/SectionHeader";

const BaseListBook = ({ sectionTitle }) => {
  return (
    <SectionDivider>
      <div className="mb-10">
        <SectionHeader>{sectionTitle}</SectionHeader>
      </div>

      <Swiper
        spaceBetween={25}
        slidesPerView={6}
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
    </SectionDivider>
  );
};

export default BaseListBook;
