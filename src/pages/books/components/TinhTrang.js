const TinhTrang = () => {
  return (
    <div>
      <div className='shadow-md p-5'>
        <div className='mb-3 font-bold shadow-md px-4 py-1 text-center inline-block bg-gray-200'>
          Tình trạng
        </div>
        <div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Đang tiến hành</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Tạm ngưng</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Đã hoàn thành</label>
          </div>
        </div>
        <div className='text-right'>
          <button className='bg-green-700 text-white mt-3 outline-none rounded-xl px-3 py-1'>
            Áp dụng
          </button>
        </div>
      </div>
    </div>
  );
};

export default TinhTrang;
