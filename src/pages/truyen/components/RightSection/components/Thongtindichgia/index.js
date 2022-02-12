import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bookService from "api/truyenAPI";

const Thongtindichgia = ({ book }) => {
  const [username, setUsername] = useState([]);
  useEffect(() => {
    const fetchBook = async () => {
      const response = await bookService.getUserByBookId(book.iD_Book);
      if (response.status === 200) {
        setUsername(response.data);
      }
    };
    fetchBook();
  }, []);

  return (
    <div className="border border-gray-500 w-full">
      <div className="py-6 bg-green-500"></div>
      <div className="py-2 px-2">
        <div className="mb-1 text-gray-400">Dịch giả</div>
        <Link className="text-2xl font-bold hover:text-green-400" to="/truyen">
          {username}
        </Link>
      </div>
    </div>
  );
};

export default Thongtindichgia;
