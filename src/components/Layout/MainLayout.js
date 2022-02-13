import { Outlet } from "react-router-dom";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import Search from "components/Search";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="homePage min-h-[450px] w-full">
        <div className="min-h-[inherit] bg-gradient-to-t from-[#070709]">
          <Header />
          <Search />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
