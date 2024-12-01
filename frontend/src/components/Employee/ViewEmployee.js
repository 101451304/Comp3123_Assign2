import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEmployee = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employees/${match.params.id}`);
        setEmployee(response.data);
      } catch (err) {
        console.error('Error fetching employee:', err);
      }
    };

    fetchEmployee();
  }, [match.params.id]);

  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.position}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewEmployee;
