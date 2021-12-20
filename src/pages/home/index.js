//import { Link } from "react-router-dom"

import Thongbao from './components/Thongbao';
import TruyenNoiBat from './components/TruyenNoiBat';
import TruyenSangTac from './components/TruyenSangTac';
import ListitemMoiNhat from './components/ChuongMoiNhat';
import TruyenVuaDang from './components/TruyenVuaDang';
import TheoDoiNhieu from './components/TheoDoiNhieu';
import Container from '../../components/Container';
import SectionDivider from 'components/SectionDivider';
const home = () => {
  return (
    <div>
      <Thongbao />
      <TruyenNoiBat width='' />
      <ListitemMoiNhat />
      <TruyenSangTac />

      <div className='bg-[rgba(227,229,232,.5)]'>
        <SectionDivider>
          <Container>
            <div className='flex gap-5'>
              <TruyenVuaDang />
              <TheoDoiNhieu />
            </div>
          </Container>
        </SectionDivider>
      </div>
    </div>
  );
};

export default home;
