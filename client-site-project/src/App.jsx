import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/phones">phones</Link>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default App;