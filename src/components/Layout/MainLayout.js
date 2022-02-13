import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Index";

const MainLayout = ({ children }) => {
  return (
    <div className="relative w-full bg-[#070709]">
      <div className="homePage absolute top-0 min-h-[450px] w-full">
        <div className="min-h-[inherit] bg-gradient-to-t from-[#070709]"></div>
      </div>
      <div className="relative z-50 flex min-h-screen flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
