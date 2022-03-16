import { useAuth } from "context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RoleRoute = ({ children }) => {
  const [authState] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.user?.role || !authState.isAuth) {
      navigate("/dang-nhap", { replace: true });
    }
  }, [authState.user, navigate, authState.isAuth]);

  return <>{children}</>;
};

export default RoleRoute;
