import Container from '../../components/Container';
import SectionDivider from 'components/SectionDivider';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

const TrangTruyen = () => {
  return (
    <SectionDivider>
      <Container>
        <div className='flex gap-10'>
          <LeftSection />
          <RightSection />
        </div>
      </Container>
    </SectionDivider>
  );
};

export default TrangTruyen;
