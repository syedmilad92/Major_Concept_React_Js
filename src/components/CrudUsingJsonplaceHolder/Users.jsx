import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import AddUser from "./AddUser";

const Users = () => {
  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState({})
  const [isEdit, setIsEdit] = useState(false)
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
        console.log("Error==>", error)
      })
  };
  const onAddHandler = async (name,email) =>{
    await fetch("https://jsonplaceholder.typicode.com/users",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json' // Setting content type to JSON
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then((response)=>{
      if(response.status !== 201){
        return 
      }else{
        return response.json()
      }
    })
    .then((data)=>{
      setUsers([...users,data])
    })
  }
  const deleteHandler = async (id) =>{
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      console.log('Deleted successfully:', data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
  }
  const editHandler = async (id,name,email) =>{
    console.log("updating...",id,name,email)
    setIsEdit(true)
    setEdit({id,name,email})

    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json' // Setting content type to JSON
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then((response)=>{
      if(response.status !== 201){
        return 
      }else{
        return response.json()
      }
    })
    .then((data)=>{
      setUsers([...users,data])
    })
  }
  return (
    <div>
      <h1>CRUD Using JSON Place Holder.</h1>
      <AddUser onAdd={onAddHandler} editUser={edit} isEdit={isEdit} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {users?.map((user, index) => (
          <User key={index} id={user.id} name={user.name} email={user.email} editHandler={editHandler} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  )
};

export default Users;
