import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already logged in
    return localStorage.getItem('c6med_auth') === 'true';
  });

  const login = (email: string, password: string): boolean => {
    // User accounts database
    const users = [
      { email: 'micki@mickiboas.com', password: 'C6medSecDocs2025!' },
      { email: 'marcy.duval@c6med.com', password: 'C6medSecDocs2025!' },
      { email: 'jen.mellace@c6med.com', password: 'C6medSecDocs2025!' },
      { email: 'vikas@JustProtect.co', password: 'C6medSecDocs2025!' },
    ];

    // Check credentials against user database
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (user) {
      localStorage.setItem('c6med_auth', 'true');
      localStorage.setItem('c6med_user', user.email);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('c6med_auth');
    localStorage.removeItem('c6med_user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

