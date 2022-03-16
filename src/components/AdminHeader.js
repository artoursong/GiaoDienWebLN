import Container from "./Container";
import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";
import HeaderUser from "./HeaderUser";

const menu = [
  {
    id: 1,
    title: "Quản lý truyện",
    link: "/admin/novels",
    isPrivate: true,
  },

  {
    id: 2,
    title: "Quản lý thành viên",
    link: "/admin/user",
    isPrivate: true,
  },
];

const AdminHeader = () => {
  const [authState] = useAuth();

  return (
    <div>
      <Container>
        <div className="flex items-center py-4">
          <h1 className="mr-10 cursor-pointer">
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
                <li key={item.id}>
                  <Link
                    to={
                      item.isPrivate && authState.isAuth
                        ? item.link
                        : "/dang-nhap"
                    }
                    className="relative cursor-pointer font-semibold text-gray-200 transition-all hover:text-yellow-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-auto">
            <HeaderUser authState={authState} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminHeader;
