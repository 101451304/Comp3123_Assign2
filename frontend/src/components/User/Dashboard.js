import React from 'react';

const Dashboard = ({ token }) => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>Your token: {token}</p>
    </div>
  );
};

export default Dashboard;
