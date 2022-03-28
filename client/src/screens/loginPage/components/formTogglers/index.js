import { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import "./form-togglers.css";

const FormTogglers = () => {
  const { actionType, setActionType } = useContext(UserContext);
  return (
    <div className="login-page--togglers">
      <div
        className={actionType === "Login" && "login-page--toggler-active"}
        onClick={() => setActionType("Login")}
      >
        Log in
      </div>
      <div
        className={actionType === "Register" && "login-page--toggler-active"}
        onClick={() => setActionType("Register")}
      >
        Register
      </div>
    </div>
  );
};

export default FormTogglers;
