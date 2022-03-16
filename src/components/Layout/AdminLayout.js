import { Outlet } from "react-router-dom";
import AdminHeader from "components/AdminHeader";
import Footer from "components/Footer/Index";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";

const AdminLayout = () => {
  return (
    <div className="relative w-full bg-[#0D213D]">
      <div className="relative z-50 flex min-h-screen flex-col">
        <AdminHeader />
        <SectionDivider>
          <PageHeader title="Quản lý website" />
        </SectionDivider>
        <div className="mb-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
