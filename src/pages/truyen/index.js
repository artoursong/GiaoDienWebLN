import Container from "../../components/Container";
import SectionDivider from "components/SectionDivider";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { useParams } from "react-router-dom";
import bookService from "api/truyenAPI";
import { useState, useEffect } from "react";

const TrangTruyen = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await bookService.getBookById(id);
      if (response.status === 200) {
        setBook(response.data);
      }
    };
    fetchBook();
  }, []);

  return (
    <SectionDivider>
      <Container>
        <div className="flex gap-10">
          {book && (
            <>
              <LeftSection book={book} />
              <RightSection book={book} />
            </>
          )}
        </div>
      </Container>
    </SectionDivider>
  );
};

export default TrangTruyen;
