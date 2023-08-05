import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Index = () => {
  return (
    <nav className='navbar'>
      <h1>Contact Manager</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className='button'>Add Contact</Link>
      </div>
    </nav>
  );
}

export default Index;
