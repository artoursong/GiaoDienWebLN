import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import Container from "components/Container";
import bookService from "api/truyenAPI";
import ListVolume from "./ListVolume";
import { useTruyen } from "context/truyenContext";

const EditBook = () => {
  const params = useParams();
  const [truyen, setTruyen] = useTruyen();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getBook = async () => {
      const response = await bookService.getBookById(params.id);

      if (response.status === 200) {
        setTruyen(response.data);
      }
      setIsLoading(false);
    };

    getBook();
  }, [params.id, setTruyen]);
  return (
    <Container size="max-w-[1200px]">
      <div className="mb-5 flex items-center">
        <h2 className="mr-4 text-2xl font-bold text-white">
          Danh sách tập và chương truyện
        </h2>
        <Link
          to="create"
          className="rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-600 disabled:pointer-events-none disabled:opacity-60"
        >
          Tạo tập mới
        </Link>
      </div>

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

      <div className="mt-20">
        <Outlet />
      </div>
    </Container>
  );
};

export default EditBook;
