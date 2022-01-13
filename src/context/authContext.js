import { useState, createContext, useContext } from 'react';

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

export { AuthProvider, useAuth };
