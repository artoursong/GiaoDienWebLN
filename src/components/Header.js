import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";

import Container from "./Container";
import HeaderUser from "./HeaderUser";
import HeaderCategories from "./HeaderCategories";

import headerNav from "constant/headerNav";

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
              {headerNav.map((item) => (
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
              {authState.user && authState.user.role ? (
                <li key={"admin"}>
                  <Link
                    to={"/admin"}
                    className="relative cursor-pointer font-semibold text-gray-200 transition-all hover:text-yellow-500"
                  >
                    Quản lý website
                  </Link>
                </li>
              ) : null}

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
