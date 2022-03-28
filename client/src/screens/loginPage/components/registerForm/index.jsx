import Input from "@mui/material/Input";

const RegisterForm = () => {
  return (
    <div className="login-page-form">
      <Input fullWidth autoFocus placeholder="name" />
      <Input fullWidth type="email" placeholder="e-mail" />
      <Input fullWidth placeholder="password" />
      <Input fullWidth placeholder="repeat password" />
      <div>All fields are reqiured</div>
    </div>
  );
};

export default RegisterForm;
