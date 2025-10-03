import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import "./Auth.css";

function Auth() {
  const [loginType, setLoginType] = useState("employee");

  return (
    <>
      <div className="authContainer">
        <div className="header">
          <button
            className={`employeeBtn ${
              loginType === "employee" ? "selected" : ""
            }`}
            onClick={() => setLoginType("employee")}
          >
            Employee Login
          </button>
          <button
            className={`adminBtn ${loginType === "admin" ? "selected" : ""}`}
            onClick={() => setLoginType("admin")}
          >
            Admin Login
          </button>
        </div>

        <div className="formContainer">
          <LoginForm loginType={loginType} />
        </div>
      </div>
    </>
  );
}

export default Auth;
