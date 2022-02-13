import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-5xl font-bold text-[#cbdff3]">
        Welcome to Light Novel's World
      </h1>
      <div className="relative flex w-full max-w-[650px] items-center justify-between rounded-md bg-white bg-opacity-5 py-3 px-5 backdrop-blur-md">
        <input
          type="text"
          className="w-full border-none bg-transparent text-[#cbdff3] outline-none"
          placeholder="Gõ từ khóa để tìm truyện"
          name="search"
          id="search"
          autoComplete="off"
        />
        <label htmlFor="search">
          <FiSearch className="relative ml-4 cursor-pointer text-xl text-[#cbdff3]" />
        </label>
      </div>
    </div>
  );
};

export default Banner;
