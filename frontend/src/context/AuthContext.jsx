import { createContext, useState, useEffect, useMemo } from "react";
import api from "../api/api";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUserData = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  const register = async (userData) => {
    try {
      await api.get("/auth/csrf/");
      const response = await api.post("/auth/", userData);
      updateUserData(response.data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  };

  const login = async (credentials) => {
    try {
      await api.get("/auth/csrf/");
      const response = await api.post("/auth/login/", credentials);
      updateUserData(response.data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout/");
    } finally {
      updateUserData(null);
    }
  };

  useEffect(() => {
    const verifySession = async () => {
      try {
        await api.get("/auth/csrf/");
        const response = await api.get("/auth/me/");
        updateUserData(response.data);
      } catch (error) {
        console.error("Session is invalid or missing");
        updateUserData(null);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          setUser(null);
          localStorage.removeItem("user");
        }
        return Promise.reject(error);
      }
    );

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  const value = useMemo(
    () => ({
      user,
      register,
      login,
      logout,
      loading,
      isAuthenticated: !!user,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
