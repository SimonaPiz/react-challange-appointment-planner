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
  const handleChangeName = ({target}) => setName(target.value);
  const handleChangePhone = ({target}) => setPhone(target.value);
  const handleChangeEmail = ({target}) => setEmail(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label for='username'>enter your Name:</label>
      <input 
        value={name}
        type='text'
        name="username"
        id="username"
        onChange={handleChangeName}
        placeholder='name'
        required
      />
      <label for='phone'>enter your Phone Number:</label>
      <input 
        value={phone}
        type='tel'
        name="phone"
        id="phone"
        onChange={handleChangePhone}
        placeholder='000-000000'
        pattern="[0-9]{3}-[0-9]{6}"
        required
      />
      <label for='email'>enter your Email:</label>
      <input 
        value={email}
        type='email'
        name="email"
        id="email"
        onChange={handleChangeEmail}
        placeholder='email@'
        required
      />
      <input type='submit' value='Submit'/>
    </form>
  );
};
