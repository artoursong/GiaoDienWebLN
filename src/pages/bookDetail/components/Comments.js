import { useState, useEffect } from "react";

import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";
import CommentForm from "./CommentForm";

import Comment from "./Comment";

const Comments = ({ idBook }) => {
  const [data, setData] = useState(null);
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

    fetchComments();
  }, [idBook, pageIndex]);

  const handleChangePageIdx = (page) => {
    setPageIndex(page);
  };

  return (
    <SectionDivider>
      <div className="w-full cursor-pointer">
        <SectionHeader>Bình luận</SectionHeader>
      </div>
      <div className="mb-4">
        <CommentForm setData={setData} setPageIndex={setPageIndex} />
      </div>
      {isLoading ? (
        <LoadingSpinner size={8} />
      ) : (
        <>
          {data.comment && data.comment.length > 0 ? (
            <div>
              {data.comment.map((comment) => (
                <Comment key={comment.iD_Comment} comment={comment} />
              ))}
            </div>
          ) : (
            <div className="text-white">Không có comment</div>
          )}
        </>
      )}

      {data && data.page_sum ? (
        <div className="mt-10 flex items-center justify-center">
          {new Array(data.page_sum).fill("").map((_, index) => (
            <button
              className={`h-[40px] w-[40px] border-t-2 text-light-gray hover:border-t-indigo-600 ${
                pageIndex === index + 1
                  ? "border-t-indigo-600"
                  : "border-t-gray-500"
              }`}
              onClick={() => handleChangePageIdx(index + 1)}
              disabled={isLoading}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : null}
    </SectionDivider>
  );
};

export default Comments;
