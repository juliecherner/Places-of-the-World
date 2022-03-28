import { useState, useReducer } from "react";
import { UserContext } from "../context/user.context";

const initialUserLogin = {
  email: "",
  password: "",
};

const reducerLogin = (state, action) => {
  switch (action.name) {
    case "email":
      return { ...state, [action.name]: action.payload };
    case "password":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const initialUserRegister = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const reducerRegister = (state, action) => {
  switch (action.name) {
    case "name":
      return { ...state, [action.name]: action.payload };
    case "email":
      return { ...state, [action.name]: action.payload };
    case "password":
      return { ...state, [action.name]: action.payload };
    case "passwordRepeat":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [actionType, setActionType] = useState("Login");
  const [userLogin, dispatchLogin] = useReducer(reducerLogin, initialUserLogin);
  const [userRegister, dispatchRegister] = useReducer(
    reducerRegister,
    initialUserRegister
  );
  return (
    <UserContext.Provider
      value={{
        actionType,
        setActionType,
        userLogin,
        dispatchLogin,
        userRegister,
        dispatchRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
