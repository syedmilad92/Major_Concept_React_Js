import React, { useState } from 'react'

const SimpleForm = () => {
    const [formData, setFormData] = useState({name: "",email: ""})
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("submiting...")
    }

    const handleChange = (e) =>{
        console.log("e==>",e)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (  
    <div>
        <form onSubmit={submitHandler}>
            <label>
                Name:
                <input type="text" name='name' value={formData.name} onChange={handleChange} />
            </label>
        </form>
    </div>
  )
}

export default SimpleForm