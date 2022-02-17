import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/User";
import Danhsach from "../pages/danhsach";
import MainLayout from "../components/Layout/MainLayout";
import Dangnhap from "../pages/dangnhap";
import Truyen from "../pages/truyen";
import ProtectedRoute from "./ProtectedRoute";
import TaoTruyen from "pages/taotruyen";
import PageHeader from "components/PageHeader";
import QuanLyTruyen from "pages/QuanLyTruyen";
import DocTruyen from "pages/doctruyen";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="danhsach" element={<Danhsach />} />

          <Route path="truyen/:id" element={<Truyen />} />
          <Route path="manage/:id" element={<QuanLyTruyen />} />
        </Route>
        <Route path="login" element={<Dangnhap />} />
        {/* <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<User/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route> */}
        <Route
          path="user"
          element={
            <ProtectedRoute isPrivate={true}>
              <MainLayout>
                <PageHeader title={"Trang cá nhân"} />
              </MainLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<User />} />
        </Route>
        <Route path="dangtruyen" element={<TaoTruyen />} />
        <Route path="truyen" element={<DocTruyen />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
