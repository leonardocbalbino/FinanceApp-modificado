
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Simulação de autenticação - substituir por Supabase posteriormente
    if (email === 'admin@example.com' && password === 'admin123') {
      const user = { id: 1, email, name: 'Administrador' };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao sistema.",
      });
      return true;
    }
    toast({
      variant: "destructive",
      title: "Erro no login",
      description: "Credenciais inválidas.",
    });
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
