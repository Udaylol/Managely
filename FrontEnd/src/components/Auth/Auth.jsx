import React from "react";
import "./Auth.css";
import LoginForm from "../LoginForm/LoginForm";

function Auth() {
  return (
    <>
      <div className="authContainer">
        <div className="header">
          <button className="employeeBtn">Employee Login</button>
          <button className="adminBtn">Admin Login</button>
        </div>

        <div className="formContainer">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Auth;
