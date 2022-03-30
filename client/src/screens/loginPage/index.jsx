import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import FormTogglers from "./components/formTogglers";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Button from "@mui/material/Button";
import "./login-page.css";

// const checkIfValuesNotEmpty = (state) => {
//   const objectValues = Object.values(state);
//   return objectValues.some((item) => item !== "");
// };

const LoginPage = () => {
  const { actionType, userLogin, userRegister } = useContext(UserContext);

  const handleSubmit = () => {
    actionType === "Login"
      ? console.log("login", userLogin)
      : console.log("register", userRegister);
  };

  return (
    <div className="login-page">
      <FormTogglers />
      <div className="login-page-form-title">{actionType}</div>
      {actionType === "Login" ? <LoginForm /> : <RegisterForm />}
      <div className="login-page-form--submit">
        <Button variant="contained" color="success" onClick={handleSubmit}>
          {actionType}
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
