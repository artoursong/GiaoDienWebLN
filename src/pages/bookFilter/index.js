import React from "react";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";
import Container from "components/Container";
import { useState, useEffect } from "react";
import bookService from "api/truyenAPI";
import BookFilterCard from "components/BookFilterCard";
import words from "constant/words";
import genres from "constant/genres";

const BookFilter = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState({
    namedata: "",
    status: "",
    firstletter: "",
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await bookService.findBook({ ...filter, page });

      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [page, filter]);
  return (
    <div>
      <Container>
        <SectionDivider>
          <PageHeader title={"Lọc truyện"} />
        </SectionDivider>
        <div className="grid grid-cols-[1200px_minmax(200px,_1fr)] gap-10">
          <div className="grid grid-cols-4 gap-4">
            {data && data.book.length > 0 ? (
              <>
                {data.book.map((book) => (
                  <BookFilterCard book={book} />
                ))}
              </>
            ) : (
              <span className="text-xl font-medium text-light-gray">
                Không tìm thấy truyện nào
              </span>
            )}
          </div>
          <div>
            <button className="mb-5 rounded-md bg-indigo-600 px-4 py-2 text-lg font-medium text-white hover:bg-indigo-700">
              Reset lọc
            </button>
            <div className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Lọc theo bảng chữ cái
              </h2>
              <div className="rounded-md bg-gray-800 px-2 py-6">
                <div className="grid grid-cols-6 gap-2">
                  {words.map((word, index) => (
                    <button
                      onClick={() =>
                        setFilter((prev) => ({ ...prev, firstletter: word }))
                      }
                      className={`${
                        filter.firstletter === word
                          ? "text-indigo-600"
                          : "text-light-gray"
                      } `}
                      key={index}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Lọc theo tình trạng
              </h2>
              <div className="rounded-md bg-gray-800 p-4">
                <label htmlFor="status" className="mb-2 block text-light-gray">
                  <input
                    type="radio"
                    name="status"
                    id="status"
                    value="false"
                    onChange={(event) =>
                      setFilter((prev) => ({
                        ...prev,
                        status: event.target.value,
                      }))
                    }
                  />
                  <span className="ml-2">Chưa hoàn thành</span>
                </label>
                <label htmlFor="status" className="block text-light-gray">
                  <input
                    type="radio"
                    name="status"
                    id="status"
                    value="true"
                    onChange={(event) =>
                      setFilter((prev) => ({
                        ...prev,
                        status: event.target.value,
                      }))
                    }
                  />
                  <span className="ml-2">Đã hoàn thành</span>
                </label>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Lọc theo category
              </h2>
              <div className="rounded-md bg-gray-800 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {genres.map((genre, index) => (
                    <button
                      className={`bg-opacity-400 block rounded-md px-4 text-left text-light-gray ${
                        filter.namedata === genre.name ? "bg-indigo-600" : ""
                      } `}
                      key={genre.id}
                      onClick={() =>
                        setFilter((prev) => ({ ...prev, namedata: genre.name }))
                      }
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookFilter;
