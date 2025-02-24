import React, { useEffect } from "react";
import { useState } from "react";

const Users = () => {
    const [users,setUsers] = useState([])
  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res !== 201) {
          return;
        } else {
          return  res.json();
        }
      })
      .then((data) => {
        console.log("data==>",data)
        setUsers(data)
      })
      .catch((error) => {
        console.log("error==>", error);
      });
  };
  console.log("user==>",users)
  return (
    <div>
        <h3>CRUD using jsonPlaceHolder</h3>
    </div>
  )
};

export default Users;
