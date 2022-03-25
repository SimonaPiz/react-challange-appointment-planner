import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  hour,
  setHour,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => { 
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>enter a Title for the appointment:</label>
      <input 
        value={title}
        type='text'
        name="title"
        id="title"
        onChange={({target}) => setTitle(target.value)}
        placeholder='title'
        required
      />
      <label htmlFor='date'>select a Date for the appointment:</label>
      <input 
        value={date}
        type='date'
        name="date"
        id="date"
        onChange={({target}) => setDate(target.value)}
        htmlmin={getTodayString()}
        required
      />
      <label htmlFor='hour'>select an Hour for the appointment:</label>
      <input 
        value={hour}
        type='time'
        name="hour"
        id="hour"
        onChange={({target}) => setHour(target.value)}
        required
      />
      <label htmlFor="contact">Choose a contact:</label>
      <ContactPicker 
        name='contact'
        onChange={({target}) => setContact(target.value)}
        contacts={getContactNames()}
        value={contact}
      />
      <input type='submit' value='Add Appointment' />
    </form>
  );
};
