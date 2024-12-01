import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/employees', { name, position });
      alert('Employee added successfully');
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleAddEmployee}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Employee Name" 
          required 
        />
        <input 
          type="text" 
          value={position} 
          onChange={(e) => setPosition(e.target.value)} 
          placeholder="Position" 
          required 
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
