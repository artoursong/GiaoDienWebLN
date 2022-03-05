const DanhSachTruyen = () => {
  return (
    <div className="w-[calc(80%-20px)]">
      <div className="mb-7 flex">
        <p>Home</p>
        <div className="cursor-pointer">Danh sách</div>
      </div>
      <div className="mb-6">
        <select className="">
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Mới cập nhật</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-5"></div>
    </div>
  );
};

export default DanhSachTruyen;
