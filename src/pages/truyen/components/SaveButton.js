import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const SaveButton = ({ like = true }) => {
  const saveActiveBg = like ? "bg-green-600 bg-opacity-20" : "bg-gray-100";

  return (
    <button
      className={`rounded-md ${saveActiveBg} flex w-full cursor-pointer items-center justify-center py-2 text-white transition-all hover:bg-opacity-50`}
    >
      <FaRegBookmark className={`mr-2 text-xl text-green-600`} />
      Lưu
    </button>
  );
};

export default SaveButton;
