// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    role: null,
    email: null,
  });
  const [loading, setLoading] = useState(true);

  // Keep user logged in across refresh
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    // console.log(savedAuth);
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
    setLoading(false);
  }, []);

  // Whenever auth changes, save to localStorage
  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  const login = (token, role, email) => {
    const newAuth = { token, role, email };
    setAuth(newAuth);
    localStorage.setItem("auth", JSON.stringify(newAuth));
  };

  const logout = () => {
    setAuth({ token: null, role: null, email: null });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
