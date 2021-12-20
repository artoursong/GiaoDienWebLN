import Filter from './components/Filter';
import DanhSachTruyen from './components/DanhSachTruyen';
import SectionDivider from 'components/SectionDivider';
import Container from '../../components/Container';

const TrangDanhSach = () => {
  return (
    <SectionDivider>
      <Container>
        <div className='flex gap-10'>
          <DanhSachTruyen />
          <Filter />
        </div>
      </Container>
    </SectionDivider>
  );
};

export default TrangDanhSach;
