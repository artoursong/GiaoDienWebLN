import Container from "./Container";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "context/authContext";

const menu = [
  {
    id: 1,
    title: "Quản lý truyện",
    link: "/admin/truyen",
  },

  {
    id: 2,
    title: "Quản lý thành viên",
    link: "/admin/user",
  },
];

const AdminHeader = () => {
  const [authState] = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="cursor-pointer text-[40px] font-semibold text-green-700">
            <Link to="/">
              <div className="w-[200px]">
                <img
                  src="https://res.cloudinary.com/dlbkvfo8l/image/upload/v1646023178/output-onlinepngtools_3_jmkaqj.png"
                  alt="logo"
                />
              </div>
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-10">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="relative cursor-pointer font-semibold text-gray-500 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:translate-x-[-80px] after:transform after:bg-gray-300 after:opacity-0 after:transition-all after:duration-200 hover:text-gray-600 hover:after:translate-x-0 hover:after:opacity-100"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {!authState.user ? (
              <button
                className="cursor-pointer overflow-hidden rounded-md bg-blue-600 px-4 py-2 font-bold text-white backdrop-blur-sm transition-all hover:bg-opacity-90"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </button>
            ) : (
              <div
                className="group relative ml-5 flex cursor-pointer items-center gap-5 py-2 font-bold"
                onClick={() => navigate("/user")}
              >
                {authState.user.username}
                <button
                  onClick={logout}
                  className="cursor-pointer overflow-hidden rounded-md bg-blue-600 px-4 py-2 font-bold text-white backdrop-blur-sm transition-all hover:bg-opacity-90"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminHeader;
