// src/pages/Dashboard.js

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAllUser } from "../services/users";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [users,setUsers] = useState([])
  const [loading,setloading] = useState(false)

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  useEffect(() => {
    async function fetchData(){
      try {
        setloading(true)
        const [status,response] = await getAllUser()
        setUsers(response)
      } catch (error) {
        console.log("error==>",error)
        setloading(false)
      }
      finally{
        setloading(false)
      }
    }
    fetchData()
  }, [])
  

  return (
    <div>
      <h2>📊 Dashboard (Protected)</h2>
      <div style={{display: "flex",flexWrap:"wrap",gap:'0.5rem'}} >
      {loading ? "loading..." : users?.map((user,index)=>(
          <Link to={`/user/${user?.id}`} key={user.id} style={{minWidth: "230px", maxWidth: "230px",border: "1px solid black",minHeight: "100px"}} >
              <h2>{user.name}</h2>
              <p>{user.phone}</p>
              <p>{user.website}</p>
          </Link>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;


