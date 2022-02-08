import { useState, createContext, useContext } from 'react';
import { authService } from 'api/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    user: null,
  });

  const value = [authState, setAuthState];

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Error');
  }

  return context;
};

const changeuserinfo = async(setState, data) => {
  try {
    const response = await authService.changeinfo(data.user, data.id)
    if (response.status===200) {
      setState({
        isAuth : true,
        user : response.data
      })

      return response
    }


  } catch (error) {
    console.log(error)
  }
}

export { AuthProvider, useAuth, changeuserinfo };
