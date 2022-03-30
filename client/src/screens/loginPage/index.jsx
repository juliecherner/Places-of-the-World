import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import FormTogglers from "./components/formTogglers";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Api from "../../api/Api";
import Button from "@mui/material/Button";
import "./login-page.css";

// const checkIfValuesNotEmpty = (state) => {
//   const objectValues = Object.values(state);
//   return objectValues.some((item) => item !== "");
// };

const LoginPage = () => {
  const { actionType, userLogin, userRegister } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (actionType === "Login") {
      console.log("login user", userLogin);
    }
    if (actionType === "Register" && userToCreate(userRegister)) {
      const updatedUser = userToCreate(userRegister);
      try {
        const addedUser = await Api.post("api/user/signup", updatedUser);
        if (addedUser) {
          navigate("/result");
          //works but refactor!!!
          // delete userRegister.name;
          // delete userRegister.wishes;
          // delete userRegister.email;
          // delete userRegister.password;
          // delete userRegister.passwordRepeat;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
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

const userToCreate = (user) => {
  const updatedUser = {
    name: user.name,
    email: user.email,
    password: user.password,
    wishes: [],
  };

  if (user.password === user.passwordRepeat) {
    return updatedUser;
  }
};
