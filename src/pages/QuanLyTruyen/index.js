import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

import Container from "components/Container";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";

import { useTruyen } from "context/truyenContext";

const QuanLyTruyen = () => {
  const params = useParams();
  const [, setTruyen] = useTruyen();

  useEffect(() => {
    const getBook = async () => {
      const response = await bookService.getBookById(params.id);

      if (response.status === 200) {
        setTruyen(response.data);
      }
    };

    getBook();
  }, [params.id, setTruyen]);

  return (
    <SectionDivider>
      <Container>
        <div>
          <PageHeader title="Quản lý truyện" />
          <SectionDivider>
            <div>
              <Outlet />
            </div>
          </SectionDivider>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default QuanLyTruyen;
