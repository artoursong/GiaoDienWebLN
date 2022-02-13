//import { Link } from "react-router-dom"

import FeaturedBooks from "./components/FeaturedBooks";
import BaseListBook from "./components/BaseListBook";

const home = () => {
  return (
    <div className="bg-[#070709]">
      <FeaturedBooks />
      <BaseListBook sectionTitle={"Chương mới cập nhật"} />
      <BaseListBook sectionTitle={"Truyện mới nhất"} />
    </div>
  );
};

export default home;
