const CardVuaDang = ({ width = 'w-full' }) => {
  return (
    <div className={`${width} flex`}>
      <div className='mr-6'>
        <img
          className='max-w-[120px]'
          src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
          alt='ln'
        />
      </div>
      <div className='z-10'>
        <h3 className='font-bold text-xl mb-4 cursor-pointer'>
          Jujutsu kaisen
        </h3>
        <p className='text-[15px]'>
          Oikawa Naoki được đưa đến một thế giới khác bằng nghi thức triệu hồi
          Anh hùng. Khi ấy cậu đang quay tay dở. Tới nơi, cậu...
        </p>
      </div>
    </div>
  );
};

export default CardVuaDang;
