import Card from "components/Card";
import Container from "components/Container";
import SectionDivider from "components/SectionDivider";
import bookService from "api/truyenAPI";
import { useEffect, useState } from "react";

const TruyenNoiBat = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await bookService.getBook();
      if (response.status === 200) {
        setBooks(response.data);
      }
    };

    fetchBooks();
  }, []);

  return (
    <SectionDivider>
      <Container>
        <div className="flex gap-5 items-center mb-5">
          <div className="bg-black text-white font-bold p-2">Nổi bật</div>
          <div className="text-gray-400 font-bold">Top tháng</div>
          <div className="text-gray-400 font-bold">Top toàn thời gian</div>
        </div>
        <div className="flex gap-5">
          {books.length > 0
            ? books.map((book, index) => (
                <Card key={index} book={book} width="w-[calc(20%-16px)]" />
              ))
            : "Chưa có truyện"}
        </div>
      </Container>
    </SectionDivider>
  );
};

export default TruyenNoiBat;
