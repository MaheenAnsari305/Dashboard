import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="flex-center">
      <h1>Welcome to the Dashboard</h1>
      <div>
        <Link to="/products">
          <button>Products</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
        <Link to="/github-user-finder">
          <button>GitHub User Finder</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
