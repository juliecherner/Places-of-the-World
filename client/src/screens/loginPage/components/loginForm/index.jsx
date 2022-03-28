import Input from "@mui/material/Input";

const LoginForm = () => {
  return (
    <div className="login-page-form">
      <Input fullWidth autoFocus type="email" placeholder="e-mail" />
      <Input fullWidth placeholder="password" />
      <div>All fields are reqiured</div>
    </div>
  );
};

export default LoginForm;
