import { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import Input from "@mui/material/Input";

const RegisterForm = () => {
  const { userRegister, dispatchRegister } = useContext(UserContext);

  const handleInput = ({ target: { value, name } }) => {
    const action = { name: name, payload: value };
    dispatchRegister(action);
  };
  return (
    <div className="login-page-form">
      <Input
        fullWidth
        autoFocus
        placeholder="name"
        name="name"
        onChange={handleInput}
        value={userRegister.name}
      />
      <Input
        fullWidth
        type="email"
        placeholder="e-mail"
        name="email"
        onChange={handleInput}
        value={userRegister.email}
      />
      <Input
        fullWidth
        placeholder="password"
        name="password"
        onChange={handleInput}
        value={userRegister.password}
      />
      <Input
        fullWidth
        placeholder="repeat password"
        name="passwordRepeat"
        onChange={handleInput}
        value={userRegister.passwordRepeat}
      />
      <div>All fields are reqiured</div>
    </div>
  );
};

export default RegisterForm;
