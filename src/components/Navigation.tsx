import React from 'react';
import { Link } from 'react-router';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trades">Trades</Link>
        </li>
        <li>
          <Link to="/create-token">Create Token</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 