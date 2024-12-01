import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams(); // Get employee ID from the URL params
  const navigate = useNavigate(); // For redirecting after successful update
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employees/${id}`);
        setName(response.data.name);
        setPosition(response.data.position);
      } catch (err) {
        console.error('Error fetching employee:', err);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/employees/${id}`, { name, position });
      alert('Employee updated successfully');
      navigate('/employees'); // Redirect to employee list page
    } catch (err) {
      console.error('Error updating employee:', err);
      alert('Error updating employee');
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdateEmployee}>
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
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
