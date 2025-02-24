import React from 'react'
import { useUserContext } from '../context/UserContext'
const UserDetail = () => {
    const {user} = useUserContext()
    const {name,status} = user
  return (
    <div>
        <h1>User Details</h1>
        <h3>Status: {status}</h3>
        <h3>Dev Name: {name}</h3>
    </div>
  )
}

export default UserDetail

