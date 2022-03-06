import React from "react";

const Comment = ({ comment, onClick }) => {
  return (
    <div
      key={comment.iD_Comment}
      className="mb-4 grid grid-cols-[50px_minmax(200px,_1fr)_1fr] items-center gap-5 rounded-md bg-gray-800 px-3 py-2 last:mb-0"
    >
      <div className="overflow-hidden rounded-full">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col justify-start text-light-gray">
        <h2 className="cursor-pointer text-lg font-medium text-indigo-500">
          {comment.name}
        </h2>
        <p>{comment.text}</p>
      </div>
      <div className="ml-auto">
        <button
          className="rounded-md bg-red-700 px-2 py-1 text-sm text-white"
          onClick={onClick}
        >
          Báo cáo
        </button>
      </div>
    </div>
  );
};

export default Comment;
