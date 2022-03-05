const TheLoai = () => {
  return (
    <div>
      <div className='shadow-md p-5'>
        <div className='mb-3 font-bold shadow-md text-center px-4 py-1 bg-gray-200 inline-block'>
          Thể loại
        </div>
        <div className='max-h-[250px] overflow-auto'>
          {new Array(20).fill('action').map((title, index) => (
            <div key={index} className='cursor-pointer'>
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheLoai;
