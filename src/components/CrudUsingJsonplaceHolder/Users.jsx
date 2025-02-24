import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          return
        } else {
          return response.json()
        }
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => {
        console.log("Error==>",error)
      })
  };
  return (
    <div>
      <h3>CRUD using jsonPlaceHolder</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {users.map((user, index) => (
          <User key={index} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  )
};

export default Users;
