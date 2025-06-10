import { createContext, ReactNode, useState, useEffect } from "react"


interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user")

    if(savedToken && savedUser){
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = (userData: User, token: string) => {
    setToken(token)
    setUser(userData);

    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(userData))
  };

  const logout = () => {
    setUser(null);
    setToken(null);


    localStorage.removeItem("token");
    localStorage.removeItem("user")
  };

    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };