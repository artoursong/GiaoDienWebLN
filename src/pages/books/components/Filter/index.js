import SearchChuCai from '../SearchChuCai';
import PhanLoai from '../PhanLoai';
import TheLoai from '../TheLoai';
import TinhTrang from '../TinhTrang';

const Filter = () => {
  return (
    <div className='w-[calc(20%-20px)]'>
      <SearchChuCai />
      <PhanLoai />
      <TinhTrang />
      <TheLoai />
    </div>
  );
};

export default Filter;
