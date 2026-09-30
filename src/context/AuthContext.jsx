import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("authUser")
  );

  const login = (username, password, rememberMe) => {
    if (!username.trim()) {
      return {
        success: false,
        message: "Username is required",
      };
    }

    if (!password.trim()) {
      return {
        success: false,
        message: "Password is required",
      };
    }

    const payload = {
      username: username,
      issuedAt: Date.now(),
    };

    // Simulated JWT token
    const token = btoa(JSON.stringify(payload));

    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", username);

    if (rememberMe) {
      localStorage.setItem("rememberedUser", username);
    } else {
      localStorage.removeItem("rememberedUser");
    }

    setUser(username);

    return {
      success: true,
    };
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    setUser(null);
  };

  const isAuthenticated = () => {
    return Boolean(localStorage.getItem("authToken"));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};