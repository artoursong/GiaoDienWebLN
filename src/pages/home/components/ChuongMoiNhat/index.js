import Container from 'components/Container';
import CardChuongMoiNhat from '../CardChuongMoiNhat';
import SectionDivider from 'components/SectionDivider';

const ChuongMoiNhat = () => {
  return (
    <SectionDivider>
      <Container>
        <div className='flex items-center gap-3 mb-5'>
          <div className='bg-black text-white font-bold p-2'>Chương</div>
          <div className='font-bold'>MỚI NHẨT</div>
        </div>
        <div className='flex gap-5 flex-wrap'>
          {new Array(10).fill('').map((_, index) => (
            <CardChuongMoiNhat key={index} width='w-[calc(16.66%-16.66px)]' />
          ))}
        </div>
      </Container>
    </SectionDivider>
  );
};

export default ChuongMoiNhat;
