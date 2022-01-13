import './App.css';
import Approuter from './routes';
import { useAuth } from './context/authContext';
import { useEffect, useState } from 'react';
import { authService } from 'api/auth';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [, setAuthState] = useAuth();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authService
        .verify()
        .then(res => {
          if (res.status === 200) {
            setAuthState({
              isAuth: true,
              user: res.data,
            });
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [setAuthState]);

  return <div>{isLoading ? '...Loading' : <Approuter />}</div>;
}

export default App;
