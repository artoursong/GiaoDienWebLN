const PhanLoai = () => {
  return (
    <div>
      <div className='shadow-md p-5'>
        <div className='mb-3 font-bold shadow-md text-center px-4 py-1 inline-block bg-gray-200'>
          Phân loại
        </div>
        <div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Truyện dịch</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Truyện sáng tác</label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' />
            <label htmlFor=''>Convert</label>
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

export default PhanLoai;
