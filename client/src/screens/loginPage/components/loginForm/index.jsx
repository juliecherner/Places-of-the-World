import { useContext, useState } from "react";
import { UserContext } from "../../../../context/user.context";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const { userLogin, dispatchLogin } = useContext(UserContext);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInput = ({ target: { value, name } }) => {
    const action = { name: name, payload: value };
    dispatchLogin(action);
  };

  return (
    <div className="login-page-form">
      <Input
        onChange={handleInput}
        fullWidth
        autoFocus
        type="email"
        placeholder="e-mail"
        name="email"
        value={userLogin.email}
      />
      <Input
        onChange={handleInput}
        fullWidth
        placeholder="password"
        name="password"
        value={userLogin.password}
        type={values.showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <div>All fields are reqiured</div>
    </div>
  );
};

export default LoginForm;
