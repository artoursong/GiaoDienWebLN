import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

import Container from "components/Container";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";
import ListVolume from "./components/ListVolume";
import Line from "components/CurveLine";
import StraightLine from "components/StraightLine";

import { useTruyen } from "context/truyenContext";

const QuanLyTruyen = () => {
  const params = useParams();
  const [truyen, setTruyen] = useTruyen();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getBook = async () => {
      const response = await bookService.getBookById(params.id);

      if (response.status === 200) {
        setIsLoading(false);
        setTruyen(response.data);
      }
    };

    getBook();
  }, [params.id, setTruyen]);

  return (
    <div>
      <Container>
        <div>
          <PageHeader title="Quản lý truyện" />
          <SectionDivider>
            <div className="grid grid-cols-[max(400px)_minmax(900px,1000px)] items-start gap-20 pt-20">
              <div className="w-full rounded-md border border-gray-500 p-4">
                <Link
                  to="create"
                  className="mb-2 inline-block rounded-md bg-blue-500 px-4 py-2 text-white"
                >
                  Tạo tập
                </Link>

                <div className="relative">
                  {!isLoading && truyen
                    ? truyen.volumes.map((volume) => (
                        <ListVolume
                          volume={volume}
                          key={volume.id}
                          setTruyen={setTruyen}
                        />
                      ))
                    : null}
                </div>
              </div>
              <div className="w-full rounded-md border border-gray-500 p-4">
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          </SectionDivider>
        </div>
      </Container>
    </div>
  );
};

export default QuanLyTruyen;
