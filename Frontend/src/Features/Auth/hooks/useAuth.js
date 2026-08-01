import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, logout, register } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin({username, email, password }) {
    setLoading(true);
    try {
      const data = await login({ username, email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { user, loading, handleRegister, handleLogin, handleLogout };
};
