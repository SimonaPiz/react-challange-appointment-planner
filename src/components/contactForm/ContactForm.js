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
      <label htmlFor='username'>enter Name:</label>
      <input 
        value={name}
        type='text'
        name="name"
        id="username"
        onChange={({target}) => setName(target.value)}
        placeholder='name'
        required
      />
      <label htmlFor='phone'>enter your Phone Number:</label>
      <input 
        value={phone}
        type='tel'
        name="phone"
        id="phone"
        onChange={({target}) => setPhone(target.value)}
        placeholder='000-000000'
        pattern="[0-9]{3}-[0-9]{6}"
        required
      />
      <label htmlFor='email'>enter your Email:</label>
      <input 
        value={email}
        type='email'
        name="email"
        id="email"
        onChange={({target}) => setEmail(target.value)}
        placeholder='email@'
        required
      />
      <input type='submit' value='Add Contact'/>
    </form>
  );
};
