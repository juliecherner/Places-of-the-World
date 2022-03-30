import { useContext, useEffect } from "react";
import { UserContext } from "../../../../context/user.context";
import { useNavigate } from "react-router-dom";
import "./login-success.css";

const LoginSuccess = () => {
  const { actionType } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/all");
    }, 2000);
  });

  return (
    <div className="login-page-login-success">
      {actionType === "Login" ? (
        <div>Logged in successfully</div>
      ) : (
        <div>Registered and logged successfully</div>
      )}
      <div className="login-page-login-success-green">
        Enjoy exploring all places
      </div>
    </div>
  );
};

export default LoginSuccess;
