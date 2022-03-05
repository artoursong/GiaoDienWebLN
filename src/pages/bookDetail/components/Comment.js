import { useState, useEffect } from "react";
import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";
import CommentForm from "./CommentForm";

const Comment = ({ idBook }) => {
  const [data, setData] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const [firstFetch, setFirstFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      const response = await bookService.getComment({
        iD_Book: idBook,
        page: pageIndex,
      });

      if (response.status === 200) {
        setData(response.data);
      }

      setIsLoading(false);
    };

    if (showComment && !firstFetch) {
      fetchComments();
      setFirstFetch(true);
    }
  }, [idBook, showComment, firstFetch, pageIndex]);

  const handleChangePageIdx = (page) => {
    setPageIndex(page);
    setFirstFetch(false);
  };

  return (
    <SectionDivider>
      <div
        className="w-full cursor-pointer"
        onClick={() => setShowComment((prev) => !prev)}
      >
        <SectionHeader>Bình luận</SectionHeader>
      </div>
      <div className="mb-4">
        <CommentForm setData={setData} setPageIndex={setPageIndex} />
      </div>

      {showComment ? (
        isLoading ? (
          <LoadingSpinner size={8} />
        ) : (
          <>
            {data.comment && data.comment.length > 0 ? (
              <div>
                {data.comment.map((comment) => (
                  <div
                    key={comment.iD_Comment}
                    className="mb-4 grid grid-cols-[50px_minmax(200px,_1fr)] items-start gap-5 rounded-md border border-sky-900 p-2 last:mb-0"
                  >
                    <div className="overflow-hidden rounded-full">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar2.png"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col justify-start text-light-gray">
                      <h2 className="cursor-pointer text-lg font-medium text-blue-500 hover:text-blue-600">
                        {comment.name}
                      </h2>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white">Không có comment</div>
            )}
          </>
        )
      ) : null}

      {data && data.page_sum ? (
        <div className="mt-10 flex items-center justify-center">
          {new Array(data.page_sum).fill("").map((_, index) => (
            <button
              className={`h-[40px] w-[40px] border-t-2 text-light-gray hover:border-t-blue-600 ${
                pageIndex === index + 1
                  ? "border-t-blue-600"
                  : "border-t-gray-500"
              }`}
              onClick={() => handleChangePageIdx(index + 1)}
              disabled={isLoading}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : null}
    </SectionDivider>
  );
};

export default Comment;
