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

  const handleChangeTitle = ({target}) => setTitle(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>enter a Title for the appointment:</label>
      <input 
        value={title}
        type='text'
        name="title"
        id="title"
        //onChange={handleChangeTitle}
        placeholder='title'
        required
      />
      <label for='date'>select a Date for the appointment:</label>
      <input 
        value={date}
        type='date'
        name="date"
        id="date"
        //onChange={}
        min={getTodayString}
        required
      />
      <label for='hour'>select an Hour for the appointment:</label>
      <input 
        value={hour}
        type='time'
        name="hour"
        id="hour"
        //onChange={}
        required
      />
      <ContactPicker />
      <input type='submit' value='Submit' />
    </form>
  );
};
