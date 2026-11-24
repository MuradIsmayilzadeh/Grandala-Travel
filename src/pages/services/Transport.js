// { text: 'Airport Transfer', icon: 'fa fa-plane' },
// { text: 'Transfer Service', icon: 'fa fa-car' },
// { text: 'Rent a car', icon: 'fa fa-car' },// masini secilir, muddet ,tarix , əlavə not
// { text: 'Cargo', icon: 'fa fa' },
import React, { useState } from 'react';

import './Accomodation.css'; // Make sure to include your CSS file

const Form1 = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
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
          type="text"
          name="field1"
          placeholder="Field 1"
          value={formData.field1}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="field2"
          placeholder="Field 2"
          value={formData.field2}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Form2 = () => {
  const [formData, setFormData] = useState({
    field3: '',
    field4: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form 2 submitted:', formData);
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
          type="text"
          name="field3"
          placeholder="Field 3"
          value={formData.field3}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="field4"
          placeholder="Field 4"
          value={formData.field4}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Form3 = () => {
  const [formData, setFormData] = useState({
    field5: '',
    field6: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form 3 submitted:', formData);
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
          type="text"
          name="field5"
          placeholder="Field 5"
          value={formData.field5}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="field6"
          placeholder="Field 6"
          value={formData.field6}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Form4 = () => {
    const [formData, setFormData] = useState({
      field5: '',
      field6: '',
    });
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Form 3 submitted:', formData);
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
            type="text"
            name="field5"
            placeholder="Field 5"
            value={formData.field5}
            onChange={handleInputChange}
          />
          <textarea
            type="text"
            name="field6"
            placeholder="Field 6"
            value={formData.field6}
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
        onClick={() => setActiveForm('Form1')}
      >
        Airport Transfer
      </div>
      <div
        className={`top-bar ${activeForm === 'Form2' ? 'active' : ''}`}
        onClick={() => setActiveForm('Form2')}
      >
        Transfer Service
      </div>
      <div
        className={`top-bar ${activeForm === 'Form3' ? 'active' : ''}`}
        onClick={() => setActiveForm('Form3')}
      >
        Rent a car
      </div>
      <div
        className={`top-bar ${activeForm === 'Form4' ? 'active' : ''}`}
        onClick={() => setActiveForm('Form4')}
      >
        Cargo
      </div>
    </div>
  );
};

const Transport = () => {
  const [activeForm, setActiveForm] = useState('Form1');

  return (
    <div className="app">
      <TopBars activeForm={activeForm} setActiveForm={setActiveForm} />
      <div className='form-cont'>
        {activeForm === 'Form1' && <Form1 />}
        {activeForm === 'Form2' && <Form2  />}
        {activeForm === 'Form3' && <Form3 />}
        {activeForm === 'Form4' && <Form4 />}
      </div>
    </div>
  );
};

export default Transport;
