// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Users from "./components/CrudUsingJsonplaceHolder/Users";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/user/:id" element={<UserDetail/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
      </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;


