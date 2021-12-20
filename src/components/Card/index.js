const Card = ({ width = 'full' }) => {
  return (
    <div className={`${width} relative`}>
      <img
        src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
        alt='img2'
      />
      <div className='absolute z-10 bottom-2 left-0 w-full text-center'>
        <span className=' text-white font-bold'>Jujutsu kaisen</span>
      </div>
    </div>
  );
};

export default Card;
