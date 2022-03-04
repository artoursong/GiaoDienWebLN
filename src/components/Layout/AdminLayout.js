import { Outlet } from "react-router-dom";
import AdminHeader from "components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-50 flex min-h-screen flex-col">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
