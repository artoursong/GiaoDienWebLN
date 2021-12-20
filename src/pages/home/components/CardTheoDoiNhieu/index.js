const CardTheoDoiNhieu = () => {
  return (
    <div className='flex items-start w-full mb-4 last:mb-0'>
      <div className='bg-gray-500 px-3 py-[1px] text-sm font-bold text-white rounded-full mr-2'>
        1
      </div>
      <div className='w-[70%]'>
        <h1 className='font-bold cursor-pointer truncate capitalize'>
          Jujutsu kaisen
        </h1>
        <span className='text-sm text-red-400'>8,659 theo dõi</span>
      </div>
      <img
        className='max-w-[40px]'
        src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
        alt='ln'
      />
    </div>
  );
};

export default CardTheoDoiNhieu;
