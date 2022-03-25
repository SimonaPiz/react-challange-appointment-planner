import React from "react";

export const ContactPicker = ({contact, contacts, handleChange}) => {
  return (
      <select name="name" id="contact" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        {contacts.map(cont => <option value={cont.name}></option>)}
      </select>
  );
};
