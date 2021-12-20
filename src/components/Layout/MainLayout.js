import { Outlet } from 'react-router-dom';
import Header from '../Header/Index';
import Footer from '../Footer/Index';
import Banner from 'components/Banner';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
