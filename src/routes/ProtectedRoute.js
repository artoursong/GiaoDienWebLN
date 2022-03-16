import { useAuth } from "context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, isPrivate }) => {
  const [authState] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPrivate) return;

    if (isPrivate && !authState.isAuth) {
      navigate("/dang-nhap", { replace: true });
    }
  }, [isPrivate, authState.isAuth, navigate]);
  return <>{children}</>;
};

export default ProtectedRoute;
