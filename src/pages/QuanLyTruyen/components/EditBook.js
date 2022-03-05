import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import bookService from "api/truyenAPI";
import ListVolume from "./ListVolume";
import { useTruyen } from "context/truyenContext";
import { Outlet } from "react-router-dom";

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
      <h2 className="mb-5 text-2xl font-bold text-white">
        Danh sách tập và chương truyện
      </h2>
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
