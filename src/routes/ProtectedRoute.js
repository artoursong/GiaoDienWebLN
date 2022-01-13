import { useAuth } from 'context/authContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isPrivate }) => {
  const [authState] = useAuth();

  return (
    <>
      {isPrivate ? (
        authState.isAuth ? (
          <> {children}</>
        ) : (
          <Navigate to='/dangnhap' replace />
        )
      ) : (
        <> {children}</>
      )}
    </>
  );
};

export default ProtectedRoute;
