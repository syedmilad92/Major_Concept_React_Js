import React, { useEffect } from 'react'

const DisplayData = () => {
    useEffect( () => {
      async function fetchData(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            console.log(data)
          } catch (error) {
            console.log("error==>",error)
          }
      }
      fetchData()
    }, [])
    
  return (
    <div>DisplayData</div>
  )
}

export default DisplayData