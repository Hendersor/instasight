import { createContext, ReactNode, useState } from "react"


interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null);

      const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;
    

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };