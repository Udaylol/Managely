import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

function LoginForm({ loginType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(email);
    console.log(password);

    const url =
      loginType === "admin"
        ? "http://localhost:3000/auth/admin"
        : "http://localhost:3000/auth/employee";

    axios
      .post(url, userData)
      .then((res) => {
        console.log("LOGIN SUCCESSFUL");
        alert("Login Successful");
      })
      .catch((err) => {
        console.error("LOGIN FAILED");
        alert("Login Failed");
      });
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="textInput"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="textInput"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label className="loginOptions">
          <input type="checkbox" name="rememberMe" /> Remember me
        </label>
        <button className="loginOptions">Forgot password?</button>
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
