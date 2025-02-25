import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ name, email,deleteHandler,editHandler,id }) => {
    return (
        <Link style={{ minHeight: "200px", minWidth: "270px", border: "1px solid #ddd", borderRadius: "8px", justifyContent: "center", alignItems: "center", padding: '1rem' }}>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={()=>editHandler(id,name,email)} >Edit</button>
            <button onClick={()=> deleteHandler(id)} >Delete</button>
        </Link>
    )
}

export default User