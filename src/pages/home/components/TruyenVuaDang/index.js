import CardVuaDang from '../CardVuaDang';

const TruyenVuaDang = () => {
  return (
    <div className='w-[calc(75%-10px)]'>
      <div className='flex items-center gap-3 mb-5'>
        <div className='bg-black text-white font-bold p-2'>Truyện</div>
        <div className='font-bold'>VỪA ĐĂNG</div>
      </div>
      <div className='flex gap-5 flex-wrap'>
        {new Array(4).fill('').map((_, index) => (
          <CardVuaDang key={index} width='w-[calc(50%-10px)]' />
        ))}
      </div>
    </div>
  );
};

export default TruyenVuaDang;
