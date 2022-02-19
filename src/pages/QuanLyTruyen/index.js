import { useEffect, useState } from "react/cjs/react.development";
import Container from "components/Container";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useTruyen } from "context/truyenContext";
import bookService from "api/truyenAPI";
import ListVolume from "./components/ListVolume";
import { Link } from "react-router-dom";

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
            <div className="grid grid-cols-[350px_minmax(900px,1000px)] items-start gap-20 pt-20">
              <div className="w-full rounded-md border border-gray-500 p-4">
                <Link
                  to="create"
                  className="mb-2 inline-block rounded-md bg-blue-500 px-4 py-2 text-white"
                >
                  Tạo tập
                </Link>
                {!isLoading && truyen
                  ? truyen.volumes.map((volume) => (
                      <ListVolume volume={volume} key={volume.id} />
                    ))
                  : null}
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
