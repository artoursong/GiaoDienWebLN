import CardTheoDoiNhieu from '../CardTheoDoiNhieu';

const TheoDoiNhieu = () => {
  return (
    <div className='w-[calc(25%-10px)]'>
      <div className='flex items-center gap-3 mb-5'>
        <div className='bg-black text-white font-bold p-2'>Theo dõi</div>
        <div className='font-bold'>NHIỀU</div>
      </div>
      <div>
        <div className='mb-5'>
          {new Array(5).fill('').map((_, index) => (
            <CardTheoDoiNhieu key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheoDoiNhieu;
