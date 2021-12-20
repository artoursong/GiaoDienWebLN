const CardChuongMoiNhat = ({ width = 'full' }) => {
  return (
    <div className={`${width} relative`}>
      <img
        src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
        alt='img2'
      />
      <div className='absolute z-10 bottom-2 left-0 w-full text-left pl-2'>
        <span className='block text-white font-bold truncate capitalize'>
          Jujutsu kaisen
        </span>
        <span className='text-green-500'>Tập 1</span>
      </div>
    </div>
  );
};

export default CardChuongMoiNhat;
