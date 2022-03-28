import { useState } from "react";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Button from "@mui/material/Button";
import "./login-page.css";

const LoginPage = () => {
  const [actionType, setActionType] = useState("Login");
  return (
    <div className="login-page">
      <div className="login-page--togglers">
        <div onClick={() => setActionType("Login")}>Log in</div>
        <div onClick={() => setActionType("Register")}>Register</div>
      </div>
      <div className="login-page-form-title">{actionType} form</div>
      {actionType === "Register" && <RegisterForm />}
      {actionType === "Login" && <LoginForm />}
      <Button
        className="login-page-form--submit"
        variant="contained"
        color="success"
      >
        {actionType}
      </Button>
    </div>
  );
};

export default LoginPage;
