import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='username'>User Name:</label>
      <input 
        value={name}
        type='text'
        name="username"
        id="username"
      />
    </form>
  );
};
