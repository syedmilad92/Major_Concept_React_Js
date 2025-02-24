import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

// Composed Card Component using Reusable Button
const Card = ({ title, description, onAction }) => {
  const [modal, setModal] = useState(false)
  return (
  <div
    style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
    <Button onClick={onAction}>Click Me</Button>
    <Button onClick={()=> setModal((prev)=> !prev)}>More Info</Button>
    {modal && <Modal onClose={setModal(false)} isOpen={modal}>More information</Modal>}
  </div>
)};

export default Card;
