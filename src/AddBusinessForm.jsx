import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createBusiness } from '../graphql/mutations';

const AddBusinessForm = () => {
  const [formData, setFormData] = useState({ name: '', category: '', location: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.graphql(graphqlOperation(createBusiness, { input: formData }));
      alert('Business added!');
      setFormData({ name: '', category: '', location: '' });
    } catch (err) {
      console.error('Error creating business:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>➕ Add Business</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddBusinessForm;
