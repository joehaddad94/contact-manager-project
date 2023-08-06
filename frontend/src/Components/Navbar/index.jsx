import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Index = () => {
  return (
    <nav className='navbar'>
      <Link to = "/"><h1>Contact Manager</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/ContactForm" className='button'>Add Contact</Link>
      </div>
    </nav>
  );
}

export default Index;
