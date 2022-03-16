import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useAuth } from "context/authContext";
import { BsBookmarkStar } from "react-icons/bs";

import bookService from "api/truyenAPI";
import Container from "components/Container";
import SectionDivider from "components/Section/SectionDivider";
import LoadingSpinner from "components/LoadingSpinner";
import Backdrop from "components/Backdrop";
import Bookmark from "./components/Bookmark";

const ReadBook = () => {
  const [data, setData] = useState(null);
  const [bookMark, setBookmark] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authState] = useAuth();
  const params = useParams();
  const [isShow, setIsShow] = useState(false);

  function createMarkup(content) {
    return { __html: content };
  }

  const handleSetBookmark = async (id) => {
    let response;

    if (bookMark.indexOf(id) !== -1) {
      response = await bookService.deleteBookmark({
        position: id,
        iD_Chapter: Number(params.id),
        iD_User: authState.user.iD_User,
      });
      if (response.status === 200) {
        alert(`Đã xóa bookmark đoạn thứ ${id}`);
        setBookmark((prev) => prev.filter((bookmark) => bookmark !== id));
      }
    } else {
      response = await bookService.createBookmark({
        position: id,
        iD_Chapter: params.id,
        iD_User: authState.user.iD_User,
      });

      if (response.status === 200) {
        alert(`Đã thêm bookmark đoạn thứ ${id}`);
        setBookmark(response.data);
      }
    }
  };

  useEffect(() => {
    const fetchTruyen = async (id) => {
      setIsLoading(true);

      const response = await bookService.getChapter(id);

      if (response.status === 200) {
        setData(response.data);
      }

      setIsLoading(false);
    };

    if (params.id) {
      fetchTruyen(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    const fetchBookMark = async (idUser, idChapter) => {
      const bookmarksRes = await bookService.getBookmark({
        iD_User: idUser,
        iD_Chapter: idChapter,
      });

      if (bookmarksRes.status === 200) {
        setBookmark(bookmarksRes.data);
      }
    };

    if (authState.user && authState.user.iD_User) {
      fetchBookMark(authState.user.iD_User, params.id);
    }
  }, [authState.user, params.id]);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isShow]);

  return (
    <>
      {isShow ? (
        <div className="fixed inset-0 z-20 h-screen w-full">
          <div className="absolute left-0 z-50 h-full w-[300px] bg-gray-900 px-4">
            <Bookmark bookmarks={bookMark} />
          </div>
          <Backdrop
            onClose={() => {
              setIsShow(false);
            }}
          />
        </div>
      ) : null}

      <SectionDivider>
        <Container size="max-w-[1200px]">
          {isLoading ? (
            <LoadingSpinner size={8} />
          ) : data ? (
            <div>
              <div className="sticky top-0 z-10 flex items-center justify-between rounded-md bg-white bg-opacity-5 p-2 backdrop-blur-sm">
                <button
                  className="rounded-md bg-blue-600 font-medium text-white transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-40"
                  disabled={data.iD_PreChapter === 0}
                >
                  <Link
                    className="inline-block px-4 py-2"
                    to={`/doc-truyen/${data.iD_PreChapter}`}
                  >
                    Chap trước
                  </Link>
                </button>
                <button
                  className="rounded-md bg-blue-600 font-medium text-white transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-40"
                  disabled={data.iD_NextChapter === 0}
                >
                  <Link
                    className="inline-block px-4 py-2"
                    to={`/doc-truyen/${data.iD_NextChapter}`}
                  >
                    Chap sau
                  </Link>
                </button>
              </div>
              <div className="mb-10">
                <h1 className="my-5 text-center text-6xl font-semibold text-light-gray">
                  {data.book_name}
                </h1>
                <h2 className="mb-2 text-center text-xl font-medium text-light-gray">
                  {data.volume_name}
                </h2>
                <h3 className="text-center text-xl font-medium text-light-gray">
                  {data.name}
                </h3>
              </div>
              <div className="text-lg text-light-gray">
                {data.contentchapter.map((paragraph, index) => (
                  <div
                    key={index}
                    className="group relative my-8 flex items-center justify-between pr-6"
                  >
                    <p
                      id={paragraph.id}
                      dangerouslySetInnerHTML={createMarkup(paragraph.content)}
                      className="max-w-fit leading-relaxed"
                    ></p>
                    <BsFillBookmarkFill
                      className={`invisible absolute right-0 flex-1 cursor-pointer text-lg  group-hover:visible ${
                        bookMark.indexOf(paragraph.id) !== -1
                          ? "text-blue-500 hover:text-blue-600"
                          : "hover:text-blue-500"
                      } `}
                      onClick={() => handleSetBookmark(paragraph.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </SectionDivider>

      <div className="fixed right-20 bottom-20 z-30 flex flex-col border border-gray-400">
        <div className="group flex h-[60px] w-[60px] items-center justify-center border-b border-gray-400">
          <BsBookmarkStar className="text-3xl text-white group-hover:text-blue-600" />
        </div>
        <div className="group flex h-[60px] w-[60px] items-center justify-center border-b border-gray-400">
          <BsBookmarkStar className="text-3xl text-white group-hover:text-blue-600" />
        </div>
        <div
          className="group flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <BsBookmarkStar className="text-3xl text-white group-hover:text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default ReadBook;
