import { useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "components/Layout/HomeLayout";
import Danhsach from "../pages/danhsach";
import BookTable from "pages/User/components/BookTable";
import BookmarkTable from "pages/User/components/BookmarkTable";
import Profile from "pages/User/components/Profile";
import ChangePassword from "pages/User/components/ChangePassword";
import AdminQuanLyTruyen from "pages/Admin/QuanLyTruyen";
import ManageBook from "pages/QuanLyTruyen/ManageBook";
import CreateBook from "pages/QuanLyTruyen/components/CreateBook";
import EditBook from "pages/QuanLyTruyen/components/EditBook";
import FormTaoTap from "pages/QuanLyTruyen/components/FormTaoTap";
import FormTaoChuong from "pages/QuanLyTruyen/components/FormTaoChuong";
import AdminLayout from "components/Layout/AdminLayout";
import QuanLyUser from "pages/Admin/QuanLyUser";
import ReportedUsers from "pages/Admin/components/ReportedUsers";
import BannedUser from "pages/Admin/components/BannedUser";
import UserNovels from "pages/User/components/PostedNovels";

// layout
import CommonLayout from "components/Layout/CommonLayout";

// guard
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

// context
import { TruyenProvider } from "context/truyenContext";

const Home = lazy(() => import("pages/home"));
const DocTruyen = lazy(() => import("pages/doctruyen"));
const User = lazy(() => import("pages/User"));
const Login = lazy(() => import("pages/dangnhap"));
const Register = lazy(() => import("pages/dangky"));
const Error = lazy(() => import("pages/Error"));
const QuanLyTruyen = lazy(() => import("pages/QuanLyTruyen"));
const Truyen = lazy(() => import("pages/truyen"));

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "danh-sach",
          element: <Danhsach />,
        },
        {
          path: "doc-truyen/:id",
          element: <DocTruyen />,
        },
        {
          path: "chi-tiet/:id",
          element: <Truyen />,
        },
      ],
    },
    {
      path: "/user/*",
      element: (
        <ProtectedRoute isPrivate={true}>
          <CommonLayout>
            <User />
          </CommonLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "ke-sach",
          element: <BookTable />,
        },
        {
          path: "bookmark",
          element: <BookmarkTable />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "novels",
          element: <UserNovels />,
        },
        {
          path: "*",
          element: <Navigate to={"/user/profile"} replace={true} />,
        },
      ],
    },
    {
      path: "/manage",
      element: (
        <ProtectedRoute isPrivate={true}>
          <TruyenProvider>
            <CommonLayout>
              <QuanLyTruyen />
            </CommonLayout>
          </TruyenProvider>
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <ManageBook />,
        },
        {
          path: "create",
          element: <CreateBook />,
        },
        {
          path: ":id",
          element: <EditBook />,
          children: [
            {
              path: ":volumeId/edit",
              element: <FormTaoTap mode={"edit"} />,
            },
            {
              path: ":volumeId/create",
              element: <FormTaoChuong mode={"create"} />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <RoleRoute>
          <AdminLayout />
        </RoleRoute>
      ),
      children: [
        {
          index: true,
          element: <div>Hello</div>,
        },
        {
          path: "user",
          element: <QuanLyUser />,
          children: [
            {
              path: "reports",
              element: <ReportedUsers />,
            },
            {
              path: "ban",
              element: <BannedUser />,
            },
          ],
        },
        {
          path: "novels",
          element: <AdminQuanLyTruyen />,
        },
      ],
    },
    {
      path: "/dang-nhap",
      element: <Login />,
    },
    {
      path: "/dang-ky",
      element: <Register />,
    },
    {
      path: "/404",
      element: <Error />,
    },
    {
      path: "*",
      element: <Navigate to={"/404"} replace={true} />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Routes;
