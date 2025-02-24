import React from 'react'

const Badge = ({children,color="primary"}) => {
    const styles = {
        primary: {backgroundColor: "#fafafa",paddding: "10x",border: "1px solid gray"},
        secondary: {backgroundColor: "#f4f4f3",paddding: "10x",border: "1px solid pink"},
    }
  return (
    <button style={styles[color]}>
        {children}
    </button>
  )
}

export default Badge