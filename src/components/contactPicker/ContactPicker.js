import React from "react";

export const ContactPicker = ({
  name,
  onChange,
  contacts
}) => {
  return (
      <select name={name} id="contact" onChange={onChange}>
        <option value={""} selected='selected'>
          --Please choose a contact--
        </option>
        {contacts.map((contact) => {
          return (
            <option value={contact} key={contact}>
              {contact}
            </option>
          );
        })}
      </select>
  );
};