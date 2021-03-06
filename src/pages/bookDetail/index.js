import { useState, useEffect } from "react";
import { BsStar, BsEye } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import { useParams } from "react-router-dom";
import { vi } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";
import LikeButton from "./components/LikeButton";
import SaveButton from "./components/SaveButton";
import Description from "./components/Description";
import Chapters from "./components/Chapters";
import Suggestions from "./components/Suggestions";
import Comments from "./components/Comments";

const BookDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchBook = async () => {
      const response = await bookService.getBookById(id);
      if (response.status === 200) {
        setBook(response.data);
      }
      setIsLoading(false);
    };
    fetchBook();
  }, [id]);

  return (
    <>
      {isLoading ? (
        "...Loading"
      ) : book ? (
        <div className="mx-auto max-w-[1240px] px-5">
          <SectionDivider>
            <div className="flex items-start gap-10 pt-10">
              <div className="relative max-w-[250px]">
                <img
                  src={book.image}
                  alt="img2"
                  className="overflow-hidden rounded-md"
                />
                <div className="absolute -bottom-12 flex w-full items-center gap-2">
                  <div className="w-1/2">
                    <LikeButton id={id} />
                  </div>
                  <div className="w-1/2">
                    <SaveButton />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-5 text-3xl font-bold text-[#c9e1f8]">
                  {book.name}
                </h2>
                <div className="mb-5 flex items-center">
                  <div className="relative mr-5 flex max-w-fit">
                    <BsStar className="text-7xl text-yellow-600" />
                    <span className="absolute top-1/2 left-1/2 mt-[2px] -translate-x-1/2 -translate-y-1/2 transform font-bold text-yellow-600"></span>
                  </div>
                </div>
                <div className="mb-5 flex min-w-[400px] items-center text-lg text-[#c9e1f8]">
                  <span className="inline-block min-w-[100px] font-semibold ">
                    Th??? lo???i
                  </span>
                  :
                  <div className="inline-flex w-full flex-wrap items-center">
                    {book.categories.map((category) => (
                      <span
                        key={category.iD_Category}
                        className="mx-1 cursor-pointer rounded-full bg-gray-300 bg-opacity-20 py-1 px-3 text-base"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mb-5 text-lg text-[#c9e1f8]">
                  <span className="inline-block min-w-[100px] font-semibold">
                    T??nh tr???ng
                  </span>
                  :{" "}
                  <span
                    className={`${
                      book.tinh_trang ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {book.tinh_trang ? "???? ho??n th??nh" : "Ch??a ho??n th??nh"}
                  </span>
                </p>
                <p className="mb-5 text-lg text-[#c9e1f8]">
                  <span className="inline-block min-w-[100px] font-semibold ">
                    T??c gi???
                  </span>
                  : <span>{book.author}</span>
                </p>
                <div className="flex items-center gap-14">
                  <div className="flex flex-col items-center">
                    <h4 className="mb-1 flex items-center text-lg font-semibold text-[#c9e1f8]">
                      <BsEye className="mr-2 text-2xl" />
                      L?????t xem
                    </h4>
                    <span className="text-xl text-[#c9e1f8]">
                      {book.view_sum}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h4 className="mb-1 flex items-center text-lg font-semibold text-[#c9e1f8]">
                      <MdUpdate className="mr-2 text-2xl" />
                      C???p nh???t
                    </h4>
                    <span className="text-xl text-[#c9e1f8]">
                      {formatDistanceToNow(new Date(book.update_date), {
                        locale: vi,
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  {/* <div className="flex flex-col items-center">
                    <h4 className="mb-1 flex items-center text-lg font-semibold text-[#c9e1f8]">
                      <BsStar className="mr-2 text-2xl" />
                      L?????t ????nh gi??
                    </h4>
                    <span className="text-xl text-[#c9e1f8]">
                      {book.follow_sum}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </SectionDivider>
          <Description desc={book.mo_ta} />
          <div className="flex items-start gap-10 pt-10">
            <div className="w-[70%]">
              <Chapters volumes={book.volumes} />
              <Comments idBook={id} />
            </div>
            <div className="sticky top-2 w-[30%]">
              <Suggestions books={book.same_Category} />
            </div>
          </div>
        </div>
      ) : (
        "Truyen khong ton tai"
      )}
    </>
  );
};

export default BookDetail;
