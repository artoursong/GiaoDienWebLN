import { useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";

// pages
import MainLayout from "components/Layout/HomeLayout";
import Books from "../pages/books";
import BookTable from "pages/profileManager/components/BookTable";
import BookmarkTable from "pages/profileManager/components/BookmarkTable";
import Profile from "pages/profileManager/components/Profile";
import ChangePassword from "pages/profileManager/components/ChangePassword";
import AdminBookManager from "pages/admin/AdminBookManager";
import ManageBook from "pages/bookManager/ManageBook";
import CreateBook from "pages/bookManager/components/CreateBook";
import EditBook from "pages/bookManager/components/EditBook";
import CreateVolume from "pages/bookManager/components/CreateVolume";
import CreateChapter from "pages/bookManager/components/CreateChapter";
import AdminLayout from "components/Layout/AdminLayout";
import AdminUserManager from "pages/admin/AdminUserManager";
import ReportedUsers from "pages/admin/components/ReportedUsers";
import BannedUser from "pages/admin/components/BannedUser";
import UserNovels from "pages/profileManager/components/PostedNovels";

// layout
import CommonLayout from "components/Layout/CommonLayout";

// guard
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

// context
import { TruyenProvider } from "context/truyenContext";

// pages lazy load
const Home = lazy(() => import("pages/home"));
const DocTruyen = lazy(() => import("pages/readBook"));
const User = lazy(() => import("pages/profileManager"));
const Login = lazy(() => import("pages/login"));
const Register = lazy(() => import("pages/register"));
const Error = lazy(() => import("pages/error"));
const QuanLyTruyen = lazy(() => import("pages/bookManager"));
const Truyen = lazy(() => import("pages/bookDetail"));

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
          element: <Books />,
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
              element: <CreateVolume mode={"edit"} />,
            },
            {
              path: ":volumeId/create",
              element: <CreateChapter mode={"create"} />,
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
          element: <AdminUserManager />,
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
          element: <AdminBookManager />,
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
