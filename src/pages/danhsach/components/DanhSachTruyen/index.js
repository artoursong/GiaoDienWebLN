import Card from 'components/Card';

const DanhSachTruyen = () => {
  return (
    <div className='w-[calc(80%-20px)]'>
      <div className='flex mb-7'>
        <p>Home</p>
        <div className='cursor-pointer'>Danh sách</div>
      </div>
      <div className='mb-6'>
        <select className=''>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Mới cập nhật</option>
        </select>
      </div>
      <div className='flex gap-5 flex-wrap'>
        {new Array(10).fill('').map((_, index) => (
          <Card key={index} width='w-[calc(16.66%-16.66px)]' />
        ))}
      </div>
    </div>
  );
};

export default DanhSachTruyen;
