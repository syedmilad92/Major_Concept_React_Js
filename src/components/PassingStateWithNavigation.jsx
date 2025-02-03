import React from 'react'
import { useNavigate } from 'react-router-dom'

const PassingStateWithNavigation = () => {
    const navigate = useNavigate()
    const navigatorHandler = () =>{
        navigate("/details/123",{
            state:{id:1,name:"abdullah"}
        })
    }
  return (
    <div>
        <button onClick={navigatorHandler} >go to details</button>
    </div>
  )
}

export default PassingStateWithNavigation