import { useState } from "react";
import { UserContext } from "../context/user.context";

const UserProvider = ({ children }) => {
  const [actionType, setActionType] = useState("Login");
  return (
    <UserContext.Provider value={{ actionType, setActionType }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
