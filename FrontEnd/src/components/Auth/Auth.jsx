import LoginForm from "../LoginForm/LoginForm";
import "./Auth.css";

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
