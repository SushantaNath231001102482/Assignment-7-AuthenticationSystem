import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("rememberedUser");

    if (savedUser) {
      setUsername(savedUser);
      setRememberMe(true);
    }
  }, []);

  const getPasswordStrength = () => {
    if (!password) return "";

    if (password.length < 6) {
      return "Weak";
    }

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      return "Strong";
    }

    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const result = login(username, password, rememberMe);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/", { replace: true });
  };

  // IMPORTANT: no navigate() here
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const strength = getPasswordStrength();

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Task Manager</h1>
        <h2>Login</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {password && (
            <p className={`strength ${strength.toLowerCase()}`}>
              Password Strength: {strength}
            </p>
          )}

          <label className="remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember User
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;