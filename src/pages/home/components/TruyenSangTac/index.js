import Container from 'components/Container';
import SectionDivider from 'components/SectionDivider';
import Card from 'components/Card';

const TruyenSangTac = () => {
  return (
    <div>
      <SectionDivider>
        <Container>
          <div className='flex items-center gap-3 mb-5'>
            <div className='bg-black text-white font-bold p-2'>Sáng tác</div>
            <div className='font-bold'>MỚI NHẤT</div>
          </div>
          <div className='flex gap-5 flex-wrap'>
            {new Array(6).fill('').map((_, index) => (
              <Card key={index} width='w-[calc(16.66%-16.66px)]' />
            ))}
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default TruyenSangTac;
