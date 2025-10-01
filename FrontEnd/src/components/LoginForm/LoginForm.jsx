import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(email);
    console.log(password);
    axios.post("http://localhost:3000/auth/admin", userData)
    .then((res)=>{
      console.log("LOGIN SUCCESSFUL");
    })
    .catch((err) => {
      console.error("LOGIN FAILED");
    });
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="textInput"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            className="textInput"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log(e.target.value);
            }}
          />
        </label>
        <label className="loginOptions">
          <input type="checkbox" name="rememberMe" id="rememberMe" /> Remember
          me
        </label>
        <a href="#" className="loginOptions">
          Forgot password?
        </a>
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
