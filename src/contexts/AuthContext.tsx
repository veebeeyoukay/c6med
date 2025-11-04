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
    // Simple local authentication - in production, this would call an API
    // For demo purposes, accept any email/password or use default credentials
    const defaultEmail = 'admin@c6med.com';
    const defaultPassword = 'admin123';
    
    if (email === defaultEmail && password === defaultPassword) {
      localStorage.setItem('c6med_auth', 'true');
      localStorage.setItem('c6med_user', email);
      setIsAuthenticated(true);
      return true;
    }
    
    // Also accept any non-empty credentials for demo
    if (email && password) {
      localStorage.setItem('c6med_auth', 'true');
      localStorage.setItem('c6med_user', email);
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

