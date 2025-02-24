import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginCall = (payload) =>{
    console.log("payload==>",payload)
    setUser(payload)
  }
  return (
    <UserContext.Provider value={{ user, loginCall }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;