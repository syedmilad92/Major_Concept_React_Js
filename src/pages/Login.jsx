// src/pages/Login.js
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {loginCall} = useUserContext()

  const handleLogin = () => {
    login();
    navigate("/dashboard"); // Redirect to Dashboard after login
    loginCall({name:"abdullah",status:"Developer"})
  };

  return (
    <div>
      <h2>🔑 Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
