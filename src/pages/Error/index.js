import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0D213D] text-light-gray">
      <h1 className="mb-4 text-6xl text-light-gray">404</h1>
      <p className="text-2xl">
        Bạn đã đi lạc. Ấn vào
        <Link replace={true} to="/" className="text-indigo-500">
          đây
        </Link>{" "}
        để trở về trang chủ
      </p>
    </div>
  );
};

export default Error;
