import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ name, email }) => {
    return (
        <Link style={{ minHeight: "200px", minWidth: "270px", border: "1px solid #ddd", borderRadius: "8px", justifyContent: "center", alignItems: "center", padding: '1rem' }}>
            <p>{name}</p>
            <p>{email}</p>
        </Link>
    )
}

export default User