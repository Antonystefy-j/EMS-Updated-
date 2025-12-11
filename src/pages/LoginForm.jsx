import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy credentials
  const validEmail = "anto@gmail.com";
  const validPassword = "123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === validEmail && password.trim() === validPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email first to reset password.");
      return;
    }
    alert(`Password reset link has been sent to ${email}`);
  };

  return (
    <div className="login-page fade-in">
      <div className="login-left slide-left">
        <h1>Welcome Back!</h1>
        <p>Manage your employees efficiently with EMS</p>
      </div>

      <div className="login-right slide-right">
        <div className="login-card pop-in">
          <h2>Login</h2>

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-animate"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-animate"
            />

            <button type="submit" className="btn-animate">
              Login
            </button>
          </form>

          <p className="login-footer">
            Forgot password?{" "}
            <a href="#" onClick={handleForgotPassword}>
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
