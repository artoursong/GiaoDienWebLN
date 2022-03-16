import { useEffect, useState } from "react";
import FeaturedBooks from "./components/FeaturedBooks";
import BaseListBook from "./components/BaseListBook";
import Container from "components/Container";
import HeroSearch from "components/HeroSearch";
import bookService from "api/truyenAPI";

const Home = () => {
  const [data, setData] = useState({
    top10TheoDoi: [],
    top10NoiBat: [],
    newUpdate: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await bookService.getTop10();

      if (response.status === 200) {
        setData(response.data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <HeroSearch />
        {isLoading ? null : (
          <>
            <FeaturedBooks data={data} />
            {data.newUpdate.length > 0 ? (
              <BaseListBook
                sectionTitle={"Truyện mới nhất"}
                books={data.newUpdate}
              />
            ) : null}
          </>
        )}

        {/* <BaseListBook sectionTitle={"Chương mới cập nhật"} /> */}
      </Container>
    </div>
  );
};

export default Home;
