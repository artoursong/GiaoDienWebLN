import { useEffect, useState } from "react";
import FeaturedBooks from "./components/FeaturedBooks";
import BaseListBook from "./components/BaseListBook";
import Container from "components/Container";
import HeroSearch from "components/HeroSearch";
import bookService from "api/truyenAPI";

const Home = () => {
  const [data, setData] = useState({ top10TheoDoi: [], top10NoiBat: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await bookService.getTop10();

      if (response.status === 200) {
        setData(response.data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <HeroSearch />
        {isLoading ? null : <FeaturedBooks data={data} />}

        {/* <BaseListBook sectionTitle={"Chương mới cập nhật"} />
        <BaseListBook sectionTitle={"Truyện mới nhất"} /> */}
      </Container>
    </div>
  );
};

export default Home;
