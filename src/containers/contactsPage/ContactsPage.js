import React, { useState } from "react";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const {name, setName} = useState('');
 const {phone, setPhone} = useState(0);
 const {email, setEmail} = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const newName =e.target.value;
    const isDuplicate = contacts.find(contact => contact.name === newName);

    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone(0);
      setEmail('');
    } else {
      alert('The name already exists, change it!');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
