import { useState, createContext, useContext } from "React";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuth: false,
        user: null
    })

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error('Error')
    }

    return context;
}

export { AuthProvider, useAuth }