import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/User";
import Danhsach from "../pages/danhsach";
import MainLayout from "../components/Layout/HomeLayout";
import Login from "pages/dangnhap";
import Truyen from "../pages/truyen";
import ProtectedRoute from "./ProtectedRoute";
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
import CommonLayout from "components/Layout/CommonLayout";
import ManageBook from "pages/QuanLyTruyen/ManageBook";
import CreateBook from "pages/QuanLyTruyen/components/CreateBook";
import EditBook from "pages/QuanLyTruyen/components/EditBook";
import { Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="danhsach" element={<Danhsach />} />
          <Route path="truyen/:id" element={<DocTruyen />} />
          <Route path="detail/:id" element={<Truyen />} />

          {/* <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<User/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route> */}
        </Route>

        <Route
          path="user/*"
          element={
            <ProtectedRoute isPrivate={true}>
              <CommonLayout>
                <User />
              </CommonLayout>
            </ProtectedRoute>
          }
        >
          <Route path="kesach" element={<BookTable />} />
          <Route path="bookmark" element={<BookmarkTable />} />
          <Route path="profile" element={<Profile />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="novels" element={<UserNovels />} />
          <Route
            path="*"
            element={<Navigate to={"/user/profile"} replace={true} />}
          />
        </Route>
        <Route
          path="manage"
          element={
            <ProtectedRoute isPrivate={true}>
              <TruyenProvider>
                <CommonLayout>
                  <QuanLyTruyen />
                </CommonLayout>
              </TruyenProvider>
            </ProtectedRoute>
          }
        >
          <Route index element={<ManageBook />} />
          <Route path="create" element={<CreateBook />} />
          <Route path=":id" element={<EditBook />}>
            <Route
              path=":volumeId/edit"
              element={<FormTaoTap mode={"edit"} />}
            />

            <Route
              path=":volumeId/create"
              element={<FormTaoChuong mode={"create"} />}
            />
          </Route>
          {/* <Route path="create" element={<FormTaoTap mode={"create"} />} /> */}

          {/* <Route
              path="chapter/edit/:chapterId"
              element={<FormTaoChuong mode={"edit"} />}
            /> */}
        </Route>

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
        <Route path="login" element={<Login />} />
        <Route path="dang-ky" element={<DangKy />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
