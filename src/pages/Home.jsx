import { Link } from "react-router-dom";

// src/pages/Home.js
const Home = () => {
  return <div>
    <h2>🏠 Home Page (Public)</h2>
    <Link  to="/login" >Navigate to login</Link> to="/login"
  </div>;
};

export default Home;
