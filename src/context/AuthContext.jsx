// src/context/AuthContext.js
import { createContext, useContext, useReducer, useState } from "react";

// Create Auth Context
const AuthContext = createContext();
// custom hook to access AuthContext
const initialState = {
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      state;
  }
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isAuthenticated,setIdAuthenticated] = useState(false)
  const login = (payload) => {
    dispatch({ type: "LOGIN", payload: payload });
    setIdAuthenticated(true)
  };
  const logout = () => {
    dispatch({ type: "LOGOUT"});
    setIdAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{ user: state.user,isAuthenticated, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
