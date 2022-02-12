import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookService from "api/truyenAPI";

const ThongTin = ({ book }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await bookService.getCategoryByBookId(book.iD_Book);
      if (response.status === 200) {
        setCategories(response.data);
      }
    };
    fetchBook();
  }, []);
  console.log(book);
  return (
    <div className="border border-gray-200">
      <div className="flex gap-10 p-2">
        <img
          className="w-[180px]"
          src="https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg"
          alt="ln"
        />
        <div className="w-full">
          <span className="text-2xl font-bold cursor-pointer capitalize">
            {book.name}
          </span>
          <div className="flex gap-5 mt-4">
            {categories.length
              ? categories.map((item) => (
                  <Link
                    className="px-3 py-[2px] bg-gray-200 rounded-full"
                    to="/truyen"
                  >
                    {item.name}
                  </Link>
                ))
              : null}
          </div>
          <div className="mt-4 mb-2">
            <span className="font-bold">Tác giả: </span>
            <Link to="/truyen" className="hover:text-green-500">
              {book.author}
            </Link>
          </div>
          <div className="mb-2">
            <span className="font-bold">Họa sĩ: </span>
            <Link to="/truyen" className="hover:text-green-500">
              {book.hoa_si}
            </Link>
          </div>
          <div className="">
            <span className="font-bold">Tình trạng: </span>
            <Link to="/truyen" className="hover:text-green-500">
              Đang tiến hành
            </Link>
          </div>
          <div className="flex mt-7 justify-evenly">
            <div>
              <span>472</span>
            </div>
            <div>
              <span>Đánh giá</span>
            </div>
            <div>
              <span>Mục lục</span>
            </div>
            <div>
              <span>Bàn luận</span>
            </div>
            <div>
              <span>Chia sẻ</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-evenly mt-5 border-t border-b border-gray-200 py-2">
        <div className="flex flex-col items-center">
          <span className="text-gray-400">Lần cuối</span>
          <span className="text-xl font-bold">6 giờ</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400">Số từ</span>
          <span className="text-xl font-bold">221.189</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400">Đánh giá</span>
          <span className="text-xl font-bold">4.9/5</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400">Lượt xem</span>
          <span className="text-xl font-bold">53481</span>
        </div>
      </div>
      <div className="px-2 py-4">
        <h2 className="font-bold text-xl">Tóm tắt</h2>
        <p>{book.mo_ta}</p>
      </div>
    </div>
  );
};

export default ThongTin;
