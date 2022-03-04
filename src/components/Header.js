import { Link } from "react-router-dom";
import Container from "./Container";
import { useAuth } from "context/authContext";
import HeaderUser from "./HeaderUser";
import HeaderCategories from "./HeaderCategories";

const menu = [
  {
    id: 1,
    title: "Đăng truyện",
    link: "/dangtruyen",
    isPrivate: true,
  },

  {
    id: 2,
    title: "Kệ sách",
    link: "/user/kesach",
    isPrivate: true,
  },

  {
    id: 3,
    title: "Xuất bản",
    link: "/",
    isPrivate: false,
  },

  {
    id: 4,
    title: "Thảo luận",
    link: "/",
    isPrivate: false,
  },
];

const Header = () => {
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
                      item.isPrivate && authState.isAuth ? item.link : "/login"
                    }
                    className="relative cursor-pointer font-semibold text-gray-200 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:text-gray-300 hover:after:w-full"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <HeaderCategories />
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

export default Header;
