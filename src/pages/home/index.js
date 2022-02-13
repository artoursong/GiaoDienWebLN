import FeaturedBooks from "./components/FeaturedBooks";
import BaseListBook from "./components/BaseListBook";
import Container from "components/Container";
import HeroSearch from "components/HeroSearch";

const home = () => {
  return (
    <div>
      <Container>
        <HeroSearch />
        <FeaturedBooks />
        <BaseListBook sectionTitle={"Chương mới cập nhật"} />
        <BaseListBook sectionTitle={"Truyện mới nhất"} />
      </Container>
    </div>
  );
};

export default home;
