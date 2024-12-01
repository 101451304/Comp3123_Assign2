import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Login from './components/User/Login';
import Signup from './components/User/Signup';
import EmployeeList from './components/Employee/EmployeeList';
import AddEmployee from './components/Employee/AddEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import ViewEmployee from './components/Employee/ViewEmployee';

const API_URL = 'http://localhost:5000'; // Change this to your backend API URL

function App() {
  const [user, setUser] = useState(null);

  // Handle user login state
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(true);  // Set user to true if there's a valid token
    }
  }, []);

  // Handle logout
  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <h1>Employee Management</h1>
        {user ? (
          <>
            <button onClick={logout}>Logout</button>
            <Routes>
              <Route path="/EmployeeList" element={<EmployeeList />} />
              <Route path="/AddEmployee" element={<AddEmployee />} />
              <Route path="/EditEmployee/:id" element={<EditEmployee />} />
              <Route path="/ViewEmployee/:id" element={<ViewEmployee />} />
              <Route path="/" element={<EmployeeList />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/signup" element={<Signup setAuthToken={setUser} />} />
              <Route path="/login" element={<Login setAuthToken={setUser} />} />
              <Route path="/" element={<Login setAuthToken={setUser} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
