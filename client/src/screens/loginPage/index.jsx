import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import FormTogglers from "./components/formTogglers";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Button from "@mui/material/Button";
import "./login-page.css";

const LoginPage = () => {
  const { actionType } = useContext(UserContext);
  return (
    <div className="login-page">
      <FormTogglers />
      <div className="login-page-form-title">{actionType} form</div>
      {actionType === "Login" ? <LoginForm /> : <RegisterForm />}
      <div className="login-page-form--submit">
        <Button variant="contained" color="success">
          {actionType}
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;