import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <>
        <form className="loginForm">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              className="textInput"
              id="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            <input
              className="textInput"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
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
    </>
  );
}

export default LoginForm;
