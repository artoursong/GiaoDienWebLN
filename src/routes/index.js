import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/User";
import Danhsach from "../pages/danhsach";
import MainLayout from "../components/Layout/MainLayout";
import Dangnhap from "../pages/dangnhap";
import Truyen from "../pages/truyen";
import ProtectedRoute from "./ProtectedRoute";
import TaoTruyen from "pages/taotruyen";
import QuanLyTruyen from "pages/QuanLyTruyen";
import DocTruyen from "pages/doctruyen";
import FormTaoTap from "pages/QuanLyTruyen/components/FormTaoTap";
import FormTaoChuong from "pages/QuanLyTruyen/components/FormTaoChuong";
import { TruyenProvider } from "context/truyenContext";
import Profile from "pages/User/components/Profile";
import ChangePassword from "pages/User/components/ChangePassword";
import UserNovels from "pages/User/components/PostedNovels";
import BookTable from "pages/User/components/BookTable";
import BookmarkTable from "pages/User/components/BookmarkTable";
import AdminLayout from "components/Layout/AdminLayout";
import AdminQuanLyTruyen from "pages/Admin/QuanLyTruyen";
import QuanLyUser from "pages/Admin/QuanLyUser";
import ReportedUsers from "pages/Admin/components/ReportedUsers";
import BannedUser from "pages/Admin/components/BannedUser";
import DangKy from "pages/dangky";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="danhsach" element={<Danhsach />} />
          <Route path="truyen/:id" element={<DocTruyen />} />
          <Route path="detail/:id" element={<Truyen />} />
          <Route
            path="manage/:id"
            element={
              <ProtectedRoute isPrivate={true}>
                <TruyenProvider>
                  <QuanLyTruyen />
                </TruyenProvider>
              </ProtectedRoute>
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
          <Route
            path="user"
            element={
              <ProtectedRoute isPrivate={true}>
                <User />
              </ProtectedRoute>
            }
          >
            <Route path="kesach" element={<BookTable />} />
            <Route path="bookmark" element={<BookmarkTable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="password" element={<ChangePassword />} />
            <Route path="novels" element={<UserNovels />} />
          </Route>

          {/* <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<User/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route> */}
        </Route>
        <Route path="dangtruyen" element={<TaoTruyen />} />
        <Route path="login" element={<Dangnhap />} />
        <Route path="dang-ky" element={<DangKy />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute isPrivate={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="user" element={<QuanLyUser />}>
            <Route path="reports" element={<ReportedUsers />} />
            <Route path="ban" element={<BannedUser />} />
          </Route>
          <Route index element={<div>Hello</div>} />
          <Route path="truyen" element={<AdminQuanLyTruyen />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
