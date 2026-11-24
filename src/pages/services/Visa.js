// { text: 'Visa Support', icon: 'fa fa-id-card' }, // viza secimi(her secimin oz vizasi olacaq,viza melumati gonderilecek), əlavə not
//   { text: 'Tours', icon: 'fa fa-bus' }, // inbound(daxili), incoming(gelme) ,outgoing(getme) , əlavə məlumat
//   { text: 'Welcome to Azerbaijan', icon: 'fa fa-bus' }, // inbound(daxili), incoming(gelme) ,outgoing(getme) , əlavə məlumat
import React, { useState } from 'react';

import './Accomodation.css'; // Make sure to include your CSS file

const Form1 = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    details: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form 1 submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="tel" // Use "tel" type for phone numbers
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={formData.details}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


const TopBars = ({ activeForm, setActiveForm }) => {
  return (
    <div className="top-bars">
      <div
        className={`top-bar ${activeForm === 'Form1' ? 'active' : ''}`}
        onClick={() => setActiveForm('Form1')}>
       Visa
      </div>
    </div>
  );
};

const Visa = () => {
  const [activeForm, setActiveForm] = useState('Form1');

  return (
    <div className="app">
      <TopBars activeForm={activeForm} setActiveForm={setActiveForm} />
      <div className='form-cont'>
        {activeForm === 'Form1' && <Form1  />}
      </div>
    </div>
  );
};

export default Visa;
