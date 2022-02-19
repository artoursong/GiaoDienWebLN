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
import FormTaoTap from "pages/QuanLyTruyen/components/FormTaoTap";
import FormTaoChuong from "pages/QuanLyTruyen/components/FormTaoChuong";
import { TruyenProvider } from "context/truyenContext";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="danhsach" element={<Danhsach />} />

          <Route path="truyen/:id" element={<Truyen />} />
          <Route
            path="manage/:id"
            element={
              <TruyenProvider>
                <QuanLyTruyen />
              </TruyenProvider>
            }
          >
            <Route path="create" element={<FormTaoTap mode={"create"} />} />
            <Route
              path="volume/:volumeId/edit"
              element={<FormTaoTap mode={"edit"} />}
            />

            <Route
              path="volume/:volumeId/create"
              element={<FormTaoChuong mode={"create"} />}
            />
            {/* <Route
              path="chapter/edit/:chapterId"
              element={<FormTaoChuong mode={"edit"} />}
            /> */}
          </Route>
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
