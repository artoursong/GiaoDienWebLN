import { useState, useEffect } from "react";
import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";

const Comment = ({ idBook }) => {
  const [comments, setComments] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [firstFetch, setFirstFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await bookService.getComment(idBook);

      if (response.status === 200) {
        setComments(response.data);
      }

      setIsLoading(false);
    };

    if (showComment && !firstFetch) {
      fetchComments();
      setFirstFetch(true);
    }
  }, [idBook, showComment, firstFetch]);

  return (
    <SectionDivider>
      <div
        className="mb-4 inline-block cursor-pointer"
        onClick={() => setShowComment((prev) => !prev)}
      >
        <SectionHeader>Bình luận</SectionHeader>
      </div>
      {showComment ? (
        isLoading ? (
          <LoadingSpinner size={8} />
        ) : comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
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
        )
      ) : null}
    </SectionDivider>
  );
};

export default Comment;
