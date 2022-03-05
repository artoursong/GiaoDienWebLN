import { FaHeart, FaRegHeart } from "react-icons/fa";
import bookService from "api/truyenAPI";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router-dom";

const LikeButton = ({ id }) => {
  const [authState, setAuthState] = useAuth();
  const navigate = useNavigate();
  const likedBook = authState.isAuth && authState.like.includes(+id);

  const likeBook = async () => {
    if (!authState.isAuth) {
      navigate("/dang-nhap", { replace: true });
      return;
    }
    const response = await bookService.likeBook({
      iD_User: authState.user.iD_User,
      iD_Book: id,
    });

    if (response.status === 200) {
      setAuthState((prev) => ({ ...prev, like: response.data }));
    }
  };

  return (
    <button
      className={`rounded-md ${
        likedBook ? "bg-pink-500 bg-opacity-20" : ""
      } flex w-full cursor-pointer items-center justify-center py-2 text-white transition-all hover:bg-opacity-50`}
      onClick={likeBook}
    >
      {likedBook ? (
        <FaHeart className={`mr-2 text-xl text-pink-600`} />
      ) : (
        <FaRegHeart className={`mr-2 text-xl text-pink-600`} />
      )}
      Thích
    </button>
  );
};

export default LikeButton;
