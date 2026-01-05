import { createContext, useContext, useState, useEffect, useMemo } from "react";
import api from "../api/api";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // 1. Оптимістична ініціалізація: беремо дані з localStorage, якщо вони є
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  // Функція виходу (винесена, щоб використовувати в інтерцепторах)
  const logout = async () => {
    try {
      await api.post("/auth/logout/"); // Повідомляємо бекенд, щоб видалив куку
    } finally {
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  useEffect(() => {
    // 2. Перевірка сесії при завантаженні додатка
    const verifySession = async () => {
      try {
        await api.get("/auth/csrf/"); // Отримуємо CSRF токен
        const response = await api.get("/auth/me/");
        login(response.data); // Оновлюємо дані свіжими з сервера
      } catch (error) {
        console.error("Сесія недійсна або відсутня");
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  // 3. Налаштування інтерцептора для відлову 401 помилок під час роботи
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

  const value = useMemo(() => ({
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {/* Показуємо лоадер тільки під час першої ініціалізації, якщо це критично */}
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth має використовуватись всередині AuthProvider");
  return context;
};

export { AuthProvider, useAuth };