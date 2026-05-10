import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Stores the logged in user
  const [user, setUser] = useState(null);

  // Stores JWT tokens
  const [tokens, setTokens] = useState(() => {
    const storedTokens = localStorage.getItem("tokens");

    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  // Loading state while checking auth
  const [loading, setLoading] = useState(true);

  // Login Function
  const loginUser = async (username, password) => {
    try {
      const response = await api.post("auth/login/", {
        username,
        password,
      });

      // Save JWT tokens
      setTokens(response.data);

      localStorage.setItem(
        "tokens",
        JSON.stringify(response.data)
      );

      // Store simple user info
      setUser({
        username,
      });

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Invalid username or password",
      };
    }
  };

  // Register Function
  const registerUser = async (formData) => {
    try {
      await api.post("auth/register/", formData);

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Registration failed",
      };
    }
  };

  // Logout Function
  const logoutUser = () => {
    setUser(null);

    setTokens(null);

    localStorage.removeItem("tokens");
  };

  // Check Existing Login On Refresh
  useEffect(() => {
    if (tokens) {
      setUser({
        username: "Authenticated User",
      });
    }

    setLoading(false);
  }, [tokens]);

  const contextData = {
  user,
  tokens,
  setTokens,
  loginUser,
  registerUser,
  logoutUser,
};

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};