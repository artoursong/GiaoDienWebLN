import Container from "./Container";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "context/authContext";

const menu = [
  {
    id: 1,
    title: "Sáng tác",
  },

  {
    id: 2,
    title: "Convert",
  },

  {
    id: 3,
    title: "Xuất bản",
  },

  {
    id: 4,
    title: "Thảo luận",
  },

  {
    id: 5,
    title: "Danh sách",
  },

  {
    id: 6,
    title: "Hướng dẫn",
  },
];

const Header = () => {
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
                  src="https://res.cloudinary.com/dlbkvfo8l/image/upload/v1644699196/output-onlinepngtools_1_toiobk.png"
                  alt="logo"
                />
              </div>
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-10">
              {menu.map((item) => (
                <li
                  key={item.id}
                  className="relative cursor-pointer font-semibold text-gray-200 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:translate-x-[-80px] after:transform after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:text-gray-300 hover:after:translate-x-0 hover:after:opacity-100"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {!authState.user ? (
              <button
                className="cursor-pointer overflow-hidden rounded-md bg-white bg-opacity-5 px-4 py-2 font-bold text-white backdrop-blur-sm transition-all hover:bg-opacity-10"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </button>
            ) : (
              <div
                className="group relative ml-5 cursor-pointer py-2 font-bold"
                onClick={() => navigate("/user")}
              >
                <button
                  onClick={logout}
                  className="cursor-pointer overflow-hidden rounded-md bg-white bg-opacity-5 px-4 py-2 font-bold text-white backdrop-blur-sm transition-all hover:bg-opacity-10"
                >
                  Đăng xuất
                </button>
                {authState.user.username}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
