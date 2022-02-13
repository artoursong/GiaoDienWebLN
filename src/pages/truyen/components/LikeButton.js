import { FaHeart } from "react-icons/fa";

const LikeButton = ({ like = true }) => {
  const likeActiveBg = like ? "bg-pink-500 bg-opacity-20" : "bg-gray-100";

  return (
    <button
      className={`rounded-md ${likeActiveBg} flex w-full cursor-pointer items-center justify-center py-2 text-white transition-all hover:bg-opacity-50`}
    >
      <FaHeart className={`mr-2 text-xl text-pink-600`} />
      Thích
    </button>
  );
};

export default LikeButton;
