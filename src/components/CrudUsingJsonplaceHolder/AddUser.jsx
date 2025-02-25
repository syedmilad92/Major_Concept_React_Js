import React, { useRef } from 'react'

const AddUser = ({onAdd,editUser,isEdit}) => {
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const {id,name,email} = editUser;
  const submitHandler = (e) =>{
    e.preventDefault()
    onAdd(emailRef.current.value,nameRef.current.value)
  }
  if(isEdit){
    emailRef.current.value = email;
    nameRef.current.value = name;
  }
  return (
    <div style={{padding:"0.5rem"}} >
      <form action="" onSubmit={submitHandler}>
        <input style={{padding:"0.5rem"}} type="text" placeholder="enter the name"  ref={nameRef} />
        <input style={{padding:"0.5rem"}} type="email" placeholder="enter the email" ref={emailRef} />
        <button style={{padding:"0.5rem"}} type="submit">{isEdit ? "edit" : "add"}</button>
      </form>
    </div>
  )
}

export default AddUser