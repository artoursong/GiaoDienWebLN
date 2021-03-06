import { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { useAuth } from "./context/authContext";
import { authService } from "api/auth";
import bookService from "api/truyenAPI";
import Routes from "routes/";

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
    return (
      <Router>
        <Suspense fallback={<div></div>}>
          <Routes />
        </Suspense>
      </Router>
    );
  } else {
    return null;
  }
}

export default App;
