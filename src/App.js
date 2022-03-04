import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./routes";
import { useAuth } from "./context/authContext";

import { authService } from "api/auth";
import bookService from "api/truyenAPI";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
      authService.verify().then((res) => {
        if (res.status === 200) {
          bookService.getFollow(res.data.iD_User).then((resLike) => {
            setAuthState((prev) => ({
              ...prev,
              isAuth: true,
              user: res.data,
              like: resLike.data,
            }));
          });
        }
      });

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [setAuthState]);

  if (
    (!isLoading && authState.isAuth && localStorage.getItem("token")) ||
    !localStorage.getItem("token")
  ) {
    return <AppRouter />;
  } else {
    return null;
  }
}

export default App;
