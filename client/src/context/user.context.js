import { createContext } from "react";

const defaultState = {
  actionType: "Login",
  setActionType: () => {},
};

export const UserContext = createContext(defaultState);
