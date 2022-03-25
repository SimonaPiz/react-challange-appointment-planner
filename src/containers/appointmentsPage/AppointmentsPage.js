import React, { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments, 
  contacts, 
  addAppointment
}) => {
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState(
   contacts.length > 0 ? contacts[0].name : ''
 );
 const [date, setDate] = useState('');
 const [hour, setHour] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addAppointment(title, contact, date, hour);
    setTitle('');
    setContact('');
    setDate('');
    setHour('');   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title} setTitle={setTitle}
          contact={contact} setContact={setContact}
          date={date} setDate={setDate}
          hour={hour} setHour={setHour}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};
