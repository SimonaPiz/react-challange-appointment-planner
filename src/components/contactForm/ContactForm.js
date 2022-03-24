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
      <label for='phone'>Phone Number:</label>
      <input 
        value={phone}
        type='tel'
        name="phone"
        id="phone"
      />
      <label for='email'>User email:</label>
      <input 
        value={email}
        type='email'
        name="email"
        id="email"
      />
      <input type='submit' value='Submit'/>
    </form>
  );
};
